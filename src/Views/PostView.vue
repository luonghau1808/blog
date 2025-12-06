<template>
  <div class="container py-4" style="padding-top: 70px;">
    <div class="row justify-content-center">
      <div class="col-xl-10">
        <div class="card shadow-sm overflow-hidden" v-if="post">
          <div class="row g-0">

            <!-- ================== HÌNH ẢNH ================== -->
            <div class="col-lg-7 bg-black d-flex align-items-center justify-content-center position-relative post-left-col">
              
              <div v-if="hasImages" class="w-100 h-100 d-flex align-items-center justify-content-center position-relative">
                <img :src="currentImage" class="img-fluid" style="max-height: 100%; object-fit: contain;" alt="post" />

                <!-- Nút chuyển ảnh -->
                <button v-if="post.images && post.images.length > 1" class="carousel-prev" @click="prevImage">‹</button>
                <button v-if="post.images && post.images.length > 1" class="carousel-next" @click="nextImage">›</button>

                <!-- Dấu chấm chuyển ảnh -->
                <div v-if="post.images && post.images.length > 1" class="image-dots">
                  <span v-for="(img, i) in post.images" :key="i"
                        :class="['dot', { active: i === imageIndex }]"
                        @click="gotoImage(i)"></span>
                </div>
              </div>
              <div v-else class="text-white">Không có hình ảnh</div>

            </div>

            <!-- ================== NỘI DUNG ================== -->
            <div class="col-lg-5 d-flex flex-column bg-white post-right-col">
              
              <!-- Header -->
              <div class="p-3 border-bottom d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <div class="position-relative me-3">
                    <img :src="post.userAvatar || '/img01.jpg'" class="rounded-circle border" width="32" height="32" style="object-fit:cover;" />
                  </div>
                  <div class="fw-bold text-dark text-decoration-none small">{{ post.user }}</div>
                  <span class="mx-1">•</span>
                  <button class="btn btn-link p-0 text-primary small text-decoration-none fw-bold">Theo dõi</button>
                </div>
                
                <!-- Menu -->
                <div class="position-relative">
                  <button class="btn btn-link text-dark p-0" @click="showMenu = !showMenu">
                    <svg aria-label="Tùy chọn khác" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                      <circle cx="12" cy="12" r="1.5"></circle>
                      <circle cx="6" cy="12" r="1.5"></circle>
                      <circle cx="18" cy="12" r="1.5"></circle>
                    </svg>
                  </button>
                  <div v-if="showMenu" class="card position-absolute shadow-sm p-0 overflow-hidden" 
                       style="top: 100%; right: 0; z-index: 1000; min-width: 180px;">
                    <div class="list-group list-group-flush text-start">
                      <button class="list-group-item list-group-item-action text-danger fw-bold" @click="reportPost">Báo cáo</button>
                      <button class="list-group-item list-group-item-action text-danger fw-bold">Bỏ theo dõi</button>
                      <button class="list-group-item list-group-item-action" @click="goBack">Đi tới bài viết</button>
                      <button class="list-group-item list-group-item-action" @click="copyLink">Sao chép liên kết</button>
                      <button class="list-group-item list-group-item-action" @click="showMenu = false">Hủy</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Comment list (Scrollable) -->
              <div class="flex-grow-1 overflow-auto p-3 custom-scrollbar" style="background: #fff;">
                
                <!-- Caption as first item -->
                <div class="d-flex mb-4">
                  <div class="flex-shrink-0 me-3">
                     <img :src="post.userAvatar || '/img01.jpg'" class="rounded-circle border" width="32" height="32" style="object-fit: cover;" />
                  </div>
                  <div>
                    <span class="fw-bold me-1 small">{{ post.user }}</span>
                    <span class="small">{{ post.caption }}</span>
                    <div class="text-muted small mt-2" style="font-size: 12px;">{{ post.createdAt ? timeAgo(post.createdAt) : post.time }}</div>
                  </div>
                </div>

                <!-- Comments -->
                <div v-for="c in post.comments" :key="c.id" class="mb-3">
                  <div class="d-flex w-100 group-hover-visible">
                    <!-- Avatar -->
                    <div class="flex-shrink-0 me-3">
                      <div class="rounded-circle bg-secondary d-flex align-items-center justify-content-center text-white border overflow-hidden" 
                           style="width: 32px; height: 32px; font-size: 12px;">
                           <img v-if="c.user === me.username" :src="me.avatar" class="w-100 h-100 object-fit-cover" />
                           <span v-else>{{ c.user.charAt(0).toUpperCase() }}</span>
                      </div>
                    </div>
                    
                    <!-- Comment content -->
                    <div class="flex-grow-1">
                      <!-- Editing mode -->
                      <div v-if="editingCommentId === c.id" class="mb-2">
                        <input v-model="editCommentText" type="text" class="form-control form-control-sm mb-1" 
                               placeholder="Chỉnh sửa bình luận..." />
                        <div class="d-flex gap-2">
                          <button class="btn btn-sm btn-primary" @click="saveEditComment(c)">Lưu</button>
                          <button class="btn btn-sm btn-outline-secondary" @click="cancelEditComment">Hủy</button>
                        </div>
                      </div>
                      
                      <!-- Normal mode -->
                      <div v-else class="position-relative">
                        <!-- Comment Text -->
                        <div class="d-inline">
                          <span class="fw-bold me-1 small">{{ c.user }}</span>
                          <span class="small">{{ c.content }}</span>
                        </div>
                        
                        <!-- Comment Metadata & Actions -->
                        <div class="d-flex align-items-center gap-3 mt-1">
                          <small class="text-muted" style="font-size: 12px;">{{ timeAgo(c.createdAt) }}</small>
                          <small v-if="c.likes > 0" class="text-muted fw-bold" style="font-size: 12px;">{{ c.likes }} lượt thích</small>
                          <button class="btn btn-link p-0 text-muted fw-bold" style="font-size: 12px; text-decoration: none;"
                                  @click="startReplyComment(c)">Trả lời</button>
                          
                          <!-- Ellipsis for actions (only visible on hover traditionally, but here permanent for UX) -->
                          <button class="btn btn-link p-0 text-muted" 
                                  style="font-size: 12px; text-decoration: none;"
                                  @click="toggleCommentMenu(c.id)">•••</button>
                        </div>

                        <!-- Comment menu -->
                        <div v-if="commentMenuOpen === c.id" 
                             class="card position-absolute shadow-sm p-0 overflow-hidden" 
                             style="top: 100%; left: 0; z-index: 1000; min-width: 140px;">
                          <div class="list-group list-group-flush text-start">
                            <button v-if="c.user === me.username" 
                                    class="list-group-item list-group-item-action small" 
                                    @click="startEditComment(c)">Chỉnh sửa</button>
                            <button v-if="c.user === me.username || post.user === me.username" class="list-group-item list-group-item-action text-danger small" 
                                    @click="showDeleteModal(c)">Xóa</button>
                            <button v-if="c.user !== me.username" 
                                    class="list-group-item list-group-item-action text-danger small" 
                                    @click="reportComment(c)">Báo cáo</button>
                            <button class="list-group-item list-group-item-action small" 
                                    @click="commentMenuOpen = null">Hủy</button>
                          </div>
                        </div>
                        
                        <!-- Replies -->
                        <div v-if="c.replies && c.replies.length > 0" class="mt-2 ps-3 border-start">
                          <div v-for="r in c.replies" :key="r.id" class="d-flex mb-2">
                            <div class="rounded-circle me-2 bg-secondary d-flex align-items-center justify-content-center text-white border overflow-hidden flex-shrink-0" 
                                 style="width: 24px; height: 24px; font-size: 10px;">
                                 <img v-if="r.user === me.username" :src="me.avatar" class="w-100 h-100 object-fit-cover" />
                                 <span v-else>{{ r.user.charAt(0).toUpperCase() }}</span>
                            </div>
                            <div>
                                <span class="fw-bold me-1 small">{{ r.user }}</span>
                                <span class="small">{{ r.content }}</span>
                                <div class="text-muted mt-1" style="font-size: 11px;">{{ timeAgo(r.createdAt) }}</div>
                            </div>
                          </div>
                        </div>
                        
                        <!-- Reply input -->
                        <div v-if="replyingToCommentId === c.id" class="mt-2">
                          <div class="d-flex align-items-center gap-2">
                            <input v-model="replyCommentText" 
                                   type="text" 
                                   class="form-control form-control-sm" 
                                   placeholder="Viết trả lời..." 
                                   @keyup.enter="submitReply(c)" />
                            <button class="btn btn-sm btn-link text-primary fw-bold text-decoration-none" 
                                    :disabled="!replyCommentText.trim()" 
                                    @click="submitReply(c)">Đăng</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Heart Icon for Comment -->
                    <div class="ms-2">
                        <button class="btn btn-link p-0 text-muted" @click="toggleCommentLike(c)">
                            <svg v-if="!isCommentLiked(c)" aria-label="Thích" class="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="12" role="img" viewBox="0 0 24 24" width="12">
                                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                            </svg>
                            <svg v-else aria-label="Bỏ thích" class="x1lliihq x1n2onr6 x1roi4f4" fill="#ff3040" height="12" role="img" viewBox="0 0 24 24" width="12">
                                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                            </svg>
                        </button>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Footer Actions -->
              <div class="p-3 border-top bg-white">
                <div class="d-flex align-items-center mb-2">
                  <div class="d-flex gap-3">
                      <button class="btn btn-link p-0 text-dark" @click="toggleLike">
                        <svg v-if="!post.liked" aria-label="Thích" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                          <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                        </svg>
                        <svg v-else aria-label="Bỏ thích" class="x1lliihq x1n2onr6 x5n08af" fill="#ff3040" height="24" role="img" viewBox="0 0 24 24" width="24">
                          <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                        </svg>
                      </button>

                      <button class="btn btn-link p-0 text-dark">
                        <svg aria-label="Bình luận" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                          <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
                        </svg>
                      </button>

                      <button class="btn btn-link p-0 text-dark">
                         <svg aria-label="Chia sẻ bài viết" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                            <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="2" y2="10.083"></line>
                            <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
                        </svg>
                      </button>
                  </div>
                  <div class="ms-auto">
                      <button class="btn btn-link p-0 text-dark">
                        <svg aria-label="Lưu" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
                        </svg>
                      </button>
                  </div>
                </div>
                
                <div class="fw-bold mb-1 small">{{ post.likes }} lượt thích</div>
                <div class="text-muted small text-uppercase mb-3" style="font-size: 10px;">{{ post.createdAt ? timeAgo(post.createdAt) : 'Vừa xong' }}</div>

                <!-- Add comment input -->
                <div class="d-flex align-items-center border-top pt-3">
                   <div class="me-2">
                       <svg aria-label="Biểu tượng cảm xúc" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                           <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                       </svg>
                   </div>
                   <div class="flex-grow-1 position-relative">
                      <input v-model="newComment" class="form-control border-0 px-0 shadow-none bg-transparent" placeholder="Thêm bình luận..." 
                             style="font-size: 14px;" @keyup.enter="doAddComment" />
                   </div>
                   <button class="btn btn-link text-primary fw-bold text-decoration-none small" 
                           :disabled="!newComment.trim()" @click="doAddComment">Đăng</button>
                </div>
              </div>

            </div>

          </div>
        </div>
        <div v-else class="text-center py-5">
            <p>Không tìm thấy bài viết.</p>
            <router-link :to="{name: 'Home'}" class="btn btn-primary">Quay lại trang chủ</router-link>
        </div>
      </div>
    </div>
  </div>
  
  <!-- ================== DELETE COMMENT MODAL ================== -->
  <div class="modal fade" :class="{ show: deleteModal.show }" :style="{ display: deleteModal.show ? 'block' : 'none' }" 
       tabindex="-1" @click.self="closeDeleteModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0 shadow-lg">
        <div class="modal-header border-0 pb-0">
          <h5 class="modal-title fw-bold">
            <i class="bi bi-exclamation-triangle-fill text-danger me-2"></i>
            Xóa bình luận
          </h5>
          <button type="button" class="btn-close" @click="closeDeleteModal"></button>
        </div>
        <div class="modal-body pt-2">
          <p class="mb-2">Bạn có chắc chắn muốn xóa bình luận này không?</p>
          <div v-if="deleteModal.comment" class="bg-light rounded p-3 mb-3">
            <div class="d-flex align-items-start">
              <div class="rounded-circle me-2 bg-secondary d-flex align-items-center justify-content-center text-white" 
                   style="width: 32px; height: 32px; min-width: 32px; font-size: 12px;">
                <span>{{ deleteModal.comment.user.charAt(0).toUpperCase() }}</span>
              </div>
              <div>
                <div class="fw-bold small">{{ deleteModal.comment.user }}</div>
                <div class="text-muted small" style="word-break: break-word;">{{ deleteModal.comment.content }}</div>
              </div>
            </div>
          </div>
          <p class="text-muted small mb-0">
            <i class="bi bi-info-circle me-1"></i>
            Hành động này không thể hoàn tác.
          </p>
        </div>
        <div class="modal-footer border-0 pt-0">
          <button type="button" class="btn btn-light" @click="closeDeleteModal">
            <i class="bi bi-x-circle me-1"></i>Hủy
          </button>
          <button type="button" class="btn btn-danger" @click="executeDeleteComment">
            <i class="bi bi-trash me-1"></i>Xóa bình luận
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Modal backdrop -->
  <div v-if="deleteModal.show" class="modal-backdrop fade show"></div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "../services/api";

