<template>
    <div>
        <!-- Top navbar similar to Facebook header -->
        <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
            <div class="container">
                <a class="navbar-brand fw-bold" href="#">MyBlog</a>
                <div class="d-flex align-items-center ms-auto gap-3">
                    <input class="form-control form-control-sm rounded-pill d-none d-md-block" style="width:260px" placeholder="Tìm kiếm" />
                    <img :src="userAvatar" class="rounded-circle" style="width:36px;height:36px;object-fit:cover;" />
                </div>
            </div>
        </nav>

        <div class="container mt-4">
            <div class="row">
                <!-- Left navigation (collapsed on small screens) -->
                <aside class="col-md-3 d-none d-md-block">
                    <div class="list-group mb-3">
                        <router-link :to="{ name: 'Home' }" class="list-group-item list-group-item-action">Trang chủ</router-link>
                        <a class="list-group-item list-group-item-action">Khám phá</a>
                        <a class="list-group-item list-group-item-action">Tin nhắn</a>
                        <router-link :to="{ name: 'Profile' }" class="list-group-item list-group-item-action">Trang cá nhân</router-link>
                        <router-link :to="{ name: 'CreatePost' }" class="list-group-item list-group-item-action active">Tạo bài viết</router-link>
                    </div>
                </aside>

                <!-- Center: composer and feed preview -->
                <main class="col-12 col-md-6">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="d-flex">
                                <img :src="userAvatar" class="rounded-circle me-3" style="width:48px;height:48px;object-fit:cover;" />
                                <textarea v-model="caption" class="form-control" rows="3" placeholder="Bạn đang nghĩ gì?"></textarea>
                            </div>

                            <div class="d-flex justify-content-between align-items-center mt-3">
                                <div class="d-flex gap-2">
                                    <label class="btn btn-light btn-sm mb-0">
                                        <input ref="fileInput" type="file" accept="image/*" class="d-none" multiple @change="onFileChange" />
                                        <i class="bi bi-image"></i> Ảnh/Video
                                    </label>
                                    <button class="btn btn-light btn-sm"><i class="bi bi-emoji-smile"></i> Cảm xúc</button>
                                    <button class="btn btn-light btn-sm"><i class="bi bi-geo-alt"></i> Địa điểm</button>
                                </div>

                                <div>
                                    <button class="btn btn-outline-secondary me-2" @click="resetForm" :disabled="submitting">Hủy</button>
                                    <button class="btn btn-primary" @click="submitPost" :disabled="submitting || !previews.length">
                                        <span v-if="submitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Đăng
                                    </button>
                                </div>
                            </div>

                            <div v-if="previews.length" class="mt-3 d-flex gap-2 flex-wrap">
                                <div v-for="(p, i) in previews" :key="i" class="position-relative" style="width:120px;height:90px;">
                                    <img :src="p" class="rounded w-100 h-100" style="object-fit:cover;" />
                                    <button type="button" class="btn btn-sm btn-danger position-absolute" style="top:6px; right:6px;" @click.stop="removeImage(i)">×</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Simple feed preview below composer -->
                    <div class="card mb-3" v-for="n in 2" :key="n">
                        <div class="card-body">
                            <div class="d-flex align-items-center mb-2">
                                <img :src="userAvatar" class="rounded-circle me-2" style="width:40px;height:40px;object-fit:cover;" />
                                <div>
                                    <div class="fw-bold">hauntl_18</div>
                                    <small class="text-muted">Hanoi, Vietnam</small>
                                </div>
                            </div>
                            <p class="mb-2">Đây là bài viết mẫu {{ n }} - nội dung demo để xem giao diện.</p>
                        </div>
                    </div>
                </main>

                <!-- Right suggestions -->
                <aside class="col-md-3 d-none d-md-block">
                    <div class="card mb-3 p-3">
                        <h6 class="mb-3">Gợi ý cho bạn</h6>
                        <div v-for="n in 4" :key="n" class="d-flex align-items-center mb-2">
                            <img :src="userAvatar" class="rounded-circle me-2" style="width:40px;height:40px;object-fit:cover;" />
                            <div class="flex-grow-1">
                                <div class="small fw-bold">suggest{{ n }}</div>
                                <small class="text-muted">Gợi ý · Mới</small>
                            </div>
                            <a href="#" class="small text-decoration-none ms-2">Theo dõi</a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import userAvatarImg from '@/assets/img01.jpg'

