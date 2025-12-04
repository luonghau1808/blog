<template>
  <div class="composer-overlay">
    <div class="composer-card card shadow-sm">
      <div class="card-body">
         <h3 class="text-center fw-bold mb-3">Đăng bài viết</h3>
        <div class="d-flex">
          <img :src="userAvatar" class="rounded-circle me-3" style="width:48px;height:48px;object-fit:cover;" />
          <textarea v-model="caption" class="form-control" rows="3" placeholder="Bạn đang nghĩ gì?"></textarea>
        </div>

        <div class="d-flex justify-content-between align-items-center mt-3">
         
          <div class="d-flex gap-2">
            
            <label class="btn btn-light btn-sm mb-0">
              <input ref="fileInput" type="file" accept="image/*" class="d-none" multiple @change="onFileChange" />
              <i class="bi bi-image"></i> 🖼️Ảnh/Video
            </label>
            <button class="btn btn-light btn-sm"><i class="bi bi-emoji-smile"></i> 🙂Cảm xúc</button>
            <button class="btn btn-light btn-sm" @click="toggleLocation"><i class="bi bi-geo-alt"></i> 📍Địa điểm</button>
          </div>

          <div>
            <button class="btn btn-outline-secondary me-2" @click="cancel" :disabled="submitting">Hủy</button>
            <button class="btn btn-primary" @click="submitPost" :disabled="submitting || (!previews.length && !caption.trim())">
              <span v-if="submitting" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              Đăng
            </button>
          </div>
        </div>

        <div v-if="showLocationInput" class="mt-2">
          <input v-model="location" type="text" class="form-control" placeholder="Nhập địa điểm..." />
        </div>

        <div v-if="previews.length" class="mt-3 d-flex gap-2 flex-wrap">
          <div v-for="(p, i) in previews" :key="i" class="position-relative" style="width:120px;height:90px;">
            <img :src="p" class="rounded w-100 h-100" style="object-fit:cover;" />
            <button type="button" class="btn btn-sm btn-danger position-absolute" style="top:6px; right:6px;" @click.stop="removeImage(i)">×</button>
          </div>
        </div>
      </div>
    </div>

    <button class="composer-close btn btn-light" @click="cancel">✕</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['close'])

const fileInput = ref(null)
const previews = ref([])
const files = ref([])
const caption = ref('')
const location = ref('')
const showLocationInput = ref(false)
const submitting = ref(false)

const userAvatar = '/img01.jpg'

const readFiles = (fileList) => {
  for (const file of Array.from(fileList)) {
    if (!file.type.startsWith('image/')) continue
    const reader = new FileReader()
    reader.onload = (e) => {
      previews.value.push(e.target.result)
      files.value.push(file)
    }
    reader.readAsDataURL(file)
  }
}

const onFileChange = (e) => {
  const list = e.target.files
  if (!list.length) return
  readFiles(list)
  e.target.value = ''
}

const removeImage = (index) => {
  previews.value.splice(index, 1)
  files.value.splice(index, 1)
}

const toggleLocation = () => {
  showLocationInput.value = !showLocationInput.value
  if (!showLocationInput.value) {
    location.value = ''
  }
}

const resetForm = () => {
  previews.value = []
  files.value = []
  caption.value = ''
  location.value = ''
  showLocationInput.value = false
}

const cancel = () => {
  resetForm()
  emit('close')
}

const submitPost = async () => {
  if (!previews.value.length && !caption.value.trim()) {
    alert('Vui lòng nhập nội dung hoặc chọn ảnh.')
    return
  }
  submitting.value = true
  try {
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 700))

    // Get current user
    const currentUserStr = localStorage.getItem('currentUser')
    let user = { firstName: 'User', lastName: 'Name', contact: '' }
    if (currentUserStr) {
        user = JSON.parse(currentUserStr)
    }
    const username = (user.lastName && user.firstName) ? `${user.lastName} ${user.firstName}` : 'Người dùng'

    // Create new post object
    const newPost = {
        id: Date.now(),
        user: username,
        userAvatar: '/img01.jpg', // Default avatar for now
        location: location.value || '',
        images: [...previews.value], // In a real app, these would be uploaded URLs
        likes: 0,
        caption: caption.value,
        time: 'Vừa xong',
        liked: false,
        comments: [],
        createdAt: Date.now()
    }

    // Save to localStorage
    const existingPosts = JSON.parse(localStorage.getItem('posts') || '[]')
    existingPosts.unshift(newPost)
    localStorage.setItem('posts', JSON.stringify(existingPosts))

    // Dispatch a custom event so other components can update immediately if they are listening
    window.dispatchEvent(new Event('post-created'))

    resetForm()
    alert('Đăng bài thành công!')
    emit('close')
  } catch (err) {
    console.error(err)
    alert('Đã có lỗi xảy ra khi đăng.')
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.composer-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.45);
  z-index: 2000;
  padding: 20px;
}
.composer-card { width: min(720px, 96%); }
.composer-close { position: fixed; top: 18px; right: 18px; z-index:2100 }
</style>
