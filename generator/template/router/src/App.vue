<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>

      <span> | </span>
      <router-link v-if="$auth.isAuthenticated" to="/profile">Profile</router-link>

      <!-- Check that the SDK client is not currently loading before accessing is methods -->
      <span v-if="$auth.isAuthenticated" > | </span>
      <!-- show login when not authenticated -->
      <button v-if="!$auth.loading && !$auth.isAuthenticated" @click="login">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="!$auth.loading && $auth.isAuthenticated" @click="logout">Log out</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
