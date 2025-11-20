<template>
    <div>
        <!-- Navbar -->
        <nav class="navbar navbar-light bg-white border-bottom py-2">
            <div class="container">
                <div class="d-flex align-items-center gap-3">
                    <a class="navbar-brand mb-0 h1 fw-bold" href="#">MyBlog</a>
                    <form class="d-none d-sm-block">
                        <input class="form-control form-control-sm rounded-pill" style="width:240px" placeholder="Tìm kiếm" />
                    </form>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <button class="btn btn-link p-0" title="Home">
                        <!-- home icon -->
                        
                    </button>
                    <button class="btn btn-link p-0" title="Messenger">
                       
                    </button>
                    <button class="btn btn-link p-0" title="Explore">
                        
                    </button>
                    <button class="btn btn-link p-0" title="Activity">
                    </button>
                    <div class="rounded-circle overflow-hidden" style="width:32px;height:32px;">
                        <img :src="avatar5" class="w-100 h-100 object-fit-cover" alt="avatar" />
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main content -->
        <div class="container-fluid mt-4">
            <div class="row justify-content">
                  <div class="col-3 col-md-2 d-none d-md-block">
                    <aside class="left-sidebar">
                        <div class="" style="top:80px;">
                            <ul class="nav flex-column">
                                <li class="nav-item mb-2">
                                    <router-link :to="{ name: 'Home' }" class="nav-link d-flex align-items-center p-2">
                                        <span class="me-3 icon">🏠</span>
                                        <span>Trang chủ</span>
                                    </router-link>
                                </li>

                                <li class="nav-item mb-2">
                                    <a class="nav-link d-flex align-items-center p-2" href="#">
                                        <span class="me-3 icon">🔎</span>
                                        <span>Tìm kiếm</span>
                                    </a>
                                </li>

                                <li class="nav-item mb-2">
                                    <a class="nav-link d-flex align-items-center p-2" href="#">
                                        <span class="me-3 icon">🧭</span>
                                        <span>Khám phá</span>
                                    </a>
                                </li>

                                <li class="nav-item mb-2">
                                    <a class="nav-link d-flex align-items-center p-2" href="#">
                                        <span class="me-3 icon">🎬</span>
                                        <span>Reels</span>
                                    </a>
                                </li>

                                <li class="nav-item mb-2">
                                    <a class="nav-link d-flex align-items-center p-2" href="#">
                                        <span class="me-3 icon">✉️</span>
                                        <span>Tin nhắn</span>
                                    </a>
                                </li>

                                <li class="nav-item mb-2">
                                    <a class="nav-link d-flex align-items-center p-2" href="#">
                                        <span class="me-3 icon">🔔</span>
                                        <span>Thông báo</span>
                                    </a>
                                </li>

                                <li class="nav-item mb-2">
                                    <a class="nav-link d-flex align-items-center p-2" href="#">
                                        <span class="me-3 icon">✚</span>
                                        <span>Tạo bài viết</span>
                                    </a>
                                </li>

                                <li class="nav-item mt-2">
                                    <router-link :to="{ name: 'Profile' }" class="nav-link d-flex align-items-center p-2">
                                        <span class="me-3 icon">👤</span>
                                        <span>Trang cá nhân</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <!-- Feed -->
                <div class="col-3 col-md-7">
                    <!-- Posts -->
                    <div v-for="post in posts" :key="post.id" class="bg-white mb-4 border rounded">
                        <!-- Post header -->
                        <div class="d-flex align-items-center p-2">
                            <div class="rounded-circle overflow-hidden me-2" style="width:40px;height:40px;">
                                <img :src="post.avatar" class="w-100 h-100 object-fit-cover" />
                            </div>
                            <div class="flex-grow-1">
                                <div class="fw-bold">{{ post.user }}</div>
                                <small class="text-muted">{{ post.location }}</small>
                            </div>

                            <div class="position-relative">
                                <button class="btn btn-link p-0" @click="toggleMenu(post.id)">•••</button>

                                <div v-if="openMenuId === post.id" class="card shadow-sm position-absolute" style="right:0; top:28px; z-index:50; min-width:180px;">
                                    <ul class="list-group list-group-flush small">
                                        <li class="list-group-item list-group-item-action" @click="reportPost(post.id)">Báo cáo</li>
                                        <li class="list-group-item list-group-item-action" @click="unfollowUser(post.user)">Bỏ theo dõi</li>
                                        <li class="list-group-item list-group-item-action" @click="addToFavorites(post.id)">Thêm vào mục yêu thích</li>
                                        <li class="list-group-item list-group-item-action" @click="goToPost(post.id)">Đi đến bài viết</li>
                                        <li class="list-group-item list-group-item-action" @click="copyLink(post.id)">Sao chép liên kết</li>
                                        <li class="list-group-item list-group-item-action text-center text-muted" @click="toggleMenu(null)">Hủy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Post image -->
                        <div class="post-image">
                            <img :src="post.image" class="w-100" alt="post image" />
                        </div>

                        <!-- Actions -->
                        <div class="p-2">
                            <div class="d-flex align-items-center gap-3 mb-1">
                                <button class="btn btn-link p-0 d-flex align-items-center" @click="toggleLike(post.id)" :title="likedHas(post.id) ? 'Đã thích' : 'Thích'">
                                    <svg v-if="!likedHas(post.id)" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                    <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="#e63946"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4a4.5 4.5 0 0 1 3.57 1.75L12 8.1l1.93-2.35A4.5 4.5 0 0 1 17.5 4C20.01 4 22 6 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                                    <span class="action-label ms-1">{{ likedHas(post.id) ? 'Đã thích' : 'Thích' }}</span>
                                </button>

                                <div class="d-flex flex-column align-items-center">
                                    <button class="btn btn-link p-0 mb-1" @click="toggleSave(post.id)" :title="savedHas(post.id) ? 'Đã lưu' : 'Lưu'">
                                        <svg v-if="!savedHas(post.id)" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                                        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                                    </button>

                                    <button class="btn btn-link p-0 d-flex align-items-center" title="Bình luận">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                                        <span class="action-label ms-1">Bình luận</span>
                                    </button>
                                </div>

                                <button class="btn btn-link p-0 d-flex align-items-center" title="Chia sẻ">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M22 2L11 13"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                                    <span class="action-label ms-1">Chia sẻ</span>
                                </button>

                                <div class="ms-auto">
                                    <!-- keep larger save icon on the right as well for quick access -->
                                    <button class="btn btn-link p-0" @click="toggleSave(post.id)" :title="savedHas(post.id) ? 'Đã lưu' : 'Lưu'">
                                        <svg v-if="!savedHas(post.id)" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                                        <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                                    </button>
                                </div>
                            </div>

                            <div class="px-1">
                                <div class="fw-bold mb-1">{{ post.likes + (likedHas(post.id) ? 1 : 0) }} lượt thích</div>
                                <div>
                                    <span class="fw-bold me-1">{{ post.user }}</span>
                                    <span>{{ post.caption }}</span>
                                </div>
                                <div class="text-muted mt-1" style="font-size:.9rem">Xem tất cả {{ post.commentsList.length }} bình luận</div>
                            </div>
                        </div>

                        <!-- Add comment -->
                        <div class="border-top p-2">
                            <div class="input-group input-group-sm">
                                <input v-model="newComments[post.id]" class="form-control form-control-sm" placeholder="Thêm bình luận..." />
                                <button class="btn btn-link text-primary" @click="addCommentToPost(post.id)" :disabled="!newComments[post.id] || !newComments[post.id].trim()">Đăng</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Sidebar -->
                <div class="col-3 col-md-3 d-none d-md-block">
                    <div class="bg-white p-3 rounded border mb-3 d-flex align-items-center">
                        <div class="rounded-circle overflow-hidden me-3" style="width:56px;height:56px;">
                            <img :src="avatar6" class="w-100 h-100 object-fit-cover" />
                        </div>
                        <div>
                            <div class="fw-bold">hauntl_18</div>
                            <small class="text-muted">Lương Hậu</small>
                        </div>
                        <div class="ms-auto">
                            <a href="#" class="small text-decoration-none">Chuyển</a>
                        </div>
                    </div>

                    <div class="bg-white p-3 rounded border">
                        <div class="d-flex justify-content-between mb-2">
                            <div class="text-muted">Gợi ý cho bạn</div>
                            <a href="#" class="small">Xem tất cả</a>
                        </div>
                        <div v-for="n in 4" :key="n" class="d-flex align-items-center mb-2">
                            <div class="rounded-circle overflow-hidden me-2" style="width:40px;height:40px;">
                                <img :src="avatars[(n - 1) % avatars.length]" class="w-100 h-100 object-fit-cover" />
                            </div>
                            <div class="flex-grow-1">
                                <div class="small fw-bold">suggest{{ n }}</div>
                                <small class="text-muted">Gợi ý · Mới</small>
                            </div>
                            <a href="#" class="small text-decoration-none">Theo dõi</a>
                        </div>
                    </div>

                    <div class="text-muted small mt-3 "  >
                        Giới thiệu · Trợ giúp · Báo chí · API · Việc làm · Quyền riêng tư · Điều khoản · Vị trí · Ngôn ngữ · Meta đã xác minh  <br/>
                        © 2025 MYBLOG FROM META
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import avatar1 from '../assets/img01.jpg'
import avatar2 from '../assets/img01.jpg'
import avatar3 from '../assets/img01.jpg'
import avatar4 from '../assets/img01.jpg'
import avatar5 from '../assets/img01.jpg'
import avatar6 from '../assets/img01.jpg'

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6]

