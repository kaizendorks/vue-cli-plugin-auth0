<template>
  <div id="app">
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>

      <div v-if="$auth.isAuthenticated">
        <div>
          <img :src="$auth.user.picture">
          <h2>{{ $auth.user.name }}</h2>
          <p>{{ $auth.user.email }}</p>
        </div>

        <div>
          <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
        </div>
      </div>
    </div>

    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  methods: {
    // Log the user in
    login () {
      this.$auth.loginWithRedirect()
    },
    // Log the user out
    logout () {
      this.$auth.logout({
        returnTo: window.location.origin
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