const route = useRoute();
const router = useRouter();

const imageIndex = ref(0);
const newComment = ref("");
const post = ref(null);
const showMenu = ref(false);

// Comment management
const commentMenuOpen = ref(null);
const editingCommentId = ref(null);
const editCommentText = ref("");
const replyingToCommentId = ref(null);
const replyCommentText = ref("");
const deleteModal = reactive({
    show: false,
    comment: null
});

const me = reactive({
    username: "Ng Thi Luong Hau",
    avatar: '/img01.jpg',
});

// ===================== MENU ACTIONS =====================
function goBack() {
    if (window.history.state && window.history.state.back) {
        router.back();
    } else {
        router.push({ name: 'Home' });
    }
}

async function copyLink() {
    const url = window.location.href;
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(url);
        } else {
            const ta = document.createElement('textarea');
            ta.value = url;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
        }
        alert('Đã sao chép liên kết');
    } catch (err) {
        console.error(err);
        alert('Lỗi sao chép');
    }
    showMenu.value = false;
}

function reportPost() {
    const ok = window.confirm('Bạn muốn báo cáo bài viết này?');
    if (ok) alert('Đã gửi báo cáo');
    showMenu.value = false;
}

// Load user info
onMounted(() => {
    const currentUserStr = localStorage.getItem('currentUser')
    if (currentUserStr) {
        try {
            const u = JSON.parse(currentUserStr)
            if (u.lastName && u.firstName) {
                me.username = `${u.lastName} ${u.firstName}`
            }
        } catch (e) {
            console.error(e)
        }
    }
    loadPost();
});

