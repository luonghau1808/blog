<template>
    <div class="d-flex justify-content-center align-items-center min-vh-100 bg-light">
        <div class="card shadow-sm w-100" style="max-width: 520px;">
            <div class="card-body">
                <h3 class="card-title mb-3 text-center">Tạo tài khoản mới</h3>

                <div v-if="success" class="alert alert-success" role="alert">
                    Đăng ký thành công!
                </div>

                <form @submit.prevent="onSubmit" novalidate>
                    <div class="row">
                        <div class="col-md-6 mb-3">                       
                            <input
                                id="lastName"
                                v-model="form.lastName"
                                type="text"
                                class="form-control"
                                :class="{ 'is-invalid': errors.lastName }"
                                placeholder="Họ"
                                required
                            />
                            <div class="invalid-feedback">{{ errors.lastName }}</div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <input
                                id="firstName"
                                v-model="form.firstName"
                                type="text"
                                class="form-control"
                                :class="{ 'is-invalid': errors.firstName }"
                                placeholder="Tên"
                                required
                            />
                            <div class="invalid-feedback">{{ errors.firstName }}</div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <input
                            id="contact"
                            v-model="form.contact"
                            type="text"
                            class="form-control"
                            :class="{ 'is-invalid': errors.contact }"
                            placeholder="Email hoặc Số điện thoại"
                            required
                        />
                        <div class="invalid-feedback">{{ errors.contact }}</div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Ngày sinh</label>
                        <div class="d-flex gap-2">
                            <select
                                v-model="form.birthDay"
                                class="form-select"
                                :class="{ 'is-invalid': errors.birthDate }"
                            >
                                <option value="">Ngày</option>
                                <option v-for="d in days" :key="d" :value="d">{{ d }}</option>
                            </select>

                            <select
                                v-model="form.birthMonth"
                                class="form-select"
                                :class="{ 'is-invalid': errors.birthDate }"
                            >
                                <option value="">Tháng</option>
                                <option v-for="(m, idx) in months" :key="idx" :value="idx + 1">{{ m }}</option>
                            </select>

                            <select
                                v-model="form.birthYear"
                                class="form-select"
                                :class="{ 'is-invalid': errors.birthDate }"
                            >
                                <option value="">Năm</option>
                                <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
                            </select>
                        </div>
                        <div class="invalid-feedback d-block">{{ errors.birthDate }}</div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label d-block">Giới tính</label>
                        <div>
                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    id="genderMale"
                                    value="male"
                                    v-model="form.gender"
                                />
                                <label class="form-check-label" for="genderMale">Nam</label>
                            </div>

                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    id="genderFemale"
                                    value="female"
                                    v-model="form.gender"
                                />
                                <label class="form-check-label" for="genderFemale">Nữ</label>
                            </div>

                            <div class="form-check form-check-inline">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    id="genderOther"
                                    value="other"
                                    v-model="form.gender"
                                />
                                <label class="form-check-label" for="genderOther">Khác</label>
                            </div>
                        </div>
                        <div class="invalid-feedback d-block">{{ errors.gender }}</div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="password" class="form-label">Mật khẩu</label>
                            <input
                                id="password"
                                v-model="form.password"
                                type="password"
                                class="form-control"
                                :class="{ 'is-invalid': errors.password }"
                                placeholder="Nhập mật khẩu"
                                required
                            />
                            <div class="invalid-feedback">{{ errors.password }}</div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="confirm" class="form-label">Xác nhận mật khẩu</label>
                            <input
                                id="confirm"
                                v-model="form.confirmPassword"
                                type="password"
                                class="form-control"
                                :class="{ 'is-invalid': errors.confirmPassword }"
                                placeholder="Xác nhận mật khẩu"
                                required
                            />
                            <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
                        </div>
                    </div>

                    <div class="mb-3 form-check">
                        <input
                            id="agree"
                            v-model="form.agree"
                            type="checkbox"
                            class="form-check-input"
                            :class="{ 'is-invalid': errors.agree }"
                        />
                        <label for="agree" class="form-check-label">Tôi đồng ý với điều khoản sử dụng</label>
                        <div class="invalid-feedback d-block">{{ errors.agree }}</div>
                    </div>

                    <div class="d-grid">
                        <button type="submit" class="btn btn-success">Đăng ký</button>
                    </div>
                </form>

                <div class="text-center mt-3">
                    <small>Đã có tài khoản? <router-link :to="{ name: 'Login' }">Đăng nhập</router-link></small>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
    firstName: '',
    lastName: '',
    contact: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    gender: '',
    password: '',
    confirmPassword: '',
    agree: false,
})

