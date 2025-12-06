<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100 bg-light">
    <div class="card shadow-sm w-100" style="max-width: 520px;">
      <div class="card-body">
        <h3 class="card-title mb-3 text-center">Tạo tài khoản mới</h3>

        <div v-if="success" class="alert alert-success" role="alert">
          Đăng ký thành công!
        </div>

        <form @submit.prevent="onSubmit" novalidate>
          <!-- Họ & Tên -->
          <div class="row">
            <div class="col-md-6 mb-3">
              <input
                v-model="form.lastName"
                type="text"
                class="form-control"
                placeholder="Họ"
                :class="{ 'is-invalid': errors.lastName }"
              />
              <div class="invalid-feedback">{{ errors.lastName }}</div>
            </div>

            <div class="col-md-6 mb-3">
              <input
                v-model="form.firstName"
                type="text"
                class="form-control"
                placeholder="Tên"
                :class="{ 'is-invalid': errors.firstName }"
              />
              <div class="invalid-feedback">{{ errors.firstName }}</div>
            </div>
          </div>

          <!-- Contact -->
          <div class="mb-3">
            <input
              v-model="form.contact"
              type="text"
              class="form-control"
              placeholder="Email hoặc Số điện thoại"
              :class="{ 'is-invalid': errors.contact }"
            />
            <div class="invalid-feedback">{{ errors.contact }}</div>
          </div>

          <!-- Ngày tháng năm sinh -->
          <div class="mb-3">
            <label class="form-label">Ngày sinh</label>
            <div class="d-flex gap-2">
              <select v-model="form.birthDay" class="form-select">
                <option value="">Ngày</option>
                <option v-for="d in days" :key="d" :value="d">{{ d }}</option>
              </select>

              <select v-model="form.birthMonth" class="form-select">
                <option value="">Tháng</option>
                <option v-for="(m, i) in months" :key="i" :value="i + 1">{{ m }}</option>
              </select>

              <select v-model="form.birthYear" class="form-select">
                <option value="">Năm</option>
                <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
              </select>
            </div>
            <div class="invalid-feedback d-block">{{ errors.birthDate }}</div>
          </div>

          <!-- Giới tính -->
          <div class="mb-3">
            <label class="form-label d-block">Giới tính</label>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" value="male" v-model="form.gender" />
              <label class="form-check-label">Nam</label>
            </div>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" value="female" v-model="form.gender" />
              <label class="form-check-label">Nữ</label>
            </div>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" value="other" v-model="form.gender" />
              <label class="form-check-label">Khác</label>
            </div>

            <div class="invalid-feedback d-block">{{ errors.gender }}</div>
          </div>

          <!-- Mật khẩu -->
          <div class="row">
            <div class="col-md-6 mb-3">
              <input
                v-model="form.password"
                type="password"
                class="form-control"
                placeholder="Nhập mật khẩu"
                :class="{ 'is-invalid': errors.password }"
              />
              <div class="invalid-feedback">{{ errors.password }}</div>
            </div>

            <div class="col-md-6 mb-3">
              <input
                v-model="form.confirmPassword"
                type="password"
                class="form-control"
                placeholder="Xác nhận mật khẩu"
                :class="{ 'is-invalid': errors.confirmPassword }"
              />
              <div class="invalid-feedback">{{ errors.confirmPassword }}</div>
            </div>
          </div>

          <!-- Đồng ý điều khoản -->
          <div class="mb-3 form-check">
            <input
              v-model="form.agree"
              type="checkbox"
              class="form-check-input"
              :class="{ 'is-invalid': errors.agree }"
            />
            <label class="form-check-label">Tôi đồng ý với điều khoản sử dụng</label>
            <div class="invalid-feedback d-block">{{ errors.agree }}</div>
          </div>

          <div class="d-grid">
            <button class="btn btn-success" type="submit">Đăng ký</button>
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
import { reactive, ref } from "vue"
import axios from "axios"

const API = "http://localhost:3000/users"

// Form
const form = reactive({
  firstName: "",
  lastName: "",
  contact: "",
  birthDay: "",
  birthMonth: "",
  birthYear: "",
  gender: "",
  password: "",
  confirmPassword: "",
  agree: false,
})

// Errors
const errors = reactive({
  firstName: "",
  lastName: "",
  contact: "",
  birthDate: "",
  gender: "",
  password: "",
  confirmPassword: "",
  agree: "",
})

const success = ref(false)

// Ngày - tháng - năm
const days = Array.from({ length: 31 }, (_, i) => i + 1)
const months = [
  "Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6",
  "Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12",
]
const currentYear = new Date().getFullYear()
const years = Array.from({ length: 101 }, (_, i) => currentYear - i)

// Reset errors
function resetErrors() {
  Object.keys(errors).forEach(k => (errors[k] = ""))
  success.value = false
}

// Validators
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone) {
  return /^[0-9]{7,15}$/.test(phone)
}

// Submit
async function onSubmit() {
  resetErrors()
  let ok = true

  // Validate
  if (!form.lastName.trim()) {
    errors.lastName = "Vui lòng nhập họ."
    ok = false
  }
  if (!form.firstName.trim()) {
    errors.firstName = "Vui lòng nhập tên."
    ok = false
  }

  if (!form.contact.trim()) {
    errors.contact = "Vui lòng nhập email hoặc số điện thoại."
    ok = false
  } else {
    const c = form.contact.trim()
    if (!validateEmail(c) && !validatePhone(c)) {
      errors.contact = "Vui lòng nhập email hoặc số điện thoại hợp lệ."
      ok = false
    }
  }

  if (!form.birthDay || !form.birthMonth || !form.birthYear) {
    errors.birthDate = "Vui lòng chọn ngày/tháng/năm sinh."
    ok = false
  }

  if (!form.gender) {
    errors.gender = "Vui lòng chọn giới tính."
    ok = false
  }

  if (!form.password || form.password.length < 6) {
    errors.password = "Mật khẩu tối thiểu 6 ký tự."
    ok = false
  }

  if (!form.confirmPassword || form.password !== form.confirmPassword) {
    errors.confirmPassword = "Mật khẩu không khớp."
    ok = false
  }

  if (!form.agree) {
    errors.agree = "Bạn cần đồng ý với điều khoản."
    ok = false
  }

  if (!ok) return

  // 🔎 Kiểm tra tài khoản có tồn tại chưa
  const check = await axios.get(`${API}?contact=${form.contact}`)
  if (check.data.length > 0) {
    errors.contact = "Tài khoản này đã tồn tại."
    return
  }

  // ✔️ Tạo user mới
  const newUser = {
    firstName: form.firstName,
    lastName: form.lastName,
    contact: form.contact,
    birthDay: form.birthDay,
    birthMonth: form.birthMonth,
    birthYear: form.birthYear,
    gender: form.gender,
    password: form.password,
  }

  await axios.post(API, newUser)
  success.value = true

  // Reset form
  Object.keys(form).forEach(k => (form[k] = ["agree"].includes(k) ? false : ""))
}
</script>

<style scoped>
.card {
  border-radius: 0.75rem;
}
</style>