const posts = reactive([
    {
        id: 1,
        user: 'nguyenvan',
        avatar: avatar1,
        location: 'Hanoi, Vietnam',
        image: 'https://picsum.photos/900/900?random=11',
        likes: 123,
        caption: 'Một ngày đẹp trời!',
        commentsList: [
            { user: 'an', text: 'Đẹp quá!' },
            { user: 'hoa', text: 'Thích quá' }
        ]
    },
    {
        id: 2,
        user: 'phamthi',
        avatar: avatar2,
        location: 'Da Nang',
        image: 'https://picsum.photos/900/900?random=22',
        likes: 58,
        caption: 'Cuộc sống là những chuyến đi',
        commentsList: [
            { user: 'lan', text: 'Tuyệt vời' }
        ]
    }
])

// new comment text per post id
const newComments = reactive({})

const liked = ref(new Set())
const saved = ref(new Set())
const openMenuId = ref(null)
const router = useRouter()

function toggleLike(id) {
    if (likedHas(id)) liked.value.delete(id)
    else liked.value.add(id)
    // force reactivity when using Set
    liked.value = new Set(liked.value)
}

function toggleSave(id) {
    if (savedHas(id)) saved.value.delete(id)
    else saved.value.add(id)
    saved.value = new Set(saved.value)
}

