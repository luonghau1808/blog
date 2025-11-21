<template>
    <div class="profile-view">
        <div class="container">
            <!-- Cover & Avatar -->
            <div class="card mb-4 overflow-hidden">
                <div class="cover" :style="{ backgroundImage: 'url(' + user.cover + ')' }"></div>
                <div class="card-body pt-0">
                    <div class="d-flex align-items-end">
                        <div class="avatar-wrap">
                            <img :src="user.avatar" alt="avatar" class="avatar img-thumbnail" />
                        </div>
                        <div class="ms-3 flex-grow-1 mt-2 ">
                            <h3 class="mb-2">{{ user.name }}</h3>
                            <p class="text-muted mb-1">{{ user.title }}</p>
                            <div>
                                <button class="btn btn-primary btn-sm me-2">Chỉnh sửa trang cá nhân</button>
                                <button class="btn btn-outline-secondary btn-sm">Bạn bè</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <!-- Main layout -->
            <div class="row">
                <!-- Left: Feed -->
                <div class="col-lg-8">
                    <!-- About quick -->
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5>Giới thiệu</h5>
                            <p class="mb-1"><strong>Vị trí:</strong> {{ user.location }}</p>
                            <p class="mb-1"><strong>Công việc:</strong> {{ user.work }}</p>
                            <p class="mb-0"><strong>Trình độ học vấn:</strong> {{ user.education }}</p>
                        </div>
                    </div>

                    <!-- Post composer -->
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="d-flex">
                                <img :src="user.avatar" alt="avatar" class="rounded-circle me-2" style="width:48px;height:48px;object-fit:cover"/>
                                <input v-model="newPost" class="form-control" placeholder="Bạn đang nghĩ gì?" />
                            </div>
                            <div class="mt-2 text-end">
                                <button class="btn btn-sm btn-primary" @click="addPost">Đăng bài viết</button>
                            </div>
                        </div>
                    </div>

                    <!-- Posts -->
                    <div v-for="post in posts" :key="post.id" class="card mb-3">
                        <div class="card-body">
                            <div class="d-flex mb-2">
                                <img :src="post.user.avatar || user.avatar" class="rounded-circle me-2" style="width:48px;height:48px;object-fit:cover"/>
                                <div>
                                    <div class="fw-bold">{{ post.user.name }}</div>
                                    <small class="text-muted">{{ post.time }}</small>
                                </div>
                            </div>
                            <p class="mb-2">{{ post.text }}</p>
                            <img :src="post.image" class="img-fluid rounded mb-2" />
                            <div class="d-flex justify-content-between small text-muted">
                                <div>{{ post.likes }} Like</div>
                                <div>{{ post.comments.length }} Bình luận</div>
                            </div>
                            <hr />
                            <div class="d-flex">
                                <button class="btn btn-light btn-sm me-2" @click="toggleLike(post)">{{ post.liked ? 'Unlike' : 'Like' }}</button>
                                <button class="btn btn-light btn-sm me-2">Bình luận</button>
                                <button class="btn btn-light btn-sm">Share</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right: Sidebar -->
                <div class="col-lg-4">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h6 class="mb-3">Friends</h6>
                            <div class="d-flex flex-wrap">
                                <div v-for="f in friends" :key="f.id" class="me-2 mb-2 text-center" style="width:72px;">
                                    <img :src="f.avatar" class="rounded-circle mb-1" style="width:64px;height:64px;object-fit:cover" />
                                    <div class="small">{{ f.name }}</div>
                                </div>
                            </div>
                            <div class="text-end mt-2">
                                <a href="#" class="small">Xem tất cả</a>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h6 class="mb-2">Hình ảnh</h6>
                            <div class="row g-2">
                                <div class="col-4" v-for="(p,i) in photos" :key="i">
                                    <img :src="p" class="img-fluid rounded" style="height:72px;object-fit:cover;width:100%" />
                                </div>
                            </div>
                            <div class="text-end mt-2">
                                <a href="#" class="small">Xem tất cả</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- /row -->
        </div> <!-- /container -->
    </div>
</template>

<script setup>
import { ref } from 'vue'
import avatar1 from '../assets/img01.jpg'
import avatar2 from '../assets/img01.jpg'
import avatar3 from '../assets/img01.jpg'
import avatar4 from '../assets/img01.jpg'
import avatar5 from '../assets/img01.jpg'

const user = {
    name: 'Ng Thi Luong Hau',
    avatar: avatar1,
    cover: '../assets/img01.jpg',
    location: 'Ha Noi City, Vietnam',
    work: 'FPT Sofware',
    education: 'FPT University'
}

const friends = [
    { id: 1, name: 'Mai', avatar: avatar1 },
    { id: 2, name: 'Huy', avatar: avatar2 },
    { id: 3, name: 'Linh', avatar: avatar3 },
    { id: 4, name: 'Tuan', avatar: avatar4 },
    { id: 5, name: 'Hoa', avatar: avatar5 },
]

const photos = [
    'https://picsum.photos/200?1',
    'https://picsum.photos/200?2',
    'https://picsum.photos/200?3',
    'https://picsum.photos/200?4',
    'https://picsum.photos/200?5',
    'https://picsum.photos/200?6'
]

const posts = ref([
    {
        id: 1,
        user: { name: user.name, avatar: user.avatar },
        time: '2 hrs',
        text: 'Chia sẻ suy nghĩ mới hôm nay!',
        image: '@/assets/img01.jpg',
        likes: 12,
        liked: false,
        comments: []
    },
    {
        id: 2,
        user: { name: user.name, avatar: user.avatar },
        time: 'Yesterday',
        text: 'Một buổi sáng tuyệt vời để code.',
        image: null,
        likes: 5,
        liked: false,
        comments: [{ text: 'Nice!' }]
    }
])

const newPost = ref('')

function addPost() {
    const text = newPost.value && newPost.value.trim()
    if (!text) return
    posts.value.unshift({
        id: Date.now(),
        user: { name: user.name, avatar: user.avatar },
        time: 'Just now',
        text,
        image: null,
        likes: 0,
        liked: false,
        comments: []
    })
    newPost.value = ''
}

function toggleLike(post) {
    post.liked = !post.liked
    post.likes += post.liked ? 1 : -1
}
</script>

<style scoped>
.cover {
    height: 220px;
    background-size: cover;
    background-position: center;
}
.avatar-wrap {
    margin-top: -60px;
    margin-left: 16px;
}
.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid white;
}
@media (max-width: 767px) {
    .avatar-wrap { margin-left: 8px; margin-top: -50px; }
    .avatar { width: 90px; height: 90px; }
    .cover { height: 160px; }
}
</style>