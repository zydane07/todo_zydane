<template>
  <v-dialog v-model="dialog" persistent max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        Add New Projects
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5"> New Projects </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
          ></v-text-field>
          <v-text-field
            label="Person"
            v-model="person"
            prepend-icon="mdi-account"
          ></v-text-field>
          <v-textarea
            label="Content"
            v-model="content"
            prepend-icon="mdi-information"
            :rules="contentRules"
          ></v-textarea>

          <v-menu
            max-width="290"
            v-model="menu1"
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                :value="due"
                label="Due date"
                v-on="on"
                prepend-icon="mdi-calendar-clock"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="due"
              @change="menu1 = false"
            ></v-date-picker>
          </v-menu>

          <div class="d-flex justify-end">
            <v-btn
              color="red lighten-1"
              class="mr-2"
              depressed
              dark
              @click="dialog = false"
            >
              Cancel
            </v-btn>
            <v-btn color="teal lighten-1" depressed dark @click="submit">
              Add Project
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
// import format from 'date-fns/format'
import db from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
export default {
  data() {
    return {
      dialog: false,
      title: "",
      content: "",
      person: "",
      due: null,
      contentRules: [(v) => v.length >= 3 || "Minimum length is 3 Chara"],
    };
  },
  methods: {
    async submit() {
      this.dialog = false;
      try {
        const project = await addDoc(collection(db, "projects"), {
          title: this.title,
          content: this.content,
          due: this.due,
          person: this.person,
          status: "ongoing",
        });

        console.log("Document written with ID: ", project.id);
        this.$emit("projectAdded");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>
