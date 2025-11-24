<template>
    <header class="">
        <nav class="navbar navbar-light bg-white border-bottom py-2 fixed-top">
            <div class="container-fluid d-flex justify-content-between align-items-center position-relative">
                <div class="d-flex align-items-center gap-3">
                    <a class="navbar-brand mb-0 h1 fw-bold" href="#">MyBlog</a>
                    <!-- Inline icon-only menu (same row as brand) -->
                    <form class="d-none d-sm-block">
                        <input class="form-control form-control-sm rounded-pill" style="width:240px"
                            placeholder="Tìm kiếm" />
                    </form>
                    <div class="inline-icon-menu d-none d-md-flex align-items-center ms-2 ">
                        <a href="#" class="icon-btn" title="Trang chủ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path
                                    d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z" />
                            </svg>
                        </a>
                        <a href="#" class="icon-btn" title="Trang cá nhân">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                                <path
                                    d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z" />
                            </svg>
                        </a>
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
                <div class="d-flex align-items-center gap-4 ms-auto">
  <!-- Notification -->
  <a href="#" title="Thông báo" class="position-relative">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="24" height="24">
      <path d="M320 64C306.7 64 296 74.7 296 88L296 97.7C214.6 109.3 152 179.4 152 264L152 278.5C152 316.2 142 353.2 123 385.8L101.1 423.2C97.8 429 96 435.5 96 442.2C96 463.1 112.9 480 133.8 480L506.2 480C527.1 480 544 463.1 544 442.2C544 435.5 542.2 428.9 538.9 423.2L517 385.7C498 353.1 488 316.1 488 278.4L488 263.9C488 179.3 425.4 109.2 344 97.6L344 87.9C344 74.6 333.3 63.9 320 63.9zM488.4 432L151.5 432L164.4 409.9C187.7 370 200 324.6 200 278.5L200 264C200 197.7 253.7 144 320 144C386.3 144 440 197.7 440 264L440 278.5C440 324.7 452.3 370 475.5 409.9L488.4 432zM252.1 528C262 556 288.7 576 320 576C351.3 576 378 556 387.9 528L252.1 528z"/>
    </svg>
    <!-- Badge thông báo nếu muốn -->
    <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
  </a>

  <!-- Avatar -->
  <div class="rounded-circle overflow-hidden" style="width:32px;height:32px;">
    <img src="/img01.jpg" class="w-100 h-100 object-fit-cover" alt="avatar" />
  </div>
