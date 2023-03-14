<template>
  <div class="project">
    <h2 class="indigo--text">My Projects</h2>

    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>
            {{ project.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <div class="font-weight-bold">
              Due Project: <span class="red--text">{{ project.due }}</span>
            </div>
            <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person == "Muhammad Zydane";
      });
    },
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const changes = querySnapshot.docChanges();
    changes.forEach((change) => {
      if (change.type === "added") {
        this.projects.push({
          ...change.doc.data(),
          id: change.doc.id,
        });
      }
    });
  },
};
</script>
