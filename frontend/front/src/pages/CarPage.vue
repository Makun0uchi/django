<template>
    <div class="main-block">
        <app-header></app-header>
        <app-content></app-content>
        <video src="@/videos/02 Zero Two(Phut Hon).mp4" controls width="100%"></video>
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

video {
  margin-top: 10px;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
}
  
@font-face {
  font-family: "Oldtimer";
  src: local("Oldtimer"),
  url("../fonts/ofont.ru_Oldtimer.ttf") format("truetype");
}
</style>