</div>


            </div>
        </nav>
    </header>
    <br><br>
    <div class="container-fluid py-4 " style="padding-top: 70px;">
        <div class="row ">
            <div class="col-lg-3  d-none d-md-block">
                <aside class="left-sidebar">
                    <div class="" style="top:80px;">
                        <ul class="nav flex-column g-2">
                            <li class="nav-item mb-2">
                                <router-link :to="{ name: 'Home' }" class="nav-link d-flex align-items-center p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                                        class="me-2 menu-icon">
                                        <path
                                            d="M304 70.1C313.1 61.9 326.9 61.9 336 70.1L568 278.1C577.9 286.9 578.7 302.1 569.8 312C560.9 321.9 545.8 322.7 535.9 313.8L527.9 306.6L527.9 511.9C527.9 547.2 499.2 575.9 463.9 575.9L175.9 575.9C140.6 575.9 111.9 547.2 111.9 511.9L111.9 306.6L103.9 313.8C94 322.6 78.9 321.8 70 312C61.1 302.2 62 287 71.8 278.1L304 70.1zM320 120.2L160 263.7L160 512C160 520.8 167.2 528 176 528L224 528L224 424C224 384.2 256.2 352 296 352L344 352C383.8 352 416 384.2 416 424L416 528L464 528C472.8 528 480 520.8 480 512L480 263.7L320 120.3zM272 528L368 528L368 424C368 410.7 357.3 400 344 400L296 400C282.7 400 272 410.7 272 424L272 528z" />
                                    </svg>
                                    <span class="text-dark">Trang chủ</span>
                                </router-link>
                            </li>

                            <li class="nav-item mb-2">
                                <a class="nav-link d-flex align-items-center p-2" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                                        class="me-2 menu-icon">
                                        <path
                                            d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
                                    </svg>
                                    <span class="text-dark">Tìm kiếm</span>
                                </a>
                            </li>

                            <li class="nav-item mb-2">
                                <a class="nav-link d-flex align-items-center p-2" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                                        class="me-2 menu-icon">
                                        <path
                                            d="M528 320C528 205.1 434.9 112 320 112C205.1 112 112 205.1 112 320C112 434.9 205.1 528 320 528C434.9 528 528 434.9 528 320zM64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576C178.6 576 64 461.4 64 320zM370.7 389.1L226.4 444.6C207 452.1 187.9 433 195.4 413.6L250.9 269.3C254.2 260.8 260.8 254.2 269.3 250.9L413.6 195.4C433 187.9 452.1 207 444.6 226.4L389.1 370.7C385.8 379.2 379.2 385.8 370.7 389.1zM352 320C352 302.3 337.7 288 320 288C302.3 288 288 302.3 288 320C288 337.7 302.3 352 320 352C337.7 352 352 337.7 352 320z" />
                                    </svg>
                                    <span class="text-dark">Khám phá</span>
                                </a>
                            </li>

                            <li class="nav-item mb-2">
                                <a class="nav-link d-flex align-items-center p-2" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                                        class="me-2 menu-icon">
                                        <path
                                            d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM276.5 211.5C269.1 207 259.8 206.8 252.2 211C244.6 215.2 240 223.3 240 232L240 408C240 416.7 244.7 424.7 252.3 428.9C259.9 433.1 269.1 433 276.6 428.4L420.6 340.4C427.7 336 432.1 328.3 432.1 319.9C432.1 311.5 427.7 303.8 420.6 299.4L276.6 211.4zM362 320L288 365.2L288 274.8L362 320z" />
                                    </svg>
                                    <span class="text-dark">Reels</span>
                                </a>
                            </li>

                            <li class="nav-item mb-2">
                                <a class="nav-link d-flex align-items-center p-2" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                                        class=" me-2 menu-icon">
                                        <path
                                            d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z" />
                                    </svg>
                                    <span class="text-dark">Tin nhắn</span>
                                </a>
                            </li>

                            <li class="nav-item mb-2">
                                <a class="nav-link d-flex align-items-center p-2" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                                        class="me-2 menu-icon">
                                        <path
                                            d="M320 64C306.7 64 296 74.7 296 88L296 97.7C214.6 109.3 152 179.4 152 264L152 278.5C152 316.2 142 353.2 123 385.8L101.1 423.2C97.8 429 96 435.5 96 442.2C96 463.1 112.9 480 133.8 480L506.2 480C527.1 480 544 463.1 544 442.2C544 435.5 542.2 428.9 538.9 423.2L517 385.7C498 353.1 488 316.1 488 278.4L488 263.9C488 179.3 425.4 109.2 344 97.6L344 87.9C344 74.6 333.3 63.9 320 63.9zM488.4 432L151.5 432L164.4 409.9C187.7 370 200 324.6 200 278.5L200 264C200 197.7 253.7 144 320 144C386.3 144 440 197.7 440 264L440 278.5C440 324.7 452.3 370 475.5 409.9L488.4 432zM252.1 528C262 556 288.7 576 320 576C351.3 576 378 556 387.9 528L252.1 528z" />
                                    </svg>
                                    <span class="text-dark">Thông báo</span>
                                </a>
                            </li>

                            <li class="nav-item mb-2">
                                <a class="nav-link d-flex align-items-center p-2" href="#"
                                    @click.prevent="showComposer = true">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                                        class="me-2 menu-icon">
                                        <path
                                            d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" />
                                    </svg>

                                    <span class="text-dark">Tạo bài viết</span>
                                </a>
                            </li>

                            <li class="nav-item mt-2">
                                <router-link :to="{ name: 'Profile' }" class="nav-link d-flex align-items-center p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"
                                        class="me-2 menu-icon">
                                        <path
                                            d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z" />
                                    </svg>
                                    <span class="text-dark">Trang cá nhân</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
            <!-- Main feed -->
            <div class="col-lg-6 ">
                <!-- Top bar -->
                <div class="d-flex align-items-center justify-content-between mb-3">
                    <h4 class="mb-0">Story</h4>
                </div>
                <!-- Stories -->
                <div class="bg-white p-3 rounded shadow-sm mb-3">
                    <div class="d-flex gap-3 overflow-auto">
                        <div v-for="story in stories" :key="story.id" class="text-center" style="min-width: 84px">
                            <div class="story-ring mb-2 d-inline-block">
                                <img :src="story.avatar" class="rounded-circle story-avatar" />
                            </div>
                            <div class="small text-truncate" style="max-width: 72px">{{ story.user }}</div>
                        </div>
                    </div>
                </div>


                <!-- Posts -->

                <div v-for="post in posts" :key="post.id" class="card mb-4">
                    <div class="card-body p-2 d-flex align-items-center ">
                        <img :src="post.userAvatar" class="rounded-circle me-2" width="42" height="42" />
                        <div class="flex-grow-1">
                            <div class="fw-bold">{{ post.user }}</div>
                            <small class="text-muted">{{ post.location }}</small>
                        </div>
                        <div class="position-relative">
                            <button class="btn btn-link p-0" @click="togglePostMenu(post.id)">•••</button>
                            <div v-if="isPostMenuOpen(post.id)" class="card position-absolute"
                                style="top: 28px; right: 8px; z-index: 60; min-width: 180px;">
                                <div class="list-group list-group-flush">
                                    <button class="list-group-item list-group-item-action"
                                        @click="copyPostLink(post)">Sao chép liên kết</button>
                                    <button class="list-group-item list-group-item-action" @click="goToPost(post)">Đi
                                        đến bài viết</button>
                                    <button class="list-group-item list-group-item-action text-danger"
                                        @click="reportPost(post)">Báo cáo</button>
                                    <button class="list-group-item list-group-item-action"
                                        @click="closePostMenu(post.id)">Hủy</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="post-image position-relative" @touchstart.passive="onTouchStart($event, post)"
                        @touchend.passive="onTouchEnd($event, post)">
                        <img :src="(post.images && post.images.length) ? post.images[(imageIndex[post.id] || 0)] : post.image"
                            class="post-image w-100" alt="post image" />

                        <button v-if="post.images && post.images.length > 1" class="carousel-prev"
                            @click="prevImage(post)" aria-label="Previous image">‹</button>
                        <button v-if="post.images && post.images.length > 1" class="carousel-next"
                            @click="nextImage(post)" aria-label="Next image">›</button>

                        <div v-if="post.images && post.images.length > 1" class="image-dots">
                            <span v-for="(img, i) in post.images" :key="i"
                                :class="['dot', { active: i === (imageIndex[post.id] || 0) }]"
                                @click="gotoImage(post, i)"></span>
                        </div>
                    </div>

                    <div class="card-body">
                        <div class="d-flex align-items-center mb-2">
                            <button class="btn btn-link p-0 me-3" @click="toggleLike(post)">
                                <svg v-if="!post.liked" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                    fill="none" stroke="currentColor" stroke-width="2" class="bi bi-heart">
                                    <path
                                        d="M20.8 4.6a5.6 5.6 0 0 0-7.9 0L12 5.5l-0.9-0.9a5.6 5.6 0 0 0-7.9 7.9L12 22.1l8.8-9.7a5.6 5.6 0 0 0 0-7.9z" />
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#e74c3c"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.99 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 18.01 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                </svg>
                            </button>

                            <button class="btn btn-link p-0 me-3" @click="toggleComments(post)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"
                                    stroke="currentColor" stroke-width="2" class="bi bi-chat">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" />
                                </svg>
                            </button>

                            <button class="btn btn-link p-0 ms-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"
                                    stroke="currentColor" stroke-width="2" class="bi bi-send">
                                    <path d="M22 2L11 13" />
                                    <path d="M22 2L15 22l-4-9L2 9l20-7z" />
                                </svg>
                            </button>
                        </div>

                        <div class="mb-2">
                            <strong>{{ post.likes }} lượt thích</strong>
                        </div>

                        <div>
                            <strong>{{ post.user }}</strong>
                            <span class="ms-1">{{ post.caption }}</span>
                        </div>

                        <div class="text-muted small mt-2">
                            {{ post.time }}
                        </div>
                        <div class="mt-3">
                            <div v-for="c in displayedComments(post)" :key="c.id" class="mb-2 d-flex align-items-start">
                                <div class="flex-grow-1">
                                    <template v-if="isEditingComment(post, c.id)">
                                        <input :value="getCommentEditText(post, c.id)"
                                            @input="e => setCommentEditText(post, c.id, e.target.value)" type="text"
                                            class="form-control form-control-sm" />
                                        <div class="mt-1">
                                            <button class="btn btn-sm btn-primary me-2"
                                                @click="saveEditComment(post, c.id)">Lưu</button>
                                            <button class="btn btn-sm btn-outline-secondary"
                                                @click="cancelEditComment(post, c.id)">Hủy</button>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <strong>{{ c.user }}</strong>
                                        <span class="ms-1">{{ c.content }}</span>
                                        <div class="text-muted small">{{ timeAgo(c.createdAt) }}</div>
                                    </template>
                                </div>
                                <div v-if="c.user === me.username" class="position-relative ms-2">
                                    <button class="btn btn-link p-0" @click="toggleCommentMenu(post, c.id)">•••</button>
                                    <div v-if="isCommentMenuOpen(post, c.id)" class="card position-absolute"
                                        style="top: 20px; right: 0; z-index: 50; min-width: 140px;">
                                        <div class="list-group list-group-flush">
                                            <button class="list-group-item list-group-item-action"
                                                @click="startEditComment(post, c.id)">Chỉnh
                                                sửa</button>
                                            <button class="list-group-item list-group-item-action text-danger"
                                                @click="confirmDeleteComment(post, c.id)">Xóa</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="input-group">
                                <input :value="newCommentText[post.id] || ''"
                                    @input="e => newCommentText[post.id] = e.target.value" type="text"
                                    class="form-control" placeholder="Viết bình luận..." />
                                <button class="btn btn-primary" @click="addComment(post)"
                                    :disabled="!(newCommentText[post.id] && newCommentText[post.id].trim())">Bình
                                    luận</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right sidebar -->
            <div class="col-lg-3 d-none d-lg-block ">
                <div class=" right-sidebar">
                    <!-- Profile summary -->
                    <div class="d-flex align-items-center mb-3">
                        <img :src="me.avatar" class="rounded-circle me-3" width="64" height="64" />
                        <div>
                            <div class="fw-bold">{{ me.username }}</div>
                            <div class="text-muted">lghau.18</div>
                        </div>
                        <div class="ms-auto text-primary">Chuyển</div>
                    </div>

                    <!-- Suggestions -->
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <small class="text-muted">Gợi ý cho bạn</small>
                        <small class="text-muted">Xem tất cả</small>
                    </div>

                    <div class="list-group mb-3">
                        <div v-for="s in suggestions" :key="s.id" class="list-group-item d-flex align-items-center">
                            <img :src="s.avatar" class="rounded-circle me-3" width="42" height="42" />
                            <div class="flex-grow-1">
                                <div class="fw-bold small">{{ s.user }}</div>
                                <div class="small text-muted">Gợi ý</div>
                            </div>
                            <button class="btn btn-sm btn-link text-primary">Theo dõi</button>
                        </div>
                    </div>

                    <div class="small text-muted">
                        Giới thiệu • Trợ giúp • Báo chí • API • Việc làm • Quyền riêng tư • Điều khoản • Vị trí • Ngôn
                        ngữ
                        <br />
                        © 2025 • MyBlog from ASM
                    </div>
                </div>
            </div>
        </div>
    </div>
    <PostComposer v-if="showComposer" @close="showComposer = false" />
