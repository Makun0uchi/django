<template>
    <div class="main-block">
        <app-header></app-header>
        <app-content></app-content>
    </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppContent from "@/components/AppContent.vue";

export default {
    name: "CarPage",
    components: {
    AppHeader, AppContent
  },
}
</script>

<style scoped>
.main-block {
    width: 60%;
    margin: 0 auto;
  }
  
  @font-face {
    font-family: "Oldtimer";
    src: local("Oldtimer"),
    url("../fonts/ofont.ru_Oldtimer.ttf") format("truetype");
  }
</style>