export default {
    name: "CreatePost",
    setup() {
        const fileInput = ref(null);
        const previews = ref([]); // data URLs for preview
        const files = ref([]); // File objects
        const caption = ref("");
        const location = ref("");
        const share = ref({ fb: false, twitter: false });
        const isDrag = ref(false);
        const submitting = ref(false);

        const userAvatar = userAvatarImg

        const triggerFile = () => {
            fileInput.value && fileInput.value.click();
        };

        const readFiles = (fileList) => {
            for (const file of Array.from(fileList)) {
                if (!file.type.startsWith("image/")) continue;
                const reader = new FileReader();
                reader.onload = (e) => {
                    previews.value.push(e.target.result);
                    files.value.push(file);
                };
                reader.readAsDataURL(file);
            }
        };

        const onFileChange = (e) => {
            const list = e.target.files;
            if (!list.length) return;
            readFiles(list);
            // reset input to allow re-select same files if needed
            e.target.value = "";
        };

        const onDragOver = () => {
            isDrag.value = true;
        };

        const onDragLeave = () => {
            isDrag.value = false;
        };

        const onDrop = (e) => {
            isDrag.value = false;
            const dt = e.dataTransfer;
            if (dt && dt.files && dt.files.length) {
                readFiles(dt.files);
            }
        };

        const removeImage = (index) => {
            previews.value.splice(index, 1);
            files.value.splice(index, 1);
        };

        const resetForm = () => {
            previews.value = [];
            files.value = [];
            caption.value = "";
            location.value = "";
            share.value = { fb: false, twitter: false };
        };

        const submitPost = async () => {
            if (!files.value.length) {
                alert("Vui lòng chọn ít nhất một ảnh.");
                return;
            }
            submitting.value = true;
            try {
                // Chuẩn bị FormData để gửi lên API
                const form = new FormData();
                files.value.forEach((f) => form.append("images[]", f));
                form.append("caption", caption.value);
                form.append("location", location.value);
                form.append("share_fb", share.value.fb ? "1" : "0");
                form.append("share_twitter", share.value.twitter ? "1" : "0");

                // Thay bằng axios/fetch lên endpoint của bạn:
                // await axios.post('/api/posts', form, { headers: { 'Content-Type': 'multipart/form-data' }});
                console.log("Submit FormData (demo):", {
                    imagesCount: files.value.length,
                    caption: caption.value,
                    location: location.value,
                    share: share.value,
                });

                // giả lập delay
                await new Promise((r) => setTimeout(r, 700));

                // Sau khi thành công reset form hoặc điều hướng
                resetForm();
                alert("Đăng thành công (demo).");
            } catch (err) {
                console.error(err);
                alert("Đã có lỗi xảy ra khi đăng.");
            } finally {
                submitting.value = false;
            }
        };

        return {
            fileInput,
            previews,
            caption,
            location,
            share,
            isDrag,
            submitting,
            triggerFile,
            onFileChange,
            onDragOver,
            onDragLeave,
            onDrop,
            removeImage,
            resetForm,
            submitPost,
            userAvatar,
        };
    },
};
</script>

<style scoped>
.upload-area {
    min-height: 180px;
    cursor: pointer;
}
.upload-area--drag {
    background-color: #e9f7ff;
    border-color: #66b2ff;
}
.upload-area img {
    display: block;
}
</style>