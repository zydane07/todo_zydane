<template>
  <v-card outlined>
    <v-app-bar app>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="font-weight-bold"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="font-weight-bold">
        <span>Zydane's Todo App</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn plain class="red--text">
        <span>Sign Out</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="white">
      <v-layout column align-center>
        <v-flex class="mt-5" justify="center">
          <v-avatar size="100" class="center">
            <img src="/img/avatar-1.png" alt="" />
          </v-avatar>
          <p class="text-h6">Muhammad Zydane</p>
        </v-flex>
        <v-flex class="my-2">
          <modalsAddProject />
        </v-flex>
      </v-layout>
      <v-divider class="mt-2"></v-divider>
      <v-list-item
        v-for="link in links"
        :key="link.text"
        router
        :to="link.route"
      >
        <v-list-item-icon>
          <v-icon> {{ link.icon }} </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import modalsAddProject from "./AddProjects";
export default {
  components: { modalsAddProject },
  data() {
    return {
      drawer: false,
      group: null,
      links: [
        { icon: "mdi-home", text: "Dashboard", route: "/" },
        { icon: "mdi-view-dashboard", text: "Projects", route: "/projects" },
        { icon: "mdi-account-group", text: "Teams", route: "/teams" },
        { icon: "mdi-information", text: "About", route: "/about" },
      ],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
.center {
  display: block;
  margin: 0 auto;
}
</style>