// ===================== LẤY BÀI VIẾT =====================
async function loadPost() {
  const idStr = route.params.id;
  try {
      const response = await api.get(`/posts/${idStr}`);
      if (response.data) {
          post.value = response.data;
          // Normalize data
          if (!post.value.comments) post.value.comments = [];
          if (!post.value.likedBy) post.value.likedBy = [];
          
          // Helper to recursively normalize comments
          if (post.value.comments && post.value.comments.length > 0) {
              post.value.comments.forEach(normalizeComment);
          }
          
          // Check liked status
          post.value.liked = post.value.likedBy.includes(me.username);
      }
  } catch (error) {
      console.error("Failed to load post:", error);
      // alert("Không thể tải bài viết. Có thể bài viết đã bị xóa.");
      // router.push({ name: 'Home' });
  }
}

function normalizeComment(c) {
    if (!c.likes) c.likes = 0;
    if (!c.likedBy) c.likedBy = [];
    if (!c.replies) c.replies = [];
    else c.replies.forEach(normalizeComment);
}

// ===================== COMPUTED PROPERTIES =====================
const hasImages = computed(() => {
  return post.value && ((post.value.images && post.value.images.length > 0) || post.value.image);
});

const currentImage = computed(() => {
  if (!post.value) return '';
  if (post.value.images && post.value.images.length) {
      return post.value.images[imageIndex.value];
  }
  return post.value.image;
});

