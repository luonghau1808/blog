<template>
    <div class="post-view fullscreen">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="card overflow-hidden d-flex flex-row post-card">
                        <!-- Left: Image / Carousel -->
                        <div class="post-images d-flex align-items-center justify-content-center">
                            <img
                                :src="getAssetUrl(currentImage)"
                                class="img-fluid"
                                alt="Post image"
                            />
                            <button v-if="post.images.length > 1" class="carousel-control-prev" @click="prevImage" aria-label="Previous">
                                ‹
                            </button>
                            <button v-if="post.images.length > 1" class="carousel-control-next" @click="nextImage" aria-label="Next">
                                ›
                            </button>
                            <div v-if="post.images.length > 1" class="image-dots">
                                <span
                                    v-for="(img, i) in post.images"
                                    :key="i"
                                    :class="['dot', { active: i === currentIndex }]"
                                    @click="goTo(i)"
                                ></span>
                            </div>
                        </div>

                        <!-- Right: Details -->
                        <div class="post-details d-flex flex-column">
                            <!-- Header -->
                            <div class="d-flex align-items-center px-3 py-2 border-bottom">
                                <img :src="post.user.avatar" class="rounded-circle user-avatar" alt="avatar" />
                                <div class="ms-2">
                                    <div class="username">{{ post.user.username }}</div>
                                    <div class="location text-muted small">{{ post.location }}</div>
                                </div>
                                <div class="ms-auto">
                                    <button class="btn btn-sm btn-link text-muted">...</button>
                                </div>
                            </div>

                            <!-- Comments feed (scrollable) -->
                            <div class="comments flex-grow-1 overflow-auto px-3 py-2">
                                <!-- Caption as first comment -->
                                <div class="mb-2">
                                    <span class="fw-bold me-1">{{ post.user.username }}</span>
                                    <span>{{ post.caption }}</span>
                                </div>
                                <div v-for="(c, i) in localComments" :key="i" class="mb-2">
                                    <span class="fw-bold me-1">{{ c.user }}</span>
                                    <span>{{ c.text }}</span>
                                </div>
                            </div>

                            <!-- Actions & meta -->
                            <div class="px-3 py-2 border-top">
                                <div class="d-flex align-items-center mb-2">
                                    <button class="btn btn-link p-0 me-3 action-btn d-flex align-items-center" @click="toggleLike">
                                        <i :class="liked ? 'bi-heart-fill text-danger' : 'bi-heart'"></i>
                                        <span class="action-label ms-2">{{ liked ? 'Đã thích' : 'Thích' }}</span>
                                    </button>

                                    <button class="btn btn-link p-0 me-3 action-btn d-flex align-items-center" @click="focusComment">
                                        <i class="bi-chat"></i>
                                        <span class="action-label ms-2">Bình luận</span>
                                    </button>

                                    <button class="btn btn-link p-0 me-3 action-btn d-flex align-items-center">
                                        <i class="bi-share"></i>
                                        <span class="action-label ms-2">Chia sẻ</span>
                                    </button>

                                    <div class="ms-auto">
                                        <button class="btn btn-link p-0 action-btn d-flex align-items-center">
                                            <i class="bi-bookmark"></i>
                                            <span class="action-label ms-2">Lưu</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="likes fw-bold mb-1">{{ likeCountText }}</div>
                                <div class="text-muted small mb-2">{{ timeAgo }}</div>

                                <!-- Add comment -->
                                <form class="d-flex align-items-center" @submit.prevent="addComment">
                                    <input
                                        v-model="newComment"
                                        ref="commentInput"
                                        class="form-control form-control-sm me-2"
                                        placeholder="Thêm bình luận..."
                                    />
                                    <button type="submit" class="btn btn-link px-2" :disabled="!newComment.trim()">Đăng</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="overlay-close">
            <button class="close-btn" @click="$router.back()">✕</button>
        </div>
    </div>
</template>

<script>
// build asset map for src/assets
const __assetModules = import.meta.glob('../assets/**', { eager: true, as: 'url' })
const assetMap = {}
for (const key in __assetModules) {
    const parts = key.split('/')
    const name = parts[parts.length - 1]
    assetMap[name] = __assetModules[key]
}


