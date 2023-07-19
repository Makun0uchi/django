<template>            
  <div>
      <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
      })
    }
  },
  beforeCreate() {
      const token = this.$store.state.token

      if (token) {
        this.$ajax.defaults.headers.common['Authorization'] = `Token ${token}`
      } else {
        this.$ajax.defaults.headers.common['Authorization'] = ""
      }
    },
}
</script>

<style scoped>
 
</style>