function likedHas(id) {
    return liked.value.has(id)
}
function savedHas(id) {
    return saved.value.has(id)
}

function toggleMenu(id) {
    openMenuId.value = openMenuId.value === id ? null : id
}

function reportPost(id) {
    // placeholder: show alert / toast
    alert(`Báo cáo bài viết #${id} đã được gửi.`)
    openMenuId.value = null
}

function unfollowUser(username) {
    alert(`Bạn đã bỏ theo dõi ${username}.`)
    openMenuId.value = null
}

function addToFavorites(id) {
    toggleSave(id)
    openMenuId.value = null
}

function goToPost(id) {
    openMenuId.value = null
    router.push({ name: 'Post', params: { id } })
}

function copyLink(id) {
    const url = `${window.location.origin}/post/${id}`
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            alert('Đã sao chép liên kết vào bộ nhớ tạm.')
        }).catch(() => {
            prompt('Sao chép liên kết này:', url)
        })
    } else {
        prompt('Sao chép liên kết này:', url)
    }
    openMenuId.value = null
}

function addCommentToPost(postId) {
    const txt = (newComments[postId] || '').trim()
    if (!txt) return

    const p = posts.find(x => x.id === postId)
    if (!p) return

    // push to commentsList
    if (!p.commentsList) p.commentsList = []
    p.commentsList.push({ user: 'you', text: txt })

    // clear input
    newComments[postId] = ''
}
</script>

<style scoped>
.object-fit-cover {
    object-fit: cover;
}
.story-circle {
    width:64px;
    height:64px;
    border-radius:50%;
    padding:2px;
    background: linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    display:flex;
    align-items:center;
    justify-content:center;
}
.story-circle img {
    width:56px;
    height:56px;
    border-radius:50%;
    padding:2px;
    background:#fff;
}
.post-image img {
    max-height: 720px;
    object-fit: cover;
}
.btn-link { color: inherit; }

/* small label next to action icons */
.action-label {
    font-size: 0.92rem;
    color: #222;
}
</style>