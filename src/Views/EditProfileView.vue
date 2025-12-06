<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6">
        <div class="card shadow-sm">
          <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
            <h4 class="fw-bold mb-0">Chỉnh sửa thông tin cá nhân</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="saveProfile">
              <!-- Avatar Preview -->
              <div class="text-center mb-4">
                <div class="position-relative d-inline-block">
                  <img :src="form.avatar || '/img01.jpg'" class="rounded-circle border" width="100" height="100"
                    style="object-fit: cover;" alt="Avatar Preview" />
                  <div class="mt-2 text-muted small">Ảnh đại diện hiện tại</div>
                </div>
              </div>

              <!-- Avatar Input -->
              <div class="mb-3">
                <label class="form-label">Ảnh đại diện</label>
                <div class="d-flex gap-2 align-items-center">
                    <input type="file" class="form-control" @change="onFileChange" accept="image/*">
                </div>
                <!-- fallback text input if needed, or just rely on file -->
                <div class="form-text">Chọn ảnh từ thiết bị của bạn (sẽ được lưu dưới dạng base64).</div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">Ngày sinh</label>
                  <input v-model="form.dob" type="date" class="form-control">
                </div>
                <div class="col-md-6 mb-3">
                   <label class="form-label">Số điện thoại</label>
                   <input v-model="form.phoneNumber" type="tel" class="form-control" placeholder="09xxxxxxxx">
                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-3">
                  <label class="form-label">Họ (Last Name)</label>
                  <input v-model="form.lastName" type="text" class="form-control" required>
                </div>
                <div class="col-md-6 mb-3">
                  <label class="form-label">Tên (First Name)</label>
                  <input v-model="form.firstName" type="text" class="form-control" required>
                </div>
              </div>

              <div class="mb-3">
                <label class="form-label">Email</label>
                <input v-model="form.email" type="email" class="form-control" required>
              </div>

              <div class="mb-3">
                <label class="form-label">Mật khẩu mới (Để trống nếu không đổi)</label>
                <input v-model="form.password" type="password" class="form-control" placeholder="******">
              </div>

              <div class="d-flex justify-content-end gap-2 mt-4">
                <router-link :to="{ name: 'Profile' }" class="btn btn-secondary">Hủy</router-link>
                <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api';

export default {
  name: "EditProfileView",
  data() {
    return {
      currentUser: null,
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        avatar: "",
        dob: "",
        phoneNumber: ""
      }
    };
  },
  created() {
    this.loadUser();
  },
  methods: {
    loadUser() {
      const u = localStorage.getItem('currentUser');
      if (u) {
        try {
          this.currentUser = JSON.parse(u);
          // Fill form
          this.form.firstName = this.currentUser.firstName || "";
          this.form.lastName = this.currentUser.lastName || "";
          this.form.email = this.currentUser.email || "";
          this.form.avatar = this.currentUser.avatar || "";
          this.form.dob = this.currentUser.dob || "";
          this.form.phoneNumber = this.currentUser.phoneNumber || "";
          // Password is usually not pre-filled for security, or we could leave it blank
        } catch (e) {
          console.error(e);
        }
      }
    },
    onFileChange(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                this.form.avatar = e.target.result; // Base64 string
            };
            reader.readAsDataURL(file);
        }
    },
    async saveProfile() {
      if (!this.currentUser || !this.currentUser.id) {
        alert("Lỗi: Không tìm thấy thông tin người dùng.");
        return;
      }

      // Update payload
      const payload = {
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        avatar: this.form.avatar,
        dob: this.form.dob,
        phoneNumber: this.form.phoneNumber
      };
      
      // Update password only if provided
      if (this.form.password && this.form.password.trim() !== "") {
        payload.password = this.form.password;
      }

      try {
        // 1. Update User Profile on Server
        const res = await api.patch(`/users/${this.currentUser.id}`, payload);
        
        // 2. Cascade Update: Posts and Comments in DB
        // Since we identify users by 'name' string in posts/comments, we MUST update them 
        // if the name changes, otherwise the user loses their posts.
        const oldName = `${this.currentUser.lastName} ${this.currentUser.firstName}`;
        const newName = `${this.form.lastName} ${this.form.firstName}`;
        const newAvatar = payload.avatar || this.currentUser.avatar;

        // Fetch all posts to find what needs updating
        // Ideally the backend handles this, but with json-server we do it manually.
        const postsRes = await api.get('/posts');
        const allPosts = postsRes.data || [];
        
        const updatePromises = [];

        for (const p of allPosts) {
            let changed = false;
            let pUpdates = {};

            // Check Post Author
            if (p.user === oldName) {
                pUpdates.user = newName;
                pUpdates.userAvatar = newAvatar;
                changed = true;
            } else if (p.user === newName && newAvatar !== p.userAvatar) {
                // Name match (or didn't change), but avatar changed
                pUpdates.userAvatar = newAvatar;
                changed = true;
            }

            // Check Comments
            if (p.comments && Array.isArray(p.comments)) {
                let commentsChanged = false;
                const updatedComments = p.comments.map(c => {
                    if (c.user === oldName) {
                        commentsChanged = true;
                        return { ...c, user: newName };
                    }
                    return c;
                });
                
                if (commentsChanged) {
                    pUpdates.comments = updatedComments;
                    changed = true;
                }
            }
            
            // Check LikedBy (if we want to preserve likes identity)
             if (p.likedBy && Array.isArray(p.likedBy) && p.likedBy.includes(oldName)) {
                const updatedLikedBy = p.likedBy.map(u => u === oldName ? newName : u);
                pUpdates.likedBy = updatedLikedBy;
                changed = true;
            }

            if (changed) {
                updatePromises.push(api.patch(`/posts/${p.id}`, pUpdates));
            }
        }

        if (updatePromises.length > 0) {
            await Promise.all(updatePromises);
        }

        // 3. Update Local Storage
        // We need to merge the response (or payload) with existing fields in currentUser
        const updatedUser = { ...this.currentUser, ...payload };
        if (res.data) {
           Object.assign(updatedUser, res.data);
        }

        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        localStorage.setItem('userAvatar', updatedUser.avatar || '');
        
        // Also update 'posts' in localStorage if it exists (cache sync)
        const storedPostsStr = localStorage.getItem('posts');
        if (storedPostsStr) {
             // ... existing local storage patch logic can remain or be replaced by the fact we trigger a reload ...
             // simpler to just clear it or let the reload handle it, but for safety lets keep the logic simple
             localStorage.removeItem('posts'); // Force reload from API
        }
        
        window.dispatchEvent(new Event('post-created')); 
        
        alert("Cập nhật thông tin thành công!");
        this.$router.push({ name: 'Profile' });
      } catch (e) {
        console.error("Failed to update profile", e);
        alert("Cập nhật thất bại. Vui lòng thử lại.");
      }
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 960px;
}
</style>