</template>

<script setup>
import { reactive, ref } from "vue";
import PostComposer from "@/Views/PostComposer.vue";
import { useRouter } from "vue-router";


const me = reactive({
    username: "Ng Thi Luong Hau",
    avatar: '/img01.jpg',
});

const stories = [
    { id: 1, user: "wyn.anh", avatar: '/img27.jpg' },
    { id: 2, user: "_ttqueen", avatar: '/img21.jpg' },
    { id: 3, user: "buncry3107", avatar: '/img12.jpg' },
    { id: 4, user: "_imfifteen", avatar: '/img16.jpg' },
    { id: 5, user: "thvievy", avatar: '/img03.jpg' },
    { id: 6, user: "_dino.makeup", avatar: '/img09.jpg' },
];

const posts = reactive([
    {
        id: 1,
        user: "wyn.anh",
        userAvatar: '/img09.jpg',
        location: "Hà Nội",
        images: ['/img08.jpg', '/img09.jpg', '/img10.jpg', '/img07.jpg'],
        likes: 213,
        caption: "Một ngày đẹp trời",
        time: "2 giờ",
        liked: false,
        comments: [
            { id: 1, user: "minh", content: "Ảnh đẹp quá!", createdAt: Date.now() - 5 * 60 * 1000 }
        ],
    },
    {
        id: 2,
        user: "buncry3107",
        userAvatar: '/img11.jpg',
        location: "Đà Nẵng",
        images: ['/img12.jpg', '/img13.jpg', '/img11.jpg'],
        likes: 102,
        caption: "Not perfect, but perfectly me 🧝🏻‍♀️✨",
        time: "6 giờ",
        liked: false,
        comments: []
    },
]);

