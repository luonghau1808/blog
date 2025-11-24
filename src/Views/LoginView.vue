<template>
    <div class="login-page d-flex align-items-center justify-content-center vh-100">
        <div class="container">
            <div class="row justify-content-center gx-5">
                <!-- Left - Promo / Brand -->
                <div class="col-lg-6 d-none d-lg-flex flex-column justify-content-center text-white promo">
                    <h2 class="display-4 fw-bold">Kết nối với bạn bè và thế giới xung quanh bạn.</h2>
                    <p class="lead mt-4 ">Xem những gì đang diễn ra trong cộng đồng của bạn ngay bây giờ.</p>
                </div>
                <!-- Right - Login card -->
                <div class="col-12 col-lg-4">
                    <div class="card shadow-sm rounded-3">
                        <div class="card-body p-4">
                            <div class="text-center mb-3">
                                <img src="/logo.png
                                " alt="Logo" class="brand-circle mb-2" />
                                <h5 class="mb-0">Đăng nhập</h5>
                                <small class="text-muted d-block"></small>
                            </div>

                            <form @submit.prevent="handleLogin" novalidate>
                                <div class="mb-3">
                                    <input v-model="email" type="email" class="form-control"
                                        placeholder="Email hoặc số điện thoại" :class="{ 'is-invalid': emailError }"
                                        required />
                                    <div class="invalid-feedback">{{ emailError }}</div>
                                </div>

                                <div class="mb-2 position-relative">
                                    <input v-model="password" :type="showPassword ? 'text' : 'password'"
                                        class="form-control" placeholder="Nhập mật khẩu"
                                        :class="{ 'is-invalid': passwordError }" required />
                                    <button type="button" class="btn btn-sm toggle-pass"
                                        @click="showPassword = !showPassword">
                                        {{ showPassword ? 'Ẩn' : 'Hiện' }}
                                    </button>
                                    <div class="invalid-feedback">{{ passwordError }}</div>
                                </div>

                                <div class="d-grid mb-3">
                                   <router-link :to="{ name: 'Home' }" class="btn btn-primary fw-semibold"
                                        @click.prevent="handleLogin">Đăng nhập</router-link>
                                </div>

                                <div class="text-center mb-3">
                                    <a href="#" @click.prevent="forgotPassword" class="text-decoration-none small">Quên
                                        mật khẩu?</a>
                                </div>

                                <hr />

                                <div class="d-grid">
                                    <router-link :to="{ name: 'Resigter' }" class="btn btn-success fw-semibold"
                                        @click.prevent="">Tạo tài khoản mới</router-link>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const emailError = ref('')
const passwordError = ref('')

function validate() {
    emailError.value = ''
    passwordError.value = ''
    if (!email.value) emailError.value = 'Vui lòng nhập email hoặc số điện thoại.'
    if (!password.value) passwordError.value = 'Vui lòng nhập mật khẩu.'
    return !emailError.value && !passwordError.value
}

function handleLogin() {
    if (!validate()) return
    // Replace with real authentication logic
    console.log('Logging in with', { email: email.value, password: password.value })
    alert('Logged in (demo)')
}

function forgotPassword() {
    alert('Forgot password flow')
}

</script>

<style scoped>
.login-page {
    background: linear-gradient(180deg, #5094ec 0%, #304864 100%);
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    padding: 2rem 0;
}

.promo {
    padding: 3rem;
}

.brand-circle {
    width: 64px;
    height: 64px;
    background-color: #f4f9ff;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 40px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Slightly customize card for a "social" feel */
.card {
    border: none;
}

/* Toggle password button inside input */
.toggle-pass {
    position: absolute;
    top: 6px;
    right: 6px;
    padding: 0.25rem 0.5rem;
    font-size: 0.8rem;
    border: none;
    background: transparent;
}

/* Responsive tweaks */
@media (max-width: 991.98px) {
    .promo {
        display: none;
    }

    .brand-circle {
        margin: 0 auto;
    }
}
</style>
