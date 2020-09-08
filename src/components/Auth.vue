<template>
  <transition appear name="auth-animate">
    <div>
      <div class="row m-3">
        <div class="col-12 h1 text-center">
          Hoşgeldiniz...
        </div>
      </div>
      <div class="row">
        <div class="col-4 p-5 m-auto form">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                v-model.trim="$v.user.email.$model"
                type="email"
                class="form-control"
                :class="{'input-eror':$v.user.email.$error}"
                id="exampleInputEmail1">

              <small v-if="!$v.user.email.required" class="form-text text-danger">E-mail Alanı Boş Bırakılamaz.</small>
              <small v-if="!$v.user.email.email" class="form-text text-danger">Geçerli E-mail Hesabı Giriniz.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Şifre</label>
              <input
                v-model="$v.user.password.$model"
                type="password"
                class="form-control"
                :class="{'input-eror':$v.user.password.$error}"
                id="exampleInputPassword1">
            </div>
            <small v-if="!$v.user.password.required" class="form-text text-danger">Şifre Alanı Gereklidir.</small>
            <small v-if="!$v.user.password.minLength" class="form-text text-danger">
              Şifre {{ $v.user.password.$params.minLength.min }}'ten küçük olamaz.
            </small>
            <button
              @click.prevent="loginAndRegister()"
              type="submit"
              class="btn"
              :class="{
            'btn-success': !register,
            'btn-primary':register,
            'btn-cursor':$v.$invalid
            }"
              :style="{}"
              :disabled="$v.$invalid">
              {{ register ? 'Kayıt Ol' : 'Giriş Yap' }}
            </button>
            <div class="form-group mt-3">
              <div v-if="register" @click="register=!register" class="h6">Hesabın mı var?Giriş Yap</div>
              <div v-else @click="register=!register" class="h6">Kayıt Ol</div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import {required, email, minLength} from 'vuelidate/lib/validators'

export default {
  name: "Auth",
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      register: false,
      authAnimate: false
    }
  },
  validations: {
    user: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(5)
      }
    }

  },
  methods: {
    loginAndRegister() {
      this.$store.dispatch('loginAndRegister', {...this.user, register: this.register})
        .then(response => {

        })
    }
  },
}
</script>

<style scoped>
.form {
  background-color: #f8f8f8;
  border-radius: 4px;

  -webkit-box-shadow: 0px 0px 7px 1px rgba(143, 143, 143, 1);
  -moz-box-shadow: 0px 0px 7px 1px rgba(143, 143, 143, 1);
  box-shadow: 0px 0px 7px 1px rgba(143, 143, 143, 1);
}

.input-eror {
  border: 1px solid #cd1b1b;
}

.auth-animate-enter-active {
  animation: auth-in-animate .6s ease-in forwards;
}

.btn-cursor {
  cursor: not-allowed;
}


@keyframes auth-in-animate {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
