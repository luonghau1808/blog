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
                    <a href="#" title="Thông báo" class="position-relative mt-1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="24" height="24">
      <path d="M320 64C306.7 64 296 74.7 296 88L296 97.7C214.6 109.3 152 179.4 152 264L152 278.5C152 316.2 142 353.2 123 385.8L101.1 423.2C97.8 429 96 435.5 96 442.2C96 463.1 112.9 480 133.8 480L506.2 480C527.1 480 544 463.1 544 442.2C544 435.5 542.2 428.9 538.9 423.2L517 385.7C498 353.1 488 316.1 488 278.4L488 263.9C488 179.3 425.4 109.2 344 97.6L344 87.9C344 74.6 333.3 63.9 320 63.9zM488.4 432L151.5 432L164.4 409.9C187.7 370 200 324.6 200 278.5L200 264C200 197.7 253.7 144 320 144C386.3 144 440 197.7 440 264L440 278.5C440 324.7 452.3 370 475.5 409.9L488.4 432zM252.1 528C262 556 288.7 576 320 576C351.3 576 378 556 387.9 528L252.1 528z"/>
    </svg>

    <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
  </a>
                    <div class="position-relative">
                        <div class="rounded-circle overflow-hidden cursor-pointer" style="width: 32px; height: 32px; cursor: pointer;"
                            @click="toggleUserMenu">
                            <img :src="user.avatar" class="w-100 h-100 object-fit-cover" alt="avatar" />
                        </div>
                        
                        <!-- User Dropdown Menu -->
                        <div v-if="showUserMenu" class="card position-absolute shadow-sm overflow-hidden"
                            style="top: 100%; right: 0; z-index: 1000; min-width: 180px; margin-top: 10px;">
                        <div class="list-group list-group-flush text-start">
                            <button class="list-group-item list-group-item-action small" @click="openChangePasswordModal">
                            <i class="bi bi-key me-2"></i>Đổi mật khẩu
                            </button>
                            <button class="list-group-item list-group-item-action text-danger small" @click="logout">
                            <i class="bi bi-box-arrow-right me-2"></i>Đăng xuất
                            </button>
                        </div>
                        </div>
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
                        <router-link :to="{ name: 'EditProfile' }" class="btn btn-primary me-2">Chỉnh sửa trang cá nhân</router-link>
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
                                <p class="card-text mb-1" v-if="user.dob"><strong>Ngày sinh:</strong> {{ user.dob }}</p>
                                <p class="card-text"><strong>Tham gia:</strong> {{ user.joined }}</p>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Bạn bè</h5>
                                <div class="text-muted small mb-2">{{ friends.length }} người bạn</div>
                                <div class="row g-2">
                                    <div class="col-4" v-for="f in friends.slice(0, 6)" :key="f.id">
                                        <img :src="f.avatar" class="friend-avatar" :alt="f.name" />
                                    </div>
                                </div>
                                <a href="#" class="d-block text-decoration-none mt-2" @click.prevent="activeTab = 'Bạn bè'">Xem tất cả</a>
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

                        <div v-for="post in posts" :key="post.id" class="card mb-4">
                            <div class="card-header bg-white border-0 py-3 d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center">
                                    <img :src="post.userAvatar || '/img01.jpg'" class="rounded-circle border me-3" width="42" height="42"
                                        style="object-fit: cover;" />
                                    <div>
                                        <div class="d-flex align-items-center">
                                            <span class="fw-bold text-dark me-1" style="font-size: 14px;">{{ post.user }}</span>
                                            <span class="text-muted mx-1" style="font-size: 12px;">•</span>
                                            <span class="text-muted" style="font-size: 14px;">{{ post.createdAt ?
                                                timeAgo(post.createdAt) : post.time }}</span>
                                        </div>
                                        <div class="text-muted small" style="font-size: 12px; line-height: 1;">{{ post.location || '' }}</div>
                                    </div>
                                </div>
                                <div class="position-relative">
                                    <button class="btn btn-link text-dark p-0" @click="togglePostMenu(post.id)">
                                        <svg aria-label="Tùy chọn khác" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                                            <circle cx="12" cy="12" r="1.5"></circle>
                                            <circle cx="6" cy="12" r="1.5"></circle>
                                            <circle cx="18" cy="12" r="1.5"></circle>
                                        </svg>
                                    </button>
                                    <div v-if="isPostMenuOpen(post.id)" class="card position-absolute shadow-sm"
                                        style="top: 30px; right: 0; z-index: 100; min-width: 200px; border-radius: 12px; overflow: hidden;">
                                        <div class="list-group list-group-flush text-center">
                                            <button class="list-group-item list-group-item-action py-3" style="font-size: 14px;" @click="editPost(post)">Sửa bài viết</button>
                                            <button class="list-group-item list-group-item-action text-danger py-3" style="font-size: 14px;" @click="deletePost(post)">Xóa bài viết</button>
                                           
                                            <button class="list-group-item list-group-item-action py-3" style="font-size: 14px;" @click="closePostMenu(post.id)">Hủy</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Post Image (Scroll Snap Carousel) -->
                            <div class="post-image position-relative" v-if="(post.images && post.images.length) || post.image">
                                <div :id="`carousel-${post.id}`" 
                                    class="d-flex w-100" 
                                    style="overflow-x: auto; scroll-snap-type: x mandatory; scroll-behavior: smooth; scrollbar-width: none;"
                                    @scroll="onScroll($event, post.id)">
                                    
                                    <template v-if="post.images && post.images.length">
                                        <img v-for="(img, index) in post.images" :key="index"
                                            :src="img" 
                                            class="d-block w-100 flex-shrink-0" 
                                            style="scroll-snap-align: start; object-fit: cover;" 
                                            alt="post image" />
                                    </template>
                                    <img v-else :src="post.image" 
                                        class="d-block w-100 flex-shrink-0" 
                                        style="scroll-snap-align: start; object-fit: cover;" 
                                        alt="post image" />
                                </div>

                                <!-- Controls -->
                                <button v-if="post.images && post.images.length > 1" 
                                        class="carousel-btn prev"
                                        @click="scrollCarousel(post.id, -1)" 
                                        aria-label="Previous image"
                                        v-show="(imageIndex[post.id] || 0) > 0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                </button>
                                
                                <button v-if="post.images && post.images.length > 1" 
                                        class="carousel-btn next"
                                        @click="scrollCarousel(post.id, 1)" 
                                        aria-label="Next image"
                                        v-show="(imageIndex[post.id] || 0) < post.images.length - 1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button>

                                <div v-if="post.images && post.images.length > 1" class="image-dots-overlay">
                                    <span v-for="(img, i) in post.images" :key="i"
                                        :class="['dot', { active: i === (imageIndex[post.id] || 0) }]">
                                    </span>
                                </div>
                            </div>

                            <div class="card-body px-3 py-2">
                                <!-- Action Icons -->
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <div class="d-flex align-items-center gap-3">
                                        <button class="btn btn-link p-0 text-dark" @click="toggleLike(post)">
                                            <svg v-if="!post.liked" aria-label="Thích" class="x1lliihq x1n2onr6 x1roi4f4"
                                                fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                                                <path
                                                    d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.956-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z">
                                                </path>
                                            </svg>
                                            <svg v-else aria-label="Bỏ thích" class="x1lliihq x1n2onr6 x1roi4f4 color-red"
                                                fill="#ff3040" height="24" role="img" viewBox="0 0 48 48" width="24">
                                                <path
                                                    d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z">
                                                </path>
                                            </svg>
                                        </button>
                                        <button class="btn btn-link p-0 text-dark" @click="goToPost(post)">
                                            <svg aria-label="Bình luận" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor"
                                                height="24" role="img" viewBox="0 0 24 24" width="24">
                                                <path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none"
                                                    stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path>
                                            </svg>
                                        </button>
                                        <button class="btn btn-link p-0 text-dark">
                                            <svg aria-label="Chia sẻ" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor"
                                                height="24" role="img" viewBox="0 0 24 24" width="24">
                                                <line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"
                                                    x1="22" x2="9.218" y1="3" y2="10.083"></line>
                                                <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                                    stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon>
                                            </svg>
                                        </button>
                                    </div>
                                    <button class="btn btn-link p-0 text-dark" @click="toggleBookmark(post)">
                                        <svg v-if="!post.bookmarked" aria-label="Lưu" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24"
                                            role="img" viewBox="0 0 24 24" width="24">
                                            <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor"
                                                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon>
                                        </svg>
                                         <svg v-else aria-label="Đã lưu" class="x1lliihq x1n2onr6 x5n08af" fill="#fbd400" height="24" role="img" viewBox="0 0 24 24" width="24">
                                            <polygon points="20 21 12 13.44 4 21 4 3 20 3 20 21"></polygon>
                                        </svg>
                                    </button>
                                </div>

                                <!-- Likes -->
                                <div class="mb-2">
                                    <span class="fw-bold text-dark" style="font-size: 14px;">{{ post.likes }} lượt thích</span>
                                </div>

                                <!-- Caption -->
                                <div class="mb-2">
                                    <span class="fw-bold mr-1 me-1" style="font-size: 14px;">{{ post.user }}</span>
                                    <span class="" style="font-size: 14px;"> {{ post.caption }}</span>
                                </div>

                                <!-- Link to PostView for comments -->
                                <div class="mb-2" v-if="post.comments && post.comments.length > 0">
                                    <button class="btn btn-link p-0 text-muted text-decoration-none" style="font-size: 14px;"
                                        @click="goToPost(post)">
                                        Xem tất cả {{ post.comments.length }} bình luận
                                    </button>
                                </div>

                                <!-- Add Comment -->
                                <div class="d-flex align-items-center border-top pt-2 mt-2">
                                    <input :value="newCommentText[post.id] || ''"
                                        @input="e => newCommentText[post.id] = e.target.value" type="text"
                                        class="form-control border-0 p-0 shadow-none" placeholder="Bình luận..."
                                        style="font-size: 14px;">
                                    <button class="btn btn-link text-decoration-none p-0 fw-bold ml-2" 
                                        v-if="newCommentText[post.id]"
                                        @click="addComment(post)" 
                                        style="font-size: 14px; color: #0095f6;">Đăng</button>
                                     <button class="btn btn-link text-decoration-none p-0 text-muted ml-2" v-else>
                                        <svg aria-label="Biểu tượng cảm xúc" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="13" role="img" viewBox="0 0 24 24" width="13">
                                            <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
                                        </svg>
                                    </button>
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
                                    <div class="col-4" v-for="p in photos.slice(0, 6)" :key="p">
                                        <img :src="p" class="img-fluid rounded photo-item" alt="photo" />
                                    </div>
                                </div>
                                <a href="#" class="d-block text-decoration-none mt-2" @click.prevent="activeTab = 'Ảnh'">Xem tất cả</a>
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
                                <h5 class="mb-1">Bạn bè</h5>
                                <div class="text-muted mb-3">{{ friends.length }} người bạn</div>
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
                                        <img :src="p" class="img-fluid rounded photo-item" alt="photo" />
                                    </div>
                                </div>
                                
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

    <!-- ================== CHANGE PASSWORD MODAL ================== -->
    <div class="modal fade" :class="{ show: changePasswordModal.show }" :style="{ display: changePasswordModal.show ? 'block' : 'none' }"
         tabindex="-1" @click.self="closeChangePasswordModal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg">
          <div class="modal-header border-0 pb-0">
            <h5 class="modal-title fw-bold">Đổi mật khẩu</h5>
            <button type="button" class="btn-close" @click="closeChangePasswordModal"></button>
          </div>
          <div class="modal-body pt-3">
            <form @submit.prevent="submitChangePassword">
              <div class="mb-3">
                <label class="form-label small fw-bold">Mật khẩu hiện tại</label>
                <div class="input-group">
                  <input :type="showPass.current ? 'text' : 'password'" v-model="changePassForm.current" class="form-control" required />
                  <button class="btn btn-outline-secondary" type="button" @click="showPass.current = !showPass.current" style="min-width: 60px;">
                    {{ showPass.current ? 'Ẩn' : 'Hiện' }}
                  </button>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label small fw-bold">Mật khẩu mới</label>
                <div class="input-group">
                  <input :type="showPass.new ? 'text' : 'password'" v-model="changePassForm.new" class="form-control" required />
                  <button class="btn btn-outline-secondary" type="button" @click="showPass.new = !showPass.new" style="min-width: 60px;">
                    {{ showPass.new ? 'Ẩn' : 'Hiện' }}
                  </button>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label small fw-bold">Nhập lại mật khẩu mới</label>
                 <div class="input-group">
                  <input :type="showPass.confirm ? 'text' : 'password'" v-model="changePassForm.confirm" class="form-control" required />
                  <button class="btn btn-outline-secondary" type="button" @click="showPass.confirm = !showPass.confirm" style="min-width: 60px;">
                    {{ showPass.confirm ? 'Ẩn' : 'Hiện' }}
                  </button>
                </div>
              </div>
              <div v-if="changePassForm.error" class="text-danger small mb-3">{{ changePassForm.error }}</div>
              
              <div class="d-flex justify-content-end gap-2">
                <button type="button" class="btn btn-light" @click="closeChangePasswordModal">Hủy</button>
                <button type="submit" class="btn btn-primary">Lưu thay đổi</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="changePasswordModal.show" class="modal-backdrop fade show" style="z-index: 1050;"></div>
