<template>
  <v-app class="">
    <navbarMenu></navbarMenu>
    <v-main class="grey lighten-3">
      <!-- <router-view/> -->
      <router-view class="mx-5 my-10"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";
export default {
  name: "App",
  components: { NavbarMenu },
  data: () => ({
    //
  }),
};
</script>