// per-post image index
const imageIndex = reactive({})
// touch start positions for swipe
const touchStartX = {}

function prevImage(post) {
    const id = post.id
    const imgs = post.images || []
    if (!imgs.length) return
    const idx = imageIndex[id] || 0
    imageIndex[id] = (idx + imgs.length - 1) % imgs.length
}

function nextImage(post) {
    const id = post.id
    const imgs = post.images || []
    if (!imgs.length) return
    const idx = imageIndex[id] || 0
    imageIndex[id] = (idx + 1) % imgs.length
}

function gotoImage(post, i) {
    const id = post.id
    const imgs = post.images || []
    if (!imgs.length) return
    imageIndex[id] = i % imgs.length
}

function onTouchStart(e, post) {
    touchStartX[post.id] = e.touches ? e.touches[0].clientX : e.clientX
}

function onTouchEnd(e, post) {
    const start = touchStartX[post.id]
    const end = e.changedTouches ? e.changedTouches[0].clientX : e.clientX
    if (start == null) return
    const delta = end - start
    const thresh = 40
    if (delta > thresh) {
        // swipe right -> previous
        prevImage(post)
    } else if (delta < -thresh) {
        // swipe left -> next
        nextImage(post)
    }
    touchStartX[post.id] = null
}

const suggestions = [
    { id: 1, user: "_.anhph", avatar: '/img32.jpg' },
    { id: 2, user: "minh", avatar: '/img10.jpg' },
    { id: 3, user: "2minhu1._", avatar: '/img20.jpg' },
];