</template>

<script>
import PostComposer from "@/Views/PostComposer.vue";
import api from "@/services/api";

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
                id: null
            },
            showUserMenu: false,
            changePasswordModal: { show: false },
            changePassForm: {
                current: '',
                new: '',
                confirm: '',
                error: ''
            },
            showPass: {
                current: false,
                new: false,
                confirm: false
            },
            friends: [
                { id: 1, name: "Lê Huyền", avatar: "img36.jpg" },
                { id: 2, name: "Đào Ánh Hà", avatar: "img03.jpg" },
                { id: 3, name: "Trần Quỳnh Anh", avatar: "img13.jpg" },
                { id: 4, name: "Vũ Minh Hương", avatar: "img15.jpg" },
                { id: 5, name: "Lê Thanh Thư", avatar: "img25.jpg" },
                { id: 6, name: "Đào Thanh Hiền", avatar: "img23.jpg" },
                { id: 7, name: "Nguyễn Thùy Linh", avatar: "img46.jpg" },
                { id: 8, name: "Phạm Mai Anh", avatar: "img47.jpg" },
                { id: 9, name: "Hoàng Minh Châu", avatar: "img48.jpg" },
                { id: 10, name: "Vũ Thu Trang", avatar: "img40.jpg" }
                
            ],
            suggestions: [
                { id: 1, name: "Lê Thị Ngọc Anh", avatar: "img27.jpg", mutual: 3 },
                { id: 2, name: "Trần Thị Linh", avatar: "img23.jpg", mutual: 2 },
            ],
            photos: [],
            posts: [],
            imageIndex: {},
            commentMenuOpen: {},
            newCommentText: {},
            postMenuOpen: {},
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
            const storedAvatar = localStorage.getItem('userAvatar');
            if (currentUserStr) {
                try {
                    const u = JSON.parse(currentUserStr);
                    if (u.lastName && u.firstName) {
                        this.user.name = `${u.lastName} ${u.firstName}`;
                    }
                    if (storedAvatar) {
                        this.user.avatar = storedAvatar;
                    } else if (u.avatar) {
                        this.user.avatar = u.avatar;
                    }
                    if (u.dob) {
                        this.user.dob = u.dob;
                    }
                    if (u.id) {
                        this.user.id = u.id;
                    }
                } catch (e) {
                    console.error('Error parsing user', e);
                }
            }
        },
        async loadPosts() {
            try {
                // Fetch all posts and filter client-side to ensure robust matching
                const res = await api.get('/posts');
                const apiPosts = res.data || [];
                
                const myApiPosts = apiPosts
                    .filter(p => p.user === this.user.name)
                    .map(p => ({
                        ...p,
                        user: this.user.name, // Force current user name
                        userAvatar: this.user.avatar, // Force current user avatar
                        image: (p.images && p.images.length) ? p.images[0] : (p.image || null),
                        showMenu: false,
                        // Ensure arrays rely on API data, default to empty
                        comments: p.comments || [],
                        likes: p.likes || 0,
                        liked: p.likedBy ? p.likedBy.includes(this.user.name) : false,
                        bookmarked: p.bookmarked !== undefined ? p.bookmarked : false,
                    }));
                
                // Sort descending by createdAt
                myApiPosts.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
                this.posts = myApiPosts;

                // Update photos from posts
                const collectedPhotos = [];
                this.posts.forEach(p => {
                    if (p.images && Array.isArray(p.images) && p.images.length > 0) {
                        collectedPhotos.push(...p.images);
                    } else if (p.image) {
                        collectedPhotos.push(p.image);
                    }
                });
                // Merge with static photos (newest post photos first)
                this.photos = [...collectedPhotos];
            } catch (err) {
                console.error("Error loading posts from API:", err);
            }
        },
        async addPost() {
            if (!this.newPost.trim()) return;
            
            const newPost = {
                id: Date.now().toString(), // Use string ID for consistency
                user: this.user.name,
                userAvatar: this.user.avatar,
                location: this.user.location,
                images: [],
                likes: 0,
                likedBy: [],
                caption: this.newPost,
                content: this.newPost, // Duplicate for compatibility
                time: "Vừa xong",
                comments: [],
                createdAt: Date.now()
            };

            try {
                await api.post('/posts', newPost);
                this.newPost = "";
                this.loadPosts(); // Reload to refresh list
                window.dispatchEvent(new Event('post-created'));
            } catch (e) {
                console.error("Error creating post:", e);
                alert("Không thể đăng bài. Vui lòng thử lại.");
            }
        },
        togglePostMenu(postId) {
            this.postMenuOpen[postId] = !this.postMenuOpen[postId];
        },
        isPostMenuOpen(postId) {
            return !!this.postMenuOpen[postId];
        },
        closePostMenu(postId) {
            this.postMenuOpen[postId] = false;
        },
        // Legacy support
        toggleMenu(post) {
            this.togglePostMenu(post.id);
        },
        async editPost(post) {
            const newText = prompt("Nhập nội dung mới:", post.content || post.caption);
            if (newText !== null) {
                const updatedFields = {
                    content: newText,
                    caption: newText
                };
                
                // Optimistic update
                post.content = newText;
                post.caption = newText;
                this.closePostMenu(post.id);

                try {
                    await api.patch(`/posts/${post.id}`, updatedFields);
                    window.dispatchEvent(new Event('post-created'));
                } catch (e) {
                    console.error("Error updating post:", e);
                    alert("Cập nhật thất bại");
                    this.loadPosts(); // Revert
                }
            }
        },
        async deletePost(post) {
            if (confirm("Bạn có chắc muốn xóa bài viết?")) {
                try {
                    await api.delete(`/posts/${post.id}`);
                    this.posts = this.posts.filter(p => p.id !== post.id);
                    window.dispatchEvent(new Event('post-created'));
                } catch (e) {
                    console.error("Error deleting post:", e);
                    alert("Xóa thất bại");
                }
            }
        },
        async hidePost(post) {
            post.hidden = true;
            this.closePostMenu(post.id);
            // "Hide" is usually local only, unless we have a 'hidden' field in DB
        },
        async addComment(post) {
            const t = (this.newCommentText[post.id] || '').trim();
            if (!t) return;
            
            const nextId = Date.now().toString(36) + Math.random().toString(36).substr(2);
            const c = { 
                id: nextId, 
                user: this.user.name, 
                content: t, 
                createdAt: Date.now(),
                likes: 0,
                likedBy: [],
                replies: []
            };
            
            // Optimistic update
            const updatedComments = [...(post.comments || []), c];
            post.comments = updatedComments;
            this.newCommentText[post.id] = '';

            try {
                await api.patch(`/posts/${post.id}`, { comments: updatedComments });
                window.dispatchEvent(new Event('post-created'));
            } catch (e) {
                console.error("Error adding comment:", e);
                alert("Không thể gửi bình luận");
                this.loadPosts(); // Revert
            }
        },
        // onScroll and scrollCarousel for the new carousel
        onScroll(e, postId) {
            const el = e.target;
            const index = Math.round(el.scrollLeft / el.clientWidth);
            if (this.imageIndex[postId] !== index) {
                this.imageIndex[postId] = index;
            }
        },
        scrollCarousel(postId, direction) {
            const container = document.getElementById(`carousel-${postId}`);
            if (container) {
                const scrollAmount = container.clientWidth * direction;
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        },
        prevImage(post) {
            this.scrollCarousel(post.id, -1);
        },
        nextImage(post) {
            this.scrollCarousel(post.id, 1);
        },
        gotoImage(post, i) {
             const container = document.getElementById(`carousel-${post.id}`);
             if (container) {
                 container.scrollTo({ left: container.clientWidth * i, behavior: 'smooth' });
             }
        },
        async toggleBookmark(post) {
            post.bookmarked = !post.bookmarked;
            // API call would go here
        },
        async toggleLike(post) {
            if (typeof post.likes !== 'number') post.likes = 0;
            const username = this.user.name;
            if (!post.likedBy) post.likedBy = [];
            
            const alreadyLiked = post.likedBy.includes(username);
            
            // Optimistic update
            if (alreadyLiked) {
                post.likes--;
                post.likedBy = post.likedBy.filter(u => u !== username);
                post.liked = false;
            } else {
                post.likes++;
                post.likedBy.push(username);
                post.liked = true;
            }
            
            try {
                await api.patch(`/posts/${post.id}`, {
                    likes: post.likes,
                    likedBy: post.likedBy
                });
                window.dispatchEvent(new Event('post-created'));
            } catch (e) {
                console.error("Error toggling like:", e);
                // Revert
                this.loadPosts(); 
            }
        },
        timeAgo(ts) {
            if (!ts) return '';
            const delta = Date.now() - ts;
            const s = Math.floor(delta / 1000);
            if (s < 5) return 'vừa xong';
            if (s < 60) return `${s} giây trước`;
            const m = Math.floor(s / 60);
            if (m < 60) return `${m} phút trước`;
            const h = Math.floor(m / 60);
            if (h < 24) return `${h} giờ trước`;
            const d = Math.floor(h / 24);
            return `${d} ngày trước`;
        },
        toggleCommentMenu(post, commentId) {
            if (!this.commentMenuOpen[post.id]) {
                this.commentMenuOpen[post.id] = {};
            }
            this.commentMenuOpen[post.id][commentId] = !this.commentMenuOpen[post.id][commentId];
        },
        isCommentMenuOpen(post, commentId) {
            return this.commentMenuOpen[post.id] && this.commentMenuOpen[post.id][commentId];
        },
        canDeleteComment(post, comment) {
            const isMyComment = comment.user === this.user.name;
            const isMyPost = post.user.name === this.user.name;
            return isMyComment || isMyPost;
        },
        canReportComment(comment) {
            return comment.user !== this.user.name;
        },
        async deleteComment(post, comment) {
            if (!confirm("Bạn có chắc muốn xóa bình luận này?")) return;
            
            // Optimistic update
            const updatedComments = post.comments.filter(c => c.id !== comment.id);
            post.comments = updatedComments;
            if (this.commentMenuOpen[post.id]) {
                this.commentMenuOpen[post.id][comment.id] = false;
            }

            try {
                await api.patch(`/posts/${post.id}`, { comments: updatedComments });
                window.dispatchEvent(new Event('post-created'));
            } catch (e) {
                console.error("Error deleting comment:", e);
                this.loadPosts();
            }
        },
        goToPost(post) {
            const payload = { ...post, currentImageIndex: (this.imageIndex[post.id] || 0) };
            try { sessionStorage.setItem('selectedPost', JSON.stringify(payload)); } catch (err) {
                console.error(err);
            }
            this.$router.push({ name: 'Post', params: { id: String(post.id) } });
        },
        reportComment(comment) {
            alert(`Đã báo cáo bình luận của ${comment.user}`);
        },
        toggleUserMenu() {
            this.showUserMenu = !this.showUserMenu;
        },
        logout() {
            const ok = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
            if (!ok) return;
            localStorage.removeItem('currentUser');
            localStorage.removeItem('userAvatar');
            this.$router.push({ name: 'Login' });
        },
        openChangePasswordModal() {
            this.showUserMenu = false;
            this.changePassForm = { current: '', new: '', confirm: '', error: '' };
            this.showPass = { current: false, new: false, confirm: false };
            this.changePasswordModal.show = true;
        },
        closeChangePasswordModal() {
            this.changePasswordModal.show = false;
        },
        async submitChangePassword() {
            this.changePassForm.error = '';
            const { current, new: newPass, confirm } = this.changePassForm;
            if (!current || !newPass || !confirm) {
                this.changePassForm.error = 'Vui lòng điền đầy đủ thông tin.';
                return;
            }
            if (newPass !== confirm) {
                this.changePassForm.error = 'Mật khẩu mới không khớp.';
                return;
            }
            if (!this.user.id) {
                this.changePassForm.error = 'Không tìm thấy thông tin người dùng.';
                return;
            }
            try {
                const res = await api.get(`/users/${this.user.id}`);
                const user = res.data;
                if (!user || user.password !== current) {
                    this.changePassForm.error = 'Mật khẩu hiện tại không đúng.';
                    return;
                }
                await api.patch(`/users/${this.user.id}`, { password: newPass });
                user.password = newPass;
                localStorage.setItem('currentUser', JSON.stringify(user));
                alert('Đổi mật khẩu thành công!');
                this.closeChangePasswordModal();
            } catch (err) {
                console.error(err);
                this.changePassForm.error = 'Đã có lỗi xảy ra.';
            }
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

/* Carousel Styles */
.post-image .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.85); /* Light background for IG style */
    color: #000;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 6;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    transition: all 0.2s ease;
    padding: 0;
}

.post-image .carousel-btn.prev {
    left: 10px;
}

.post-image .carousel-btn.next {
    right: 10px;
}

.post-image .carousel-btn:hover {
    background: #fff;
    transform: translateY(-50%) scale(1.1);
}

.post-image .image-dots-overlay {
    position: absolute;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 6px;
    z-index: 6;
    pointer-events: none;
}

.post-image .dot {
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 1px 2px rgba(0,0,0,0.3);
    transition: all 0.2s ease;
    pointer-events: auto;
}

.post-image .dot.active {
    background: #fff;
    transform: scale(1.2);
}

.photo-item {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
}
</style>
