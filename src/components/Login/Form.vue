<template>
  <div class="row" id="login">
    <div class="content-header center-align">
      <h1>Login <small>Acesso ao painel</small></h1>
    </div>

    <div class="card col s4 offset-s4">
      <div class="card-content">
        <div class="card-title">Acesso ao sistema</div>
        <form class="row" autocomplete="off" @submit.prevent="login">
          <div class="input-field col s12">
            <input
              name="email"
              v-model="user.username"
              type="email"
              id="title"
              class="validate"
              placeholder="Informe seu email..."
              required
            />
            <label for="email" class="active">Email</label>
          </div>
          <div class="input-field col s12">
            <input
              name="password"
              v-model="user.password"
              type="password"
              id="title"
              class="validate"
              placeholder="Informe sua senha"
              required
            />
            <label for="password" class="active">Senha</label>
          </div>
          <div class="input-field col s12">
            <input
              type="submit"
              class="waves-effect waves-light btn-large blue-grey darken-4"
              value="salvar"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { CONFIG } from './../../config'

export default {
  name: 'login',
  data: function () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login: function () {
      let data = {
        grant_type: 'password',
        client_id: CONFIG.client_id,
        client_secret: CONFIG.client_secret,
        username: this.user.username,
        password: this.user.password,
        scope: ''
      }
      Vue.http.post('oauth/token', data).then(res => {
        localStorage['token'] = JSON.stringify(res.body)
        this.$router.push('/contas')
      })
    }
  }
}
</script>
<style>
#login {
  background-color: #eee !important;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 99999;
  padding: 20px;
}
</style>
