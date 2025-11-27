<template>
    <header class="">
        <nav class="navbar navbar-light bg-white border-bottom py-2 fixed-top">
            <div class="container-fluid d-flex justify-content-between align-items-center position-relative">
                <div class="d-flex align-items-center gap-3">
                    <a class="navbar-brand mb-0 h1 fw-bold" href="#">MyBlog</a>
                    <form class="d-none d-sm-block">
                        <input class="form-control form-control-sm rounded-pill" style="width: 240px"
                            placeholder="Tìm kiếm" />
                    </form>
                    <div class="inline-icon-menu d-none d-md-flex align-items-center ms-2">
                        <router-link :to="{ name: 'Home' }" class="icon-btn" title="Trang chủ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path
                                    d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z" />
                            </svg>
                        </router-link>
                        <router-link :to="{ name: 'Profile' }" class="icon-btn" title="Trang cá nhân">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" class="me-2 menu-icon">
                                <path
                                    d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z" />
                            </svg>
                        </router-link>
                        <a href="#" class="icon-btn" title="Khám phá">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path
                                    d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM276.5 211.5C269.1 207 259.8 206.8 252.2 211C244.6 215.2 240 223.3 240 232L240 408C240 416.7 244.7 424.7 252.3 428.9C259.9 433.1 269.1 433 276.6 428.4L420.6 340.4C427.7 336 432.1 328.3 432.1 319.9C432.1 311.5 427.7 303.8 420.6 299.4L276.6 211.4zM362 320L288 365.2L288 274.8L362 320z" />
                            </svg>
                        </a>
                        <a href="#" class="icon-btn" title="Tin nhắn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path
                                    d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="d-flex gap-3">
                    <div class="rounded-circle overflow-hidden" style="width: 32px; height: 32px">
                        <img src="/img01.jpg" class="w-100 h-100 object-fit-cover" alt="avatar" />
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <br /><br />
    <div class="profile-view">
        <!-- Cover -->
        <div class="profile-cover bg-dark text-white position-relative">
            <div class="container">
                <div class="d-flex align-items-end justify-content-between" style="height: 220px">
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
                    <a class="nav-link" :class="{ active: activeTab === tab }" href="#"
                        @click.prevent="activeTab = tab">{{ tab }}</a>
                </li>
            </ul>

            <!-- Content -->

            <div class="row mt-4">
                <!-- Nếu tab là Bài viết: có 3 cột -->
                <template v-if="activeTab === 'Bài viết'">
                    <!-- Left Sidebar -->
                    <aside class="col-lg-3 mb-4">
                        <div class="card mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Giới thiệu</h5>
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
                                        <img :src="f.avatar" class="friend-avatar" :alt="f.name" />
                                    </div>
                                </div>
                                <a href="#" class="d-block text-decoration-none mt-2">Xem tất cả</a>
                            </div>
                        </div>
                    </aside>

                    <!-- Main Feed -->
                    <main class="col-lg-6 mb-4">
                        <!-- Composer và Posts-->
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                  
                                        <div class="d-flex">
                                            <img :src="user.avatar" class="rounded-circle me-2" width="48" height="48"
                                                alt="avatar" />
                                            <input :value="newPost" class="form-control"
                                                placeholder="Bạn đang nghĩ gì?" @click="showComposer = true" readonly />
                                       
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-for="post in posts" :key="post.id" class="card mb-3">
                            <div class="card-body">
                                <div class="d-flex mb-2">
                                    <img :src="post.user.avatar" class="rounded-circle me-2" width="48" height="48"
                                        alt="avatar" />
                                    <div>
                                        <div class="fw-bold">{{ post.user.name }}</div>
                                        <small class="text-muted">{{ post.time }}</small>
                                    </div>
                                    <div class="ms-auto position-relative">
                                        <button class="btn btn-sm p-1" @click="toggleMenu(post)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                                fill="currentColor" viewBox="0 0 16 16">
                                                <path
                                                    d="M3 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5-1a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                                            </svg>
                                        </button>
                                        <div v-if="post.showMenu"
                                            class="position-absolute bg-white border rounded shadow-sm p-2"
                                            style="right: 0; top: 30px; width: 150px; z-index: 10">
                                            <div class="dropdown-item py-1" @click="editPost(post)"> Sửa bài viết</div>
                                            <div class="dropdown-item py-1" @click="deletePost(post)">
                                                Xóa bài viết
                                            </div>
                                            <div class="dropdown-item py-1" @click="hidePost(post)"> Ẩn bài viết</div>
                                            <div class="dropdown-item py-1  text-muted" @click="post.showMenu = false">Hủy</div>
                                        </div>
                                    </div>
                                </div>
                                <p>{{ post.content }}</p>
                                <img v-if="post.image" :src="post.image" class="img-fluid rounded" alt="post image" />

                                <div class="d-flex justify-content-between p-2">
                                    <div class="d-flex gap-3">
                                        <!-- Like -->
                                        <button class="btn p-0" @click="post.likes++">
                                            <svg v-if="!post.liked" xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" fill="none" stroke="currentColor" stroke-width="2"
                                                class="bi bi-heart">
                                                <path
                                                    d="M20.8 4.6a5.6 5.6 0 0 0-7.9 0L12 5.5l-0.9-0.9a5.6 5.6 0 0 0-7.9 7.9L12 22.1l8.8-9.7a5.6 5.6 0 0 0 0-7.9z" />
                                            </svg>
                                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                fill="#e74c3c" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                        </button>
                                        <!-- Comment -->
                                        <button class="btn p-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                stroke="currentColor" stroke-width="2" class="bi bi-chat">
                                                <path
                                                    d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <!-- Likes and Caption -->
                                <div class="px-2 pb-2">
                                    <div class="fw-bold mb-1">{{ post.likes }} lượt thích</div>
                                    <div class="text-muted small mb-2" v-if="post.comments && post.comments.length" @click="post.showComments = !post.showComments" style="cursor: pointer;">
                                        Xem tất cả {{ post.comments.length }} bình luận
                                    </div>
                                </div>

                                <!-- Comments List -->
                                <div class="px-2 pb-2" v-if="post.showComments && post.comments && post.comments.length">
                                    <div v-for="c in post.comments" :key="c.id" class="mb-1">
                                        <strong>{{ c.user }}</strong>: {{ c.content }}
                                    </div>
                                </div>

                                <!-- Comment Input -->
                                <div class="px-2 pb-2 d-flex align-items-center">
                                    <input v-model="post.newComment" class="form-control me-2"
                                        placeholder="Thêm bình luận..." />
                                    <button class="btn btn-primary p-2" @click="addComment(post)">Đăng</button>
                                </div>
                            </div>
                        </div>
                    </main>

                    <!-- Right Sidebar -->
                    <aside class="col-lg-3 mb-4">
                        <div class="card mb-3">
                            <div class="card-body">
                                <h6 class="card-title">Lời mời kết bạn</h6>
                                <ul class="list-unstyled mb-0">
                                    <li class="d-flex align-items-center mb-2" v-for="s in suggestions" :key="s.id">
                                        <img :src="s.avatar" class="rounded-circle me-2" width="40" height="40"
                                            alt="s" />
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
                </template>

                <!-- Nếu tab khác: full-width -->
                <template v-else>
                    <main class="col-12 mb-4">
                        <div v-if="activeTab === 'Giới thiệu'" class="card">
                            <div class="card-body">
                                <h5>Thông tin chi tiết</h5>
                                <p><strong>Học vấn:</strong> {{ user.education }}</p>
                                <p><strong>Vị trí:</strong> {{ user.location }}</p>
                                <p><strong>Ngày tham gia:</strong> {{ user.joined }}</p>
                                <p><strong>Sở thích:</strong> Thích nghe nhạc, đọc sách, đi du lịch</p>
                                <p>
                                    <strong>Mục tiêu:</strong> Hoàn thành khóa học tại FPT Polytechnic và phát triển
                                    sự nghiệp lập trình
                                </p>
                            </div>
                        </div>

                        <div v-else-if="activeTab === 'Bạn bè'" class="card">
                            <div class="card-body">
                                <h5>Bạn bè của bạn</h5>
                                <p class="text-muted mb-3">Tổng số bạn bè: {{ friends.length }}</p>
                                <div class="row g-2">
                                    <div class="col-3 mb-2" v-for="f in friends" :key="f.id">
                                        <img :src="f.avatar" class="friend-avatar" :alt="f.name" />
                                        <div class="fw-bold">{{ f.name }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-else-if="activeTab === 'Ảnh'" class="card">
                            <div class="card-body">
                                <h5>Ảnh của bạn</h5>
                                <div class="row g-2">
                                    <div class="col-3 mb-2" v-for="p in photos" :key="p">
                                        <img :src="p" class="img-fluid rounded" alt="photo" />
                                    </div>
                                </div>
                                <a href="#" class="d-block text-decoration-none mt-2">Xem tất cả ảnh</a>
                            </div>
                        </div>

                        <div v-else-if="activeTab === 'Xem thêm'" class="card">
                            <div class="card-body">
                                <h5>Thông tin khác</h5>
                                <p>Chưa có thông tin thêm.</p>
                            </div>
                        </div>
                    </main>
                </template>
            </div>
        </div>
    </div>
    <PostComposer v-if="showComposer" @close="showComposer = false" />
</template>

<script>
import PostComposer from "@/Views/PostComposer.vue";

export default {
    name: "ProfileView",
    components: {
        PostComposer
    },
    data() {
        return {
            showComposer: false,
            tabs: ["Bài viết", "Giới thiệu", "Bạn bè", "Ảnh", "Xem thêm"],
            activeTab: "Bài viết",
            newPost: "",
            user: {
                name: "Ng Thi Luong Hau",
                location: "Hanoi, Vietnam",
                education: "FPT University",
                joined: "January 2015",
                avatar: "/img01.jpg",
            },
            friends: [
                { id: 1, name: "Lê Huyền", avatar: "img36.jpg" },
                { id: 2, name: "Đào Ánh Hà", avatar: "img03.jpg" },
                { id: 3, name: "Trần Quỳnh Anh", avatar: "img13.jpg" },
                { id: 4, name: "Vũ Minh Hương", avatar: "img15.jpg" },
                { id: 5, name: "Lê Thanh Thư", avatar: "img25.jpg" },
                { id: 6, name: "Đào Thanh Hiền", avatar: "img23.jpg" },
            ],
            suggestions: [
                { id: 1, name: "Lê Thị Ngọc Anh", avatar: "img27.jpg", mutual: 3 },
                { id: 2, name: "Trần Thị Linh", avatar: "img23.jpg", mutual: 2 },
            ],
            photos: ["/img18.jpg", "/img19.jpg", "/img20.jpg", "/img21.jpg", "/img22.jpg"],
            posts: [], // Will be loaded
            staticPosts: [
                {
                    id: 1,
                    user: { name: "Ng Thi Luong Hau", avatar: "/img01.jpg" },
                    time: "2 hrs",
                    content: "Một khoảnh khắc tuyệt vời từ chuyến đi gần đây",
                    image: "/img21.jpg",
                    likes: 34,
                    comments: [
                         { id: 1, user: "Lê Huyền", content: "Xinh quá nè!", createdAt: Date.now() - 3600000 },
                         { id: 2, user: "Đào Ánh Hà", content: "Tuyệt vời!", createdAt: Date.now() - 1800000 }
                    ],
                    newComment: "",
                    showComments: false,
                    showMenu: false,
                    liked: false,
                    hidden: false

                },
                {
                    id: 2,
                    user: { name: "Ng Thi Luong Hau", avatar: "/img01.jpg" },
                    time: "Yesterday",
                    content: "hehe.",
                    image: null,
                    likes: 12,
                    comments: [],
                    newComment: "",
                    showComments: false,
                    showMenu: false,
                    liked: false,
                    hidden: false
                },
            ],
        };
    },
    created() {
        this.loadUser();
        this.loadPosts();
        window.addEventListener('post-created', this.loadPosts);
    },
    beforeUnmount() {
        window.removeEventListener('post-created', this.loadPosts);
    },
    methods: {
        loadUser() {
            const currentUserStr = localStorage.getItem('currentUser');
            if (currentUserStr) {
                try {
                    const u = JSON.parse(currentUserStr);
                    if (u.lastName && u.firstName) {
                        this.user.name = `${u.lastName} ${u.firstName}`;
                    }
                } catch (e) {
                    console.error('Error parsing user', e);
                }
            }
        },
        loadPosts() {
            const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
            // Filter posts for current user.
            // Note: The stored posts structure is slightly different (user is a string name),
            // while static posts use an object. We need to normalize or handle both.
            // For this demo, we assume stored posts with matching user name belong to this profile.
            
            const myStoredPosts = storedPosts.filter(p => p.user === this.user.name).map(p => ({
                ...p,
                user: { name: p.user, avatar: p.userAvatar || this.user.avatar }, // Normalize structure
                image: (p.images && p.images.length) ? p.images[0] : null, // Normalize image
                showMenu: false,
                showComments: false,
                newComment: ""
            }));

            this.posts = [...myStoredPosts, ...this.staticPosts];
        },
        addPost() {
            if (!this.newPost.trim()) return;
            
            const newPost = {
                id: Date.now(),
                user: this.user.name,
                userAvatar: this.user.avatar,
                location: this.user.location,
                images: [],
                likes: 0,
                caption: this.newPost,
                time: "Vừa xong",
                liked: false,
                comments: [],
                createdAt: Date.now()
            };

            // Save to localStorage
            const existingPosts = JSON.parse(localStorage.getItem('posts') || '[]');
            existingPosts.unshift(newPost);
            localStorage.setItem('posts', JSON.stringify(existingPosts));

            // Dispatch event
            window.dispatchEvent(new Event('post-created'));

            this.newPost = "";
        },
        toggleMenu(post) {
            this.posts.forEach(p => p.showMenu = false);
            post.showMenu = !post.showMenu;
        },
        editPost(post) {
            const newText = prompt("Nhập nội dung mới:", post.content || post.caption); // Handle both structures
            if (newText) {
                post.content = newText;
                post.caption = newText;
            }
            post.showMenu = false;
        },
        deletePost(post) {
            if (confirm("Bạn có chắc muốn xóa bài viết?")) {
                this.posts = this.posts.filter(p => p.id !== post.id);
                // Also remove from localStorage if it exists there
                let existingPosts = JSON.parse(localStorage.getItem('posts') || '[]');
                const initialLen = existingPosts.length;
                existingPosts = existingPosts.filter(p => p.id !== post.id);
                if (existingPosts.length !== initialLen) {
                     localStorage.setItem('posts', JSON.stringify(existingPosts));
                     window.dispatchEvent(new Event('post-created'));
                }
            }
        },
        hidePost(post) {
            post.hidden = true;
            post.showMenu = false;
        },
        addComment(post) {
            const t = (post.newComment || '').trim();
            if (!t) return;
            const nextId = (post.comments && post.comments.length ? Math.max(...post.comments.map(c => c.id)) + 1 : 1);
            const c = { id: nextId, user: this.user.name, content: t, createdAt: Date.now() };
            post.comments = [...(post.comments || []), c];
            post.newComment = '';
        },
    },
};
</script>

<style scoped>
.inline-icon-menu {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 40;
}
.card { border-radius: 15px; }
.card textarea { border-radius: 10px; }
.dropdown-item:hover { background: #f1f1f1; cursor: pointer; }

.inline-icon-menu .icon-btn {
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #333;
    border-radius: 6px;
    text-decoration: none;
}

.inline-icon-menu .icon-btn svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
}

.inline-icon-menu .icon-btn:hover {
    background: rgba(0, 0, 0, 0.04);
}

.inline-icon-menu .icon-btn.router-link-active,
.inline-icon-menu .icon-btn.router-link-exact-active {
    background: #f8f9fa;
}

@media (max-width: 767.98px) {
    .inline-icon-menu {
        display: none !important;
    }
}

.menu-icon {
    width: 22px;
    height: 22px;
    fill: black;
    stroke: black;
}

.menu-icon:hover {
    background: rgba(0, 0, 0, 0.04);
}

.friend-avatar {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
}

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
