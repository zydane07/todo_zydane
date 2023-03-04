<template>
  <nav>
    <v-toolbar outlined>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="font-weight-bold"
        >Zydane's Todo App</v-toolbar-title
      >

      <div class="mx-6 d-flex justify-space-between" style="width: 120px">
        <v-btn plain>Home</v-btn>
        <v-btn plain>About</v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn plain class="red--text">
        <span>Sign Out</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {};
</script>
