<template>
  <div class="composer-overlay">
    <div class="composer-card card shadow-sm">
      <div class="card-body">
        <h3 class="text-center fw-bold mb-3">Đăng bài viết</h3>

        <div class="d-flex">
          <img :src="userAvatar" class="rounded-circle me-3"
               style="width:48px;height:48px;object-fit:cover;" />

          <textarea v-model="caption" class="form-control" rows="3"
                    placeholder="Bạn đang nghĩ gì?"></textarea>
        </div>

        <div class="d-flex justify-content-between align-items-center mt-3">
          <div class="d-flex gap-2">
            <label class="btn btn-light btn-sm mb-0">
              <input ref="fileInput" type="file" accept="image/*"
                     class="d-none" multiple @change="onFileChange" />
              <i class="bi bi-image"></i> 🖼️Ảnh/Video
            </label>
            <button class="btn btn-light btn-sm" @click="toggleLocation">
              <i class="bi bi-geo-alt"></i> 📍Địa điểm
            </button>
          </div>

          <div>
            <button class="btn btn-outline-secondary me-2"
                    @click="cancel" :disabled="submitting">Hủy</button>

            <button class="btn btn-primary"
                    @click="submitPost"
                    :disabled="submitting || (!previews.length && !caption.trim())">
              <span v-if="submitting"
                    class="spinner-border spinner-border-sm me-2"></span>
              Đăng
            </button>
          </div>
        </div>

        <div v-if="showLocationInput" class="mt-2">
          <input v-model="location" type="text"
                 class="form-control" placeholder="Nhập địa điểm..." />
        </div>

        <!-- Preview ảnh -->
        <div v-if="previews.length" class="mt-3 d-flex gap-2 flex-wrap">
          <div v-for="(p, i) in previews" :key="i"
               class="position-relative" style="width:120px;height:90px;">
            <img :src="p" class="rounded w-100 h-100" style="object-fit:cover;" />
            <button type="button"
                    class="btn btn-sm btn-danger position-absolute"
                    style="top:6px; right:6px;"
                    @click.stop="removeImage(i)">×</button>
          </div>
        </div>

      </div>
    </div>

    <button class="composer-close btn btn-light" @click="cancel">✕</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '@/services/api'   

const emit = defineEmits(['close'])

const fileInput = ref(null)
const previews = ref([])
const files = ref([])
const caption = ref('')
const location = ref('')
const submitting = ref(false)
const showLocationInput = ref(false)

const userAvatar = "/img01.jpg"

/* ----- Đọc file ảnh ----- */
function readFiles(list) {
  for (const file of Array.from(list)) {
    if (!file.type.startsWith("image/")) continue;

    const reader = new FileReader();
    reader.onload = (e) => {
      previews.value.push(e.target.result)
      files.value.push(file)
    }
    reader.readAsDataURL(file)
  }
}

function onFileChange(e) {
  const list = e.target.files
  if (list.length) readFiles(list)
  e.target.value = ""
}

function removeImage(index) {
  previews.value.splice(index, 1)
  files.value.splice(index, 1)
}

function toggleLocation() {
  showLocationInput.value = !showLocationInput.value
  if (!showLocationInput.value) location.value = ""
}

function resetForm() {
  previews.value = []
  files.value = []
  caption.value = ""
  location.value = ""
  showLocationInput.value = false
}

/* ============================
   📌 Gửi bài viết lên Fake API
   ============================ */
async function submitPost() {
  if (!caption.value.trim() && !previews.value.length) {
    alert("Vui lòng nhập nội dung hoặc chọn ảnh.")
    return
  }

  submitting.value = true

  try {
    // Lấy thông tin user
    const saved = localStorage.getItem("currentUser")
    const user = saved ? JSON.parse(saved) : { firstName: "User", lastName: "" }

    const username = `${user.lastName} ${user.firstName}`.trim() || "Người dùng"

    const newPost = {
      user: username,
      userAvatar: userAvatar,
      caption: caption.value,
      location: location.value,
      images: [...previews.value],   
      likes: 0,
      liked: false,
      comments: [],
      createdAt: Date.now()
    }

    // Gửi lên Fake API json-server
    await api.post("/posts", newPost)

    alert("Đăng bài thành công!")
    
    // Dispatch event to notify HomeView and others
    window.dispatchEvent(new Event('post-created'));

    resetForm()
    emit("close")
  } catch (err) {
    console.error(err)
    alert("Lỗi khi đăng bài!")
  } finally {
    submitting.value = false
  }
}

function cancel() {
  resetForm()
  emit("close")
}
</script>

<style scoped>
.composer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.composer-card {
  width: min(720px, 95%);
}
.composer-close {
  position: fixed;
  top: 18px;
  right: 18px;
}
</style>