// ===================== ẢNH ACTIONS =====================
function prevImage() {
  if (!post.value.images) return;
  imageIndex.value = (imageIndex.value - 1 + post.value.images.length) % post.value.images.length;
}

function nextImage() {
  if (!post.value.images) return;
  imageIndex.value = (imageIndex.value + 1) % post.value.images.length;
}

function gotoImage(i) {
  imageIndex.value = i;
}

// ===================== HELPER =====================
async function updatePostData() {
    if (!post.value) return;
    try {
        await api.patch(`/posts/${post.value.id}`, {
            likes: post.value.likes,
            likedBy: post.value.likedBy,
            comments: post.value.comments
        });
        // Dispatch event for other components to update if needed
        window.dispatchEvent(new Event('post-created')); 
    } catch (e) {
        console.error("Error updating post:", e);
        // Optionally revert state here if creating a robust app
    }
}

// ===================== USER ACTIONS =====================
// ========== COMMENT MENU & MANAGEMENT ==========
function toggleCommentMenu(commentId) {
    commentMenuOpen.value = commentMenuOpen.value === commentId ? null : commentId;
}

function startEditComment(comment) {
    editingCommentId.value = comment.id;
    editCommentText.value = comment.content;
    commentMenuOpen.value = null;
}

async function saveEditComment(comment) {
    const text = editCommentText.value.trim();
    if (!text) return;
    
    comment.content = text;
    editingCommentId.value = null;
    editCommentText.value = "";
    
    await updatePostData();
}

