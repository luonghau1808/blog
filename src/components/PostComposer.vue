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
              <i class="bi bi-image"></i> Ảnh/Video
            </label>
            <button class="btn btn-light btn-sm"><i class="bi bi-emoji-smile"></i> Cảm xúc</button>
            <button class="btn btn-light btn-sm"><i class="bi bi-geo-alt"></i> Địa điểm</button>
          </div>

          <div>
            <button class="btn btn-outline-secondary me-2" @click="cancel" :disabled="submitting">Hủy</button>
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

    <button class="composer-close btn btn-light" @click="cancel">✕</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import userAvatarImg from '@/assets/img01.jpg'

const emit = defineEmits(['close'])

const fileInput = ref(null)
const previews = ref([])
const files = ref([])
const caption = ref('')
const submitting = ref(false)

const userAvatar = userAvatarImg

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

const resetForm = () => {
  previews.value = []
  files.value = []
  caption.value = ''
}

const cancel = () => {
  resetForm()
  emit('close')
}

const submitPost = async () => {
  if (!files.value.length) {
    alert('Vui lòng chọn ít nhất một ảnh.')
    return
  }
  submitting.value = true
  try {
    // demo submit
    await new Promise((r) => setTimeout(r, 700))
    resetForm()
    alert('Đăng thành công (demo).')
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
