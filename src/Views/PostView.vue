<template>
  <header class="">
    <nav class="navbar navbar-light bg-white border-bottom py-2 fixed-top">
      <div class="container-fluid d-flex justify-content-between align-items-center position-relative">
        <div class="d-flex align-items-center gap-3">
          <a class="navbar-brand mb-0 h1 fw-bold" href="#">MyBlog</a>
          <form class="d-none d-sm-block">
            <input class="form-control form-control-sm rounded-pill" style="width:240px" placeholder="Tìm kiếm" />
          </form>
          <div class="inline-icon-menu d-none d-md-flex align-items-center ms-2 ">
            <router-link :to="{ name: 'Home' }" class="icon-btn" title="Trang chủ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z" />
              </svg>
            </router-link>
            <router-link :to="{ name: 'Profile' }" class="icon-btn" title="Trang cá nhân">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="me-2 menu-icon">
                <path d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z" />
              </svg>
            </router-link>
            <a href="#" class="icon-btn" title="Khám phá">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM276.5 211.5C269.1 207 259.8 206.8 252.2 211C244.6 215.2 240 223.3 240 232L240 408C240 416.7 244.7 424.7 252.3 428.9C259.9 433.1 269.1 433 276.6 428.4L420.6 340.4C427.7 336 432.1 328.3 432.1 319.9C432.1 311.5 427.7 303.8 420.6 299.4L276.6 211.4zM362 320L288 365.2L288 274.8L362 320z" />
              </svg>
            </a>
            <a href="#" class="icon-btn" title="Tin nhắn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
              </svg>
            </a>
          </div>
        </div>
        <div class="d-flex  gap-3">
          <div class="rounded-circle overflow-hidden " style="width:32px;height:32px;">
            <img src="/img01.jpg" class="w-100 h-100 object-fit-cover" alt="avatar" />
          </div>
        </div>
      </div>
    </nav>
  </header>
  <br><br>
  <div class="container py-4" style="padding-top: 70px;">
    <div class="row justify-content-center">
      <div class="col-xl-10">
        <div class="card shadow-sm">
          <div class="row g-0">
            <div class="col-lg-7 position-relative">
              <div class="post-image-wrapper">
                <img :src="currentImage" class="w-100 h-100 object-fit-cover" alt="post" />
                <button v-if="post.images && post.images.length > 1" class="carousel-prev" @click="prevImage">‹</button>
                <button v-if="post.images && post.images.length > 1" class="carousel-next" @click="nextImage">›</button>
                <div v-if="post.images && post.images.length > 1" class="image-dots">
                  <span v-for="(img, i) in post.images" :key="i" :class="['dot', { active: i === imageIndex }]" @click="gotoImage(i)"></span>
                </div>
              </div>
            </div>

            <div class="col-lg-5">
              <div class="p-3 h-100 d-flex flex-column">
                <div class="d-flex align-items-center mb-3">
                  <img :src="post.userAvatar" class="rounded-circle me-2" width="40" height="40" />
                  <div class="flex-grow-1">
                    <div class="fw-bold">{{ post.user }}</div>
                    <small class="text-muted" v-if="post.location">{{ post.location }}</small>
                    <div class="text-muted small">{{ post.createdAt ? timeAgo(post.createdAt) : post.time }}</div>
                  </div>
                  <div class="position-relative ms-auto">
                    <button class="btn btn-link p-0" @click="menuOpen = !menuOpen">•••</button>
                    <div v-if="menuOpen" class="card position-absolute" style="top: 28px; right: 0; z-index: 60; min-width: 180px;">
                      <div class="list-group list-group-flush">
                        <button class="list-group-item list-group-item-action" @click="copyPostLink(post)">Sao chép liên kết</button>
                        <button class="list-group-item list-group-item-action" @click="goBack">Trở về bài viết</button>
                        <button class="list-group-item list-group-item-action text-danger" @click="reportPost(post)">Báo cáo</button>
                        <button class="list-group-item list-group-item-action" @click="closeMenu">Hủy</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mb-2">
                  <strong>{{ post.likes }} lượt thích</strong>
                </div>

                <div class="mb-3">
                  <strong>{{ post.user }}</strong>
                  <span class="ms-1">{{ post.caption }}</span>
                </div>

                <div class="flex-grow-1 overflow-auto border rounded p-2" style="max-height: 360px;">
                  <div v-for="c in (post.comments || [])" :key="c.id" class="mb-2">
                    <strong>{{ c.user }}</strong>
                    <span class="ms-1">{{ c.content }}</span>
                    <div class="text-muted small">{{ timeAgo(c.createdAt) }}</div>
                  </div>
                </div>

                <div class="mt-3 d-flex">
                  <input v-model="newComment" class="form-control me-2" placeholder="Bình luận..." />
                  <button class="btn btn-primary" @click="addComment" :disabled="!newComment.trim()">Đăng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const imageIndex = ref(0)