function cancelEditComment() {
    editingCommentId.value = null;
    editCommentText.value = "";
}

function showDeleteModal(comment) {
    deleteModal.show = true;
    deleteModal.comment = comment;
    commentMenuOpen.value = null;
}

function closeDeleteModal() {
    deleteModal.show = false;
    deleteModal.comment = null;
}

async function executeDeleteComment() {
    if (!deleteModal.comment || !post.value || !post.value.comments) {
        closeDeleteModal();
        return;
    }
    
    post.value.comments = post.value.comments.filter(c => c.id !== deleteModal.comment.id);
    closeDeleteModal();
    
    await updatePostData();
}

function reportComment(comment) {
    const ok = window.confirm(`Bạn muốn báo cáo bình luận của ${comment.user}?`);
    if (ok) {
        alert('Đã gửi báo cáo');
    }
    commentMenuOpen.value = null;
}

// ========== COMMENT REPLY ==========
function startReplyComment(comment) {
    replyingToCommentId.value = comment.id;
    replyCommentText.value = "";
}

async function submitReply(comment) {
    const text = replyCommentText.value.trim();
    if (!text) return;
    
    if (!comment.replies) {
        comment.replies = [];
    }
    
    const replyId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    
    const reply = {
        id: replyId,
        user: me.username,
        content: text,
        createdAt: Date.now()
    };
    
    comment.replies.push(reply);
    replyingToCommentId.value = null;
    replyCommentText.value = "";
    
    await updatePostData();
}