const errors = reactive({
    firstName: '',
    lastName: '',
    contact: '',
    birthDate: '',
    gender: '',
    password: '',
    confirmPassword: '',
    agree: '',
})

// Options for day/month/year selects
const days = Array.from({ length: 31 }, (_, i) => i + 1)
const months = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
const currentYear = new Date().getFullYear()
const years = Array.from({ length: 101 }, (_, i) => currentYear - i)

const success = ref(false)

function resetErrors() {
    Object.keys(errors).forEach(k => (errors[k] = ''))
    success.value = false
}

function validateEmail(email) {
    // simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone) {
    if (!phone) return true
    return /^[0-9]{7,15}$/.test(phone)
}

function onSubmit() {
    resetErrors()
    let ok = true

    if (!form.lastName.trim()) {
        errors.lastName = 'Vui lòng nhập họ.'
        ok = false
    }

    if (!form.firstName.trim()) {
        errors.firstName = 'Vui lòng nhập tên.'
        ok = false
    }

    if (!form.contact.trim()) {
        errors.contact = 'Vui lòng nhập email hoặc số điện thoại.'
        ok = false
    } else {
        const c = form.contact.trim()
        if (!validateEmail(c) && !validatePhone(c)) {
            errors.contact = 'Vui lòng nhập email hoặc số điện thoại hợp lệ.'
            ok = false
        }
    }

    if (!form.birthDay || !form.birthMonth || !form.birthYear) {
        errors.birthDate = 'Vui lòng chọn ngày/tháng/năm sinh.'
        ok = false
    }

    if (!form.gender) {
        errors.gender = 'Vui lòng chọn giới tính.'
        ok = false
    }

    if (!form.password) {
        errors.password = 'Vui lòng nhập mật khẩu.'
        ok = false
    } else if (form.password.length < 6) {
        errors.password = 'Mật khẩu tối thiểu 6 ký tự.'
        ok = false
    }

    if (!form.confirmPassword) {
        errors.confirmPassword = 'Vui lòng xác nhận mật khẩu.'
        ok = false
    } else if (form.password !== form.confirmPassword) {
        errors.confirmPassword = 'Mật khẩu không khớp.'
        ok = false
    }


    if (!form.agree) {
        errors.agree = 'Bạn cần đồng ý với điều khoản.'
        ok = false
    }


    if (!ok) return

    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const exists = users.find(u => u.contact === form.contact)
    
    if (exists) {
        errors.contact = 'Tài khoản này đã tồn tại.'
        return
    }

    // Save new user
    const newUser = {
        firstName: form.firstName,
        lastName: form.lastName,
        contact: form.contact,
        birthDay: form.birthDay,
        birthMonth: form.birthMonth,
        birthYear: form.birthYear,
        gender: form.gender,
        password: form.password // In a real app, this should be hashed
    }

    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))

    success.value = true

    // Reset form
    form.firstName = ''
    form.lastName = ''
    form.contact = ''
    form.birthDay = ''
    form.birthMonth = ''
    form.birthYear = ''
    form.gender = ''
    form.password = ''
    form.confirmPassword = ''
    form.agree = false
}
</script>

<style scoped>
/* Tinh chỉnh nhỏ để giao diện đẹp hơn */
body {
    background-color: #f8f9fa;
}
.card {
    border-radius: 0.75rem;
}
</style>