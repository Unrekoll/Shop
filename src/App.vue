<template>
  <div class="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">Todo list</div>
            <ul class="navbar-list">
              <li class="navbar-item">
                <router-link @click.native="handleAuthClick"
                  class="navbar-link"
                  :to="'/login'"
                  >{{ authButton }}</router-link
                >
              </li>
              <li class="navbar-item">
                <router-link
                  class="navbar-link"
                  :to="'/todo'"
                  >Todo</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    authButton() {
       return this.authToken ?'Log out':'Login'
    },
    ...mapState({
      authToken: state => state.authToken
    })
    
  },
  methods: {
    handleAuthClick(){
      this.setAuthToken(null)
    },
    ...mapActions([
        'setAuthToken'
      ])
  },

};
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: blue;
  }
}
</style>