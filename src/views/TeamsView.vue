<template>
  <div class="teams">
    <h2 class="indigo--text">Magang BTPNS Teammates</h2>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" alt="" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="body-1">
                {{ person.name }}
              </div>
              <div class="gray--text">
                {{ person.role }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn depressed elevation="1" small>
                <v-icon color="grey" small>mdi-message</v-icon>
                <span>Chat</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Muhammad Zydane",
          role: "Front End Developer",
          avatar: "/img/avatar-1.png",
        },
        {
          name: "Rahmat Ryan",
          role: "Back End Developer",
          avatar: "/img/avatar-2.png",
        },
        {
          name: "Mita Rahmat",
          role: "Data Enginner",
          avatar: "/img/avatar-3.png",
        },
        { name: "Soehatta", role: "Developer", avatar: "/img/avatar-4.png" },
        { name: "Suherlina", role: "Sofware QA", avatar: "/img/avatar-5.png" },
        {
          name: "Lulu Shafira",
          role: "Android Developer",
          avatar: "/img/avatar-3.png",
        },
      ],
    };
  },
};
</script>