export default {
    name: "PostView",
    props: {
        post: {
            type: Object,
            default: () => ({
                user: {
                    username: "leminh",
                    avatar: 'img02.jpg',
                },
                images: [
                    'img02.jpg',
                    'img03.jpg',
                    'img04.jpg',
                    'img05.jpg',
                    'img06.jpg',
                ],
                location: "Hanoi, Vietnam",
                caption: "Một ngày đẹp trời!",
                likes: 128,
                likedByUser: false,
                comments: [
                    { user: "an", text: "Đẹp quá!" },
                    { user: "hoa", text: "Thích quá" },
                ],
                timestamp: new Date().toISOString(),
            }),
        },
    },
    data() {
        return {
            currentIndex: 0,
            liked: this.post.likedByUser,
            likeCount: this.post.likes,
            newComment: "",
            localComments: Array.isArray(this.post.comments) ? [...this.post.comments] : []
            ,
            // expose avatars for sidebar usage (pull from assetMap if available)
            avatars: [assetMap['avatar1.svg'] || '', assetMap['avatar2.svg'] || '', assetMap['avatar3.svg'] || '', assetMap['avatar4.svg'] || '', assetMap['avatar5.svg'] || '', assetMap['avatar6.svg'] || '']
        };
    },
    computed: {
        currentImage() {
            return this.post.images[this.currentIndex];
        },
        likeCountText() {
            return `${this.likeCount.toLocaleString()} lượt thích`;
        },
        timeAgo() {
            const then = new Date(this.post.timestamp);
            const sec = Math.floor((Date.now() - then) / 1000);
            if (sec < 60) return `${sec} giây`;
            const min = Math.floor(sec / 60);
            if (min < 60) return `${min} phút`;
            const h = Math.floor(min / 60);
            if (h < 24) return `${h} giờ`;
            const d = Math.floor(h / 24);
            return `${d} ngày`;
        },
    },
    methods: {
        prevImage() {
            this.currentIndex = (this.currentIndex + this.post.images.length - 1) % this.post.images.length;
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.post.images.length;
        },
        goTo(i) {
            this.currentIndex = i;
        },
        toggleLike() {
            this.liked = !this.liked;
            this.likeCount += this.liked ? 1 : -1;
        },
        addComment() {
            const txt = this.newComment.trim();
            if (!txt) return;
            // add comment to local array
            this.localComments.push({ user: 'Bạn', text: txt })

            this.newComment = "";
            this.$nextTick(() => this.focusComment());
        },
        focusComment() {
            this.$refs.commentInput && this.$refs.commentInput.focus();
        },
        // Resolve image path: supports external URLs, absolute paths, or filenames in src/assets
        getAssetUrl(path) {
            if (!path) return ''
            if (typeof path !== 'string') return ''
            if (path.startsWith('http') || path.startsWith('//')) return path
            if (path.startsWith('/')) return path
            if (assetMap[path]) return assetMap[path]
            try { return new URL(`../assets/${path}`, import.meta.url).href } catch { return path }
        }
    },
};
</script>

<style scoped>
.post-card {
    min-height: 600px;
    border: 1px solid #e6e6e6;
    display: flex;
}
/* Left image area */
.post-images {
    width: 60%;
    background: #000;
    position: relative;
    min-height: 600px;
}
.post-images img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}
/* Carousel buttons */
.carousel-control-prev,
.carousel-control-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,0.35);
    color: #fff;
    border: none;
    width: 36px;
    height: 60px;
    font-size: 32px;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
    padding: 0;
}
.carousel-control-prev { left: 8px; }
.carousel-control-next { right: 8px; }
.image-dots {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 6px;
}
.dot {
    width: 8px;
    height: 8px;
    background: rgba(255,255,255,0.5);
    border-radius: 50%;
    cursor: pointer;
}
.dot.active { background: #fff; }

/* Right details */
.post-details {
    width: 40%;
    display: flex;
    flex-direction: column;
    background: #fff;
}
.user-avatar { width: 40px; height: 40px; object-fit: cover; }
.username { font-weight: 600; }
.location { font-size: 0.85rem; }
/* Comments area */
.comments {
    padding-right: 1rem;
}
/* Actions */
.action-btn { font-size: 1.3rem; color: #222; }
.likes { font-size: 0.95rem; }

.action-label { margin-left: 6px; font-size: 0.95rem; color: #222; }

/* Small screens: stack */
@media (max-width: 992px) {
    .post-card { flex-direction: column; }
    .post-images, .post-details { width: 100%; }
    .post-images { min-height: 320px; }
    .post-details { min-height: 220px; }
}

/* Fullscreen overlay styles */
.post-view.fullscreen {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 1050;
}
.post-view.fullscreen .post-card {
    width: min(1100px, 96%);
    height: calc(100vh - 80px);
    display: flex;
    overflow: hidden;
}
.post-view.fullscreen .post-images { min-height: auto; }
.post-view.fullscreen .post-details { height: 100%; }
.overlay-close { position: absolute; top: 12px; right: 18px; z-index: 1100 }
.close-btn { background: rgba(255,255,255,0.9); border: none; padding: 8px 10px; border-radius: 6px; cursor: pointer; font-size: 18px }

@media (max-width: 992px) {
    .post-view.fullscreen { padding: 8px }
    .post-view.fullscreen .post-card { height: calc(100vh - 32px); flex-direction: column }
}
</style>