// ========== COMMENT LIKE ==========
async function toggleCommentLike(comment) {
    if (!comment.likes) comment.likes = 0;
    if (!comment.likedBy) comment.likedBy = [];
    
    const username = me.username;
    const alreadyLiked = comment.likedBy.includes(username);
    
    if (alreadyLiked) {
        comment.likes--;
        comment.likedBy = comment.likedBy.filter(u => u !== username);
    } else {
        comment.likes++;
        comment.likedBy.push(username);
    }
    
    await updatePostData();
}

function isCommentLiked(comment) {
    if (!comment.likedBy) return false;
    return comment.likedBy.includes(me.username);
}

// ========== POST LIKE ==========
async function toggleLike() {
    if (!post.value) return;
    if (typeof post.value.likes !== 'number') post.value.likes = 0;
    if (!post.value.likedBy) post.value.likedBy = [];

    const username = me.username;
    const alreadyLiked = post.value.likedBy.includes(username);

    if (alreadyLiked) {
        post.value.likes--;
        post.value.likedBy = post.value.likedBy.filter(u => u !== username);
        post.value.liked = false;
    } else {
        post.value.likes++;
        post.value.likedBy.push(username);
        post.value.liked = true;
    }
    
    await updatePostData();
}

async function doAddComment() {
    const content = newComment.value.trim();
    if (!content || !post.value) return;

    // Generate ID
    const nextId = Date.now().toString(36) + Math.random().toString(36).substr(2);
    
    const c = { 
        id: nextId, 
        user: me.username, 
        content: content, 
        createdAt: Date.now(),
        likes: 0,
        likedBy: [],
        replies: []
    };

    if (!post.value.comments) post.value.comments = [];
    post.value.comments.push(c);
    
    newComment.value = "";
    
    await updatePostData();
}

// ===================== HELPER =====================
function timeAgo(ts) {
  if (!ts) return "";
  const delta = Date.now() - ts;
  const sec = Math.floor(delta / 1000);
  if (sec < 5) return "vừa xong";
  if (sec < 60) return `${sec} giây trước`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min} phút trước`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr} giờ trước`;
  const days = Math.floor(hr / 24);
  return `${days} ngày trước`;
}
</script>

<style scoped>
.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255, 0.8);
  color: black;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
}
.carousel-prev:hover, .carousel-next:hover {
    background: white;
}
.carousel-prev { left: 10px; }
.carousel-next { right: 10px; }

.image-dots {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
  z-index: 10;
}
.dot {
  width: 6px;
  height: 6px;
  background: rgba(255,255,255,0.5);
  border-radius: 50%;
  cursor: pointer;
}
.dot.active {
  background: white;
}
/* Scrollbar styling for comments */
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
::-webkit-scrollbar-thumb {
  background: #ccc; 
}
::-webkit-scrollbar-thumb:hover {
  background: #aaa; 
}

/* ================== DELETE MODAL STYLES ================== */
.modal {
  transition: opacity 0.15s linear;
}

.modal.fade {
  opacity: 0;
}

.modal.show {
  opacity: 1;
  animation: fadeIn 0.3s ease-in-out;
}

.modal-dialog {
  animation: slideDown 0.3s ease-out;
}

.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-backdrop.show {
  animation: fadeIn 0.15s ease-in-out;
}

.modal-content {
  border-radius: 12px;
  overflow: hidden;
}

.modal-header {
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
}

.modal-footer {
  background: #f8f9fa;
}

.btn-danger {
  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
  border: none;
  transition: all 0.3s ease;
}

.btn-danger:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(220, 53, 69, 0.4);
}

.btn-light:hover {
  background: #e9ecef;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* ================== LAYOUT STYLES ================== */
@media (min-width: 992px) {
  .post-left-col, .post-right-col {
    height: 85vh;
  }
}
@media (max-width: 991px) {
  .post-left-col {
    height: 500px;
  }
  .post-right-col {
    height: 600px;
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