function toggleLike(post) {
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
}

const newCommentText = reactive({})
const commentExpanded = reactive({})
const commentMenuOpen = reactive({})
const commentEditing = reactive({})
const commentEditText = reactive({})

const showComposer = ref(false)
const router = useRouter()
const postMenuOpen = reactive({})

function isPostMenuOpen(postId) {
    return !!postMenuOpen[postId]
}

function togglePostMenu(postId) {
    postMenuOpen[postId] = !postMenuOpen[postId]
}

function closePostMenu(postId) {
    postMenuOpen[postId] = false
}

async function copyPostLink(post) {
    const url = `${window.location.origin}/Post/${post.id}`
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            await navigator.clipboard.writeText(url)
        } else {
            const ta = document.createElement('textarea')
            ta.value = url
            document.body.appendChild(ta)
            ta.select()
            document.execCommand('copy')
            document.body.removeChild(ta)
        }
        alert('Đã sao chép liên kết')
    } catch (err) {
        console.error(err)
        alert('Đã có lỗi xảy ra khi sao chép liên kết')
    }
    closePostMenu(post.id)
}

function goToPost(post) {
    closePostMenu(post.id)
    const payload = { ...post, currentImageIndex: (imageIndex[post.id] || 0) }
    try { sessionStorage.setItem('selectedPost', JSON.stringify(payload)) } catch (err) {
        console.error(err)
        alert('Đã có lỗi xảy ra khi lưu bài viết')
    }
    router.push({ name: 'Post', params: { id: String(post.id) } })
}

function reportPost(post) {
    const ok = window.confirm('Bạn muốn báo cáo bài viết này?')
    if (ok) alert('Đã gửi báo cáo (demo)')
    closePostMenu(post.id)
}

function addComment(post) {
    const t = (newCommentText[post.id] || '').trim()
    if (!t) return
    const nextId = (post.comments && post.comments.length ? Math.max(...post.comments.map(c => c.id)) + 1 : 1)
    const c = { id: nextId, user: me.username, content: t, createdAt: Date.now() }
    post.comments = [...(post.comments || []), c]
    newCommentText[post.id] = ''
}

function deleteComment(post, commentId) {
    const list = post.comments || []
    const target = list.find(c => c.id === commentId)
    if (!target || target.user !== me.username) return
    post.comments = list.filter(c => c.id !== commentId)
}

function toggleComments(post) {
    commentExpanded[post.id] = !commentExpanded[post.id]
}

function displayedComments(post) {
    const expanded = !!commentExpanded[post.id]
    const list = post.comments || []
    if (expanded) return list
    const n = 2
    return list.slice(Math.max(0, list.length - n))
}