const newComment = ref('')
const menuOpen = ref(false)

const post = reactive({
  id: null,
  user: 'Người dùng',
  userAvatar: '/img01.jpg',
  time: 'vừa xong',
  caption: '',
  likes: 0,
  image: '/img21.jpg',
  images: null,
  comments: []
})

onMounted(() => {
  const id = route.params.id
  try {
    const stored = sessionStorage.getItem('selectedPost')
    if (stored) {
      const data = JSON.parse(stored)
      if (String(data.id) === String(id)) {
        Object.assign(post, data)
        if (typeof data.currentImageIndex === 'number') {
          imageIndex.value = data.currentImageIndex
        }
      }
    }
  } catch (err) {
    console.error(err)
    alert('Đã có lỗi xảy ra khi tải bài viết')
  }
})

const currentImage = computed(() => {
  if (post.images && post.images.length) return post.images[imageIndex.value] || post.images[0]
  return post.image
})

function prevImage() {
  if (!post.images || !post.images.length) return
  imageIndex.value = (imageIndex.value - 1 + post.images.length) % post.images.length
}

function nextImage() {
  if (!post.images || !post.images.length) return
  imageIndex.value = (imageIndex.value + 1) % post.images.length
}

function gotoImage(i) {
  imageIndex.value = i
}
function copyPostLink(post) {
  const url = `${window.location.origin}/post/${post.id}`
  navigator.clipboard.writeText(url).then(() => {
    alert('Đã sao chép liên kết bài viết')
    menuOpen.value = false
  }).catch(err => {
    console.error(err)
    alert('Không thể sao chép liên kết bài viết')
  })
}
function reportPost() {
    const ok = window.confirm('Bạn muốn báo cáo bài viết này?')
    if (ok) alert('Đã gửi báo cáo')
    menuOpen.value = false 
}


function timeAgo(ts) {
  const delta = Date.now() - ts
  const s = Math.floor(delta / 1000)
  if (s < 5) return 'vừa xong'
  if (s < 60) return `${s} giây trước`
  const m = Math.floor(s / 60)
  if (m < 60) return `${m} phút trước`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h} giờ trước`
  const d = Math.floor(h / 24)
  return `${d} ngày trước`
}

function addComment() {
  const t = newComment.value.trim()
  if (!t) return
  const nextId = (post.comments && post.comments.length ? Math.max(...post.comments.map(c => c.id)) + 1 : 1)
  post.comments = [...(post.comments || []), { id: nextId, user: 'me', content: t, createdAt: Date.now() }]
  newComment.value = ''
}

function closeMenu() {
  menuOpen.value = false
}

function goBack() {
  if (window.history && window.history.length > 1) {
    router.back()
  } else {
    router.push({ name: 'Home' })
  }
  menuOpen.value = false
}
</script>

<style scoped>
.inline-icon-menu{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:40}
.inline-icon-menu .icon-btn{width:40px;height:40px;display:inline-flex;align-items:center;justify-content:center;color:#333;border-radius:6px;text-decoration:none}
.inline-icon-menu .icon-btn svg{width:20px;height:20px;fill:currentColor}
.inline-icon-menu .icon-btn:hover{background:rgba(0,0,0,0.04)}
.inline-icon-menu .icon-btn.router-link-active,.inline-icon-menu .icon-btn.router-link-exact-active{background:#f8f9fa}
.menu-icon{width:22px;height:22px;fill:black;stroke:black}
.menu-icon:hover{background:rgba(0,0,0,0.04)}
.post-image-wrapper{position:relative;min-height:520px;background:#000;display:flex;align-items:center;justify-content:center}
.post-image-wrapper img{max-height:520px;object-fit:contain}
.post-image-wrapper .carousel-prev,
.post-image-wrapper .carousel-next{position:absolute;top:50%;transform:translateY(-50%);background:rgba(0,0,0,0.45);color:#fff;border:none;width:40px;height:40px;font-size:20px;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:999px;z-index:6}
.post-image-wrapper .carousel-prev{left:12px}
.post-image-wrapper .carousel-next{right:12px}
.post-image-wrapper .carousel-prev:hover,
.post-image-wrapper .carousel-next:hover{background:rgba(0,0,0,0.65)}
.post-image-wrapper .image-dots{position:absolute;bottom:8px;left:50%;transform:translateX(-50%);display:flex;gap:6px;z-index:6}
.post-image-wrapper .dot{width:8px;height:8px;background:rgba(255,255,255,0.5);border-radius:50%;cursor:pointer}
.post-image-wrapper .dot.active{background:#fff}
</style>
