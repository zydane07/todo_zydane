<template>
  <div id="home">
    <h2 class="indigo--text">Dashboard</h2>

    <v-container class="my-5">
      <v-layout row class="mb-3">
        <p class="font-weight-bold mr-3">Sort Project:</p>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              depressed
              elevation="1"
              class="mr-4"
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="grey" class="mr-2">mdi-folder</v-icon>
              <span class="caption text-lowercase">By Projects</span>
            </v-btn>
          </template>
          <span>Sort By Project Name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              depressed
              elevation="1"
              @click="sortBy('person')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="grey" class="mr-2">mdi-account</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
          <span>Sort By Project Name</span>
        </v-tooltip>
      </v-layout>

      <v-card
        flat
        class="pa-3"
        v-for="project in projects"
        :key="project.title"
      >
        <v-layout row wrap :class="`px-3 py-5 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due Date</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="text-right">
              <v-chip
                small
                :class="`my-2 caption white--text ${project.status}`"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Muhammad Zydane",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the homepage",
          person: "Rahmat Ryan",
          due: "10th Jan 2019",
          status: "done",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumbnails",
          person: "Soehatta",
          due: "20th Dec 2018",
          status: "done",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community forum",
          person: "Megalini",
          due: "20th Oct 2018",
          status: "due",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design a new website 2",
          person: "Muhammad Zydane",
          due: "31st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style>
.project.done {
  border-left: 4px solid #16e732;
}
.project.ongoing {
  border-left: 4px solid #2d24cf;
}
.project.due {
  border-left: 4px solid #e10b0b;
}
.v-chip.done {
  background: #16e732 !important;
}
.v-chip.ongoing {
  background: #2d24cf !important;
}
.v-chip.due {
  background: #e10b0b !important;
}
</style>
