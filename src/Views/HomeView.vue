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
                        <router-link :to="{ name: 'Profile' }" class="icon-btn" title="Trang cá nhân">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
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
                    <div class="card-header bg-white border-0 py-3 d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center">
                            <img :src="post.userAvatar" class="rounded-circle border me-3" width="50" height="50"
                                style="object-fit: cover;" />
                            <div>
                                <div class="d-flex align-items-center">
                                    <span class="fw-bold text-dark me-1" style="font-size: 14px;">{{ post.user }}</span>
                                    <span class="text-muted mx-1" style="font-size: 12px;">•</span>
                                    <span class="text-muted" style="font-size: 14px;">{{ post.createdAt ?
                                        timeAgo(post.createdAt) : post.time }}</span>
                                    
                                    
                                </div>
                                <div class="text-muted small mt-1" style="font-size: 12px; line-height: 1;">{{ post.location
                                    || '' }}</div>
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
                                    <button class="list-group-item list-group-item-action text-danger fw-bold py-3"
                                        style="font-size: 14px;" @click="reportPost(post)">Báo cáo</button>
                                    <button v-if="post.user === me.username" class="list-group-item list-group-item-action text-danger fw-bold py-3"
                                        style="font-size: 14px;" @click="deletePost(post)">Xóa bài viết</button>
                                   
                                    <button class="list-group-item list-group-item-action py-3" style="font-size: 14px;"
                                        @click="goToPost(post)">Đi tới bài viết</button>
                                    <button class="list-group-item list-group-item-action py-3" style="font-size: 14px;"
                                        @click="copyPostLink(post)">Sao chép liên kết</button>
                                    <button class="list-group-item list-group-item-action py-3" style="font-size: 14px;"
                                        @click="closePostMenu(post.id)">Hủy</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Post Image -->
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
            </div>

            <!-- Right sidebar -->
            <div class="col-lg-3 d-none d-lg-block ">
                <div class=" right-sidebar">
                    <!-- Profile summary -->
                    <div class="d-flex align-items-center mb-3">
                        <img :src="me.avatar" class="rounded-circle me-3" width="46" height="46" />
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
                            <button class="btn btn-sm btn-link text-primary">Kết bạn</button>
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
import { reactive, ref } from "vue";
import PostComposer from "@/Views/PostComposer.vue";
import { useRouter } from "vue-router";
import api from "@/services/api";

const me = reactive({
    username: "Ng Thi Luong Hau",
    avatar: '/img01.jpg',
});

// Load user from localStorage
const currentUserStr = localStorage.getItem('currentUser')
const storedAvatar = localStorage.getItem('userAvatar');
if (currentUserStr) {
    try {
        const u = JSON.parse(currentUserStr)
        if (u.lastName && u.firstName) {
            me.username = `${u.lastName} ${u.firstName}`
        }
        if (storedAvatar) {
            me.avatar = storedAvatar;
        } else if (u.avatar) {
            me.avatar = u.avatar;
        }
    } catch (e) {
        console.error('Error parsing user', e)
    }
}

const stories = [
    { id: 1, user: "wyn.anh", avatar: '/img27.jpg' },
    { id: 2, user: "_ttqueen", avatar: '/img21.jpg' },
    { id: 3, user: "buncry3107", avatar: '/img12.jpg' },
    { id: 4, user: "_imfifteen", avatar: '/img16.jpg' },
    { id: 5, user: "thvievy", avatar: '/img03.jpg' },
    { id: 6, user: "_dino.makeup", avatar: '/img09.jpg' },
];

const posts = reactive([]);

async function loadPosts() {
    try {
        const res = await api.get('/posts');
        const apiPosts = res.data || [];

        // Sort by newst
        apiPosts.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

        // Update 'liked' state for current user
        apiPosts.forEach(p => {
            if (p.likedBy && Array.isArray(p.likedBy)) {
                p.liked = p.likedBy.includes(me.username);
            } else {
                p.liked = false;
            }
            // Ensure comments exists
            if (!p.comments) p.comments = [];
            if (p.bookmarked === undefined) p.bookmarked = false;
            
            // Check if post belongs to me, if so, update avatar in case it changed
            if (p.user === me.username) {
                p.userAvatar = me.avatar;
            }
        });

        posts.splice(0, posts.length, ...apiPosts);
    } catch (err) {
        console.error("Error loading posts from API:", err);
        // Fallback to localStorage if API fails (optional, removing staticPosts per request to use API)
        const storedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
        posts.splice(0, posts.length, ...storedPosts);
    }
}

loadPosts();

// Listen for new posts
window.addEventListener('post-created', loadPosts);

// per-post image index
const imageIndex = reactive({})


const suggestions = [
    { id: 1, user: "Kim Anh", avatar: '/img32.jpg' },
    { id: 2, user: "Lam Anh", avatar: '/img10.jpg' },
    { id: 3, user: "Ng An", avatar: '/img20.jpg' },
];

