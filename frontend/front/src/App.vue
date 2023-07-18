<template>            
  <div>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {}
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