function isCommentMenuOpen(post, commentId) {
    const map = commentMenuOpen[post.id] || {}
    return !!map[commentId]
}

function toggleCommentMenu(post, commentId) {
    const map = commentMenuOpen[post.id] || {}
    const next = { ...map, [commentId]: !map[commentId] }
    commentMenuOpen[post.id] = next
}

function startEditComment(post, commentId) {
    const list = post.comments || []
    const target = list.find(c => c.id === commentId)
    if (!target || target.user !== me.username) return
    const editMap = commentEditing[post.id] || {}
    commentEditing[post.id] = { ...editMap, [commentId]: true }
    const textMap = commentEditText[post.id] || {}
    commentEditText[post.id] = { ...textMap, [commentId]: target.content }
    toggleCommentMenu(post, commentId)
}

function isEditingComment(post, commentId) {
    const map = commentEditing[post.id] || {}
    return !!map[commentId]
}

function getCommentEditText(post, commentId) {
    const map = commentEditText[post.id] || {}
    return map[commentId] || ''
}

function setCommentEditText(post, commentId, val) {
    const map = commentEditText[post.id] || {}
    commentEditText[post.id] = { ...map, [commentId]: val }
}

function saveEditComment(post, commentId) {
    const list = post.comments || []
    const target = list.find(c => c.id === commentId)
    if (!target || target.user !== me.username) return
    const text = getCommentEditText(post, commentId).trim()
    if (!text) return
    const ok = window.confirm('Lưu chỉnh sửa bình luận?')
    if (!ok) return
    target.content = text
    const editMap = commentEditing[post.id] || {}
    commentEditing[post.id] = { ...editMap, [commentId]: false }
}

function cancelEditComment(post, commentId) {
    const editMap = commentEditing[post.id] || {}
    commentEditing[post.id] = { ...editMap, [commentId]: false }
}

function confirmDeleteComment(post, commentId) {
    const ok = window.confirm('Bạn có chắc muốn xóa bình luận này?')
    if (!ok) return
    deleteComment(post, commentId)
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
</script>

<style scoped>
body {
    background: #fafafa;
}

/* Stories ring */
.story-ring {
    width: 72px;
    height: 72px;
    padding: 3px;
    border-radius: 50%;
    background: conic-gradient(#f58529, #dd2a7b, #8134af, #515bd4);
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

/* Inline icon-only menu next to brand */
.inline-icon-menu {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 40
}

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
    fill: currentColor
}

.inline-icon-menu .icon-btn:hover {
    background: rgba(0, 0, 0, 0.04)
}

.inline-icon-menu .icon-btn.router-link-active,
.inline-icon-menu .icon-btn.router-link-exact-active {
    background: #f8f9fa
}

@media (max-width: 767.98px) {
    .inline-icon-menu {
        display: none !important
    }
}

.story-avatar {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border: 2px solid white;
    border-radius: 50%;
}

/* Post image aspect */
.post-image {
    object-fit: cover;
    position: relative;
    overflow: hidden;
    width: fit-content;
}

/* overlayed carousel controls inside the image */
.post-image .carousel-prev,
.post-image .carousel-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.45);
    color: #fff;
    border: none;
    width: 40px;
    height: 40px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    border-radius: 999px;
    z-index: 6;
}

.post-image .carousel-prev {
    left: 12px
}

.post-image .carousel-next {
    right: 12px
}

.post-image .carousel-prev:hover,
.post-image .carousel-next:hover {
    background: rgba(0, 0, 0, 0.65)
}

.post-image .image-dots {
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 6px;
    z-index: 6;
}

.post-image .dot {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer
}

.post-image .dot.active {
    background: #fff
}

/* Small visual tweaks */
.card {
    border: none;
    border-radius: 0;
}

.card+.card {
    border-top: 1px solid #eee;
}


.menu-icon {
    width: 22px;
    height: 22px;
    fill: black;
    stroke: black;
}

.menu-icon:hover {
    background: rgba(0, 0, 0, 0.04)
}

/* Make the left navigation stick while scrolling */
.left-sidebar {
    position: sticky;
    top: 80px;
    z-index: 30;
}

.right-sidebar {
    position: sticky;
    top: 80px;
    z-index: 30;

}

.nav-item .nav-link {
    border-radius: 8px;
}

.nav-item .nav-link:hover {
    background: rgba(0, 0, 0, 0.04)
}
</style>