async function toggleLike(post) {
    if (typeof post.likes !== 'number') post.likes = 0;
    const username = me.username;
    if (!post.likedBy) post.likedBy = [];
    
    const alreadyLiked = post.likedBy.includes(username);
    
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
    } catch (err) {
        console.error("Failed to toggle like", err);
        // Revert
        if (alreadyLiked) {
            post.likes++;
            post.likedBy.push(username);
            post.liked = true;
        } else {
            post.likes--;
            post.likedBy = post.likedBy.filter(u => u !== username);
            post.liked = false;
        }
        alert("Lỗi kết nối server");
    }
}

async function toggleBookmark(post) {
    post.bookmarked = !post.bookmarked;
    // Optional: Persist to API if the backend supported it
}

const newCommentText = reactive({})
// const commentExpanded = reactive({})
// const commentMenuOpen = reactive({})
// const commentEditing = reactive({})
// const commentEditText = reactive({})
const deleteModal = reactive({
    show: false,
    comment: null,
    post: null
})

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
    if (ok) alert('Đã gửi báo cáo')
    closePostMenu(post.id)
}

async function deletePost(post) {
    const ok = window.confirm('Bạn có chắc chắn muốn xóa bài viết này?')
    if (!ok) {
      closePostMenu(post.id)
      return;
    }

    // Optimistic remove
    // const originalPosts = [...posts];
    const idx = posts.findIndex(p => p.id === post.id);
    if(idx !== -1) posts.splice(idx, 1);

    try {
        await api.delete(`/posts/${post.id}`)
        // Also remove from localStorage if we are caching
        const stored = JSON.parse(localStorage.getItem('posts') || '[]');
        const storedIdx = stored.findIndex(p => p.id === post.id);
        if(storedIdx !== -1) {
            stored.splice(storedIdx, 1);
            localStorage.setItem('posts', JSON.stringify(stored));
        }
        alert("Đã xóa bài viết thành công!");
    } catch (e) {
        console.error("Failed to delete post", e);
        // post.splice(0, posts.length, ...originalPosts); // Revert if needed, but usually we just alert
        alert("Xóa thất bại, vui lòng thử lại sau.");
    }
    closePostMenu(post.id)
}

async function addComment(post) {
    const t = (newCommentText[post.id] || '').trim()
    if (!t) return
    const nextId = (post.comments && post.comments.length ? Math.max(...post.comments.map(c => c.id)) + 1 : 1)
    const c = { id: nextId, user: me.username, content: t, createdAt: Date.now() }
    
    const previousComments = [...(post.comments || [])];
    post.comments = [...previousComments, c]
    newCommentText[post.id] = ''

    try {
        await api.patch(`/posts/${post.id}`, { comments: post.comments });
    } catch(err) {
        console.error("Error adding comment", err);
        post.comments = previousComments;
         newCommentText[post.id] = t; 
        alert("Lỗi thêm bình luận");
    }
}

async function deleteComment(post, commentId) {
    const list = post.comments || []
    const target = list.find(c => c.id === commentId)
    // Allow if user is comment author OR user is post owner
    const isOwner = post.user === me.username
    const isAuthor = target && target.user === me.username
    if (!target || (!isAuthor && !isOwner)) return
    
    const previousComments = [...list];
    post.comments = list.filter(c => c.id !== commentId)

    try {
        await api.patch(`/posts/${post.id}`, { comments: post.comments });
    } catch(err) {
        console.error("Error deleting comment", err);
        post.comments = previousComments;
        alert("Lỗi xoá bình luận");
    }
}


// function displayedComments(post) {
//     const expanded = !!commentExpanded[post.id]
//     const list = post.comments || []
//     if (expanded) return list
//     const n = 2
//     return list.slice(Math.max(0, list.length - n))
// }
//
//
function onScroll(e, postId) {
    const el = e.target;
    // Calculate index based on scroll position
    const index = Math.round(el.scrollLeft / el.clientWidth);
    if (imageIndex[postId] !== index) {
        imageIndex[postId] = index;
    }
}

function scrollCarousel(postId, direction) {
    const container = document.getElementById(`carousel-${postId}`);
    if (container) {
        const scrollAmount = container.clientWidth * direction;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// function showDeleteModal(post, comment) {
//     deleteModal.show = true
//     deleteModal.comment = comment
//     deleteModal.post = post
//     // Close menu
//     const map = commentMenuOpen[post.id] || {}
//     commentMenuOpen[post.id] = { ...map, [comment.id]: false }
// }

function closeDeleteModal() {
    deleteModal.show = false
    deleteModal.comment = null
    deleteModal.post = null
}

function executeDeleteComment() {
    if (!deleteModal.post || !deleteModal.comment) {
        closeDeleteModal()
        return
    }
    
    const post = deleteModal.post
    const commentId = deleteModal.comment.id
    
    deleteComment(post, commentId)
    closeDeleteModal()
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
    width: 100%;
}

/* overlaid carousel controls inside the image */
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
    gap: 4px;
    z-index: 6;
}

.post-image .dot {
    width: 6px;
    height: 6px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.2s;
}

.post-image .dot.active {
    background: #fff;
    transform: scale(1.2);
}

/* Small visual tweaks */
.card {
    border: none;
    border-radius: 0;
}

.card+.card {
    border-top: 0px solid #eee;
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
