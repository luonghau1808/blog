<template>
    <div class="profile-view">
        <!-- Cover -->
        <div class="profile-cover bg-dark text-white position-relative">
                     
            <div class="container">
                <div class="d-flex align-items-end justify-content-between" style="height: 220px;">
                    <div class="d-flex align-items-end">
                        <div class="profile-avatar-wrapper">
                            <img :src="user.avatar" class="profile-avatar rounded-circle border" alt="Avatar" />
                        </div>
                        <div class="ms-3 mb-3">
                            <h2 class="mb-0">{{ user.name }}</h2>
                            <p class="text-muted mb-0">{{ user.location }}</p>
                        </div>
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primary me-2">Chỉnh sửa trang cá nhân</button>                       
                    </div>
                </div>
            </div>
        </div>

        <!-- Tabs -->
        <div class="container">
            <ul class="nav nav-tabs mt-3">
                <li class="nav-item" v-for="tab in tabs" :key="tab">
                    <a class="nav-link" :class="{ active: activeTab === tab }" href="#" @click.prevent="activeTab = tab">{{ tab }}</a>
                </li>
            </ul>

            <!-- Content -->
            <div class="row mt-4">
                <!-- Left Sidebar -->
                <aside class="col-lg-3 mb-4">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Giới thiệu</h5>
                            <p class="card-text mb-1"><strong>Công việc:</strong> {{ user.work }}</p>
                            <p class="card-text mb-1"><strong>Học vấn:</strong> {{ user.education }}</p>
                            <p class="card-text mb-1"><strong>Vị trí:</strong> {{ user.location }}</p>
                            <p class="card-text"><strong>Tham gia:</strong> {{ user.joined }}</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Bạn bè</h5>
                            <div class="row g-2">
                                <div class="col-4" v-for="f in friends" :key="f.id">
                                    <img :src="f.avatar" class="img-fluid rounded" :alt="f.name" />
                                </div>
                            </div>
                            <a href="#" class="d-block text-decoration-none mt-2">Xem tất cả</a>
                        </div>
                    </div>
                </aside>

                <!-- Main Feed -->
                <main class="col-lg-6 mb-4">
                    <!-- Composer -->
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-10">
                                    <div class="d-flex">
                                <img :src="user.avatar" class="rounded-circle me-2" width="48" height="48" alt="avatar" />
                                <input v-model="newPost" class="form-control" placeholder="Bạn đang nghĩ gì" />                              
                            </div>
                                </div>
                                <div class="col-2">
                                    <button class="btn btn-primary mt-2" @click="addPost">Đăng</button>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>

                    <!-- Posts -->
                    <div v-for="post in posts" :key="post.id" class="card mb-3">
                        <div class="card-body">
                            <div class="d-flex mb-2">
                                <img :src="post.user.avatar" class="rounded-circle me-2" width="48" height="48" alt="avatar" />
                                <div>
                                    <div class="fw-bold">{{ post.user.name }}</div>
                                    <small class="text-muted">{{ post.time }}</small>
                                </div>
                            </div>
                            <p>{{ post.content }}</p>
                            <img v-if="post.image" :src="post.image" class="img-fluid rounded" alt="post image" />
                            <div class="d-flex justify-content-between mt-3 text-muted small">
                                <div><i class="bi bi-hand-thumbs-up me-1"></i> {{ post.likes }} Likes</div>
                                <div>{{ post.comments }} Comments</div>
                            </div>
                        </div>
                    </div>
                </main>

                <!-- Right Sidebar -->
                <aside class="col-lg-3 mb-4">
                    <div class="card mb-3">
                        <div class="card-body">
                            <h6 class="card-title">Lời mời kết bạn </h6>
                            <ul class="list-unstyled mb-0">
                                <li class="d-flex align-items-center mb-2" v-for="s in suggestions" :key="s.id">
                                    <img :src="s.avatar" class="rounded-circle me-2" width="40" height="40" alt="s" />
                                    <div class="flex-grow-1">
                                        <div class="fw-bold">{{ s.name }}</div>
                                        <small class="text-muted">Bạn chung: {{ s.mutual }}</small>
                                    </div>
                                    <button class="btn btn-sm btn-outline-primary">Chấp nhận</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">Ảnh</h6>
                            <div class="row g-2">
                                <div class="col-4" v-for="p in photos" :key="p">
                                    <img :src="p" class="img-fluid rounded" alt="photo" />
                                </div>
                            </div>
                            <a href="#" class="d-block text-decoration-none mt-2">Xem tất cả</a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfileView",
    data() {
        return {
            tabs: ["Bài viết", "Giới thiệu", "Bạn bè", "Ảnh", "Xem thêm"],
            activeTab: "Bài viết",
            newPost: "",
            user: {
                name: "Ng Thi Luong Hau",
                location: "Hanoi, Vietnam",
                work: "Frontend Developer",
                education: "FPT University",
                joined: "January 2015",
                avatar: '/img01.jpg',
                
            },
            friends: [
                { id: 1, name: "Bạn 1", avatar: 'img11.jpg' },
                { id: 2, name: "Bạn 2", avatar: 'img19.jpg' },
                { id: 3, name: "Bạn 3", avatar: 'img13.jpg' },
                { id: 4, name: "Bạn 4", avatar: 'img18.jpg' },
                { id: 5, name: "Bạn 5", avatar: 'img15.jpg' },
                { id: 6, name: "Bạn 6", avatar: 'img05.jpg' }
            ],
            suggestions: [
                { id: 1, name: "Lê Thị Ngọc Anh", avatar: 'img02.jpg', mutual: 3 },
                { id: 2, name: "Trần Thị Linh", avatar: 'img12.jpg', mutual: 2 }
            ],
            photos: [
                '/img02.jpg',
                '/img03.jpg',
                '/img04.jpg',
                '/img05.jpg',
                '/img15.jpg',
                '/img21.jpg'
            ],
            posts: [
                {
                    id: 1,
                    user: { name: "Ng Thi Luong Hau", avatar: '/img01.jpg' },
                    time: "2 hrs",
                    content: "Một khoảnh khắc tuyệt vời từ chuyến đi gần đây",
                    image: "/img21.jpg",
                    likes: 34,
                    comments: 5
                },
                {
                    id: 2,
                    user: { name: "Ng Thi Luong Hau", avatar: '/img01.jpg' },
                    time: "Yesterday",
                    content: "hehe.",
                    image: null,
                    likes: 12,
                    comments: 2
                }
            ]
        };
    },
    methods: {
        addPost() {
            if (!this.newPost.trim()) return;
            this.posts.unshift({
                id: Date.now(),
                user: { name: this.user.name, avatar: this.user.avatar },
                time: "Just now",
                content: this.newPost,
                image: null,
                likes: 0,
                comments: 0
            });
            this.newPost = "";
        }
    }
};
</script>

<style scoped>
.profile-cover {
    overflow: hidden;
    height: 260px;
}
.cover-img {
    object-fit: cover;
    height: 260px;
    filter: brightness(0.6);
}
.profile-avatar-wrapper {
    margin-top: 90px;
    position: relative;
    width: 140px;
    height: 140px;
}
.profile-avatar {
    width: 140px;
    height: 140px;
    object-fit: cover;
    border-width: 4px !important;
    background: #fff;
}
.card .card-title {
    font-size: 1rem;
}
.profile-view .nav-tabs .nav-link {
    color: #495057;
}
.profile-view .nav-tabs .nav-link.active {
    color: #0d6efd;
}
@media (max-width: 991px) {
    .profile-avatar-wrapper {
        margin-top: 60px;
        width: 100px;
        height: 100px;
    }
    .profile-avatar {
        width: 100px;
        height: 100px;
    }
}
</style>