<template>
    <div class="login-page d-flex align-items-center justify-content-center vh-100">
        <div class="container">
            <div class="row justify-content-center gx-5">

                <!-- Left side -->
                <div class="col-lg-6 d-none d-lg-flex flex-column justify-content-center text-white promo">
                    <h2 class="display-4 fw-bold">Kết nối với bạn bè và thế giới xung quanh bạn.</h2>
                    <p class="lead mt-4">Xem những gì đang diễn ra trong cộng đồng của bạn ngay bây giờ.</p>
                </div>

                <!-- Login form -->
                <div class="col-12 col-lg-4">
                    <div class="card shadow-sm rounded-3">
                        <div class="card-body p-4">

                            <div class="text-center mb-3">
                                <img src="/logo.png" alt="Logo" class="brand-circle mb-2" />
                                <h5 class="mb-0">Đăng nhập</h5>
                            </div>

                            <form @submit.prevent="handleLogin">
                                <div class="mb-3">
                                    <input
                                        v-model="email"
                                        class="form-control"
                                        placeholder="Email hoặc số điện thoại"
                                        :class="{ 'is-invalid': emailError }"
                                    />
                                    <div class="invalid-feedback">{{ emailError }}</div>
                                </div>

                                <div class="mb-2 position-relative">
                                    <input
                                        v-model="password"
                                        :type="showPassword ? 'text' : 'password'"
                                        class="form-control"
                                        placeholder="Nhập mật khẩu"
                                        :class="{ 'is-invalid': passwordError }"
                                    />
                                    <button type="button" class="btn btn-sm toggle-pass"
                                        @click="showPassword = !showPassword">
                                        {{ showPassword ? 'Ẩn' : 'Hiện' }}
                                    </button>
                                    <div class="invalid-feedback">{{ passwordError }}</div>
                                </div>

                                <div class="d-grid mb-3">
                                    <button class="btn btn-primary fw-semibold" type="submit">
                                        Đăng nhập
                                    </button>
                                </div>

                                <div class="text-center mb-3">
                                    <a href="#" @click.prevent="forgotPassword" class="small text-decoration-none">
                                        Quên mật khẩu?
                                    </a>
                                </div>

                                <hr />

                                <div class="d-grid">
                                    <router-link :to="{ name: 'Resigter' }" class="btn btn-success fw-semibold">
                                        Tạo tài khoản mới
                                    </router-link>
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
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const API = "http://localhost:3000/users"

const email = ref("")
const password = ref("")
const showPassword = ref(false)

// Error messages
const emailError = ref("")
const passwordError = ref("")

// Reset errors
function resetErrors() {
    emailError.value = ""
    passwordError.value = ""
}

function validate() {
    resetErrors()
    let ok = true

    if (!email.value.trim()) {
        emailError.value = "Vui lòng nhập email hoặc số điện thoại."
        ok = false
    }
    if (!password.value.trim()) {
        passwordError.value = "Vui lòng nhập mật khẩu."
        ok = false
    }

    return ok
}

async function handleLogin() {
    if (!validate()) return

    try {
        const input = email.value.trim();
        const pass = password.value;

        
        let res = await axios.get(`${API}?email=${input}&password=${pass}`)
        
        
        if (res.data.length === 0) {
            res = await axios.get(`${API}?phoneNumber=${input}&password=${pass}`)
        }

       
        if (res.data.length === 0) {
            res = await axios.get(`${API}?contact=${input}&password=${pass}`)
        }

        if (res.data.length > 0) {
            const user = res.data[0]

            
            localStorage.setItem("currentUser", JSON.stringify(user))

            
            localStorage.setItem("userAvatar", user.avatar || "");

            alert("Đăng nhập thành công!")
            router.push({ name: "Home" })

        } else {
            passwordError.value = "Email hoặc mật khẩu không chính xác."
        }
    } catch (error) {
        alert("Đã có lỗi xảy ra. Vui lòng thử lại sau.")
        console.error(error)
    }
   
}

function forgotPassword() {
    alert("Chức năng quên mật khẩu chưa được hỗ trợ.")
}
</script>

<style scoped>
.login-page {
    background: linear-gradient(180deg, #5094ec 0%, #304864 100%);
    padding: 2rem 0;
}

.promo {
    padding: 3rem;
}

.brand-circle {
    width: 64px;
    height: 64px;
    background: #f4f9ff;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .15);
}

.toggle-pass {
    position: absolute;
    top: 6px;
    right: 6px;
    background: transparent;
    border: none;
    font-size: 0.8rem;
}
</style>
