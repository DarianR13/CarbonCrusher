<template>
    <v-container>
        <h1>Results</h1>
    <router-link to="/calculator">Try Again?</router-link>
    </v-container>
    <v-container>
      <!-- I'm not sure that we need these buttons other than delete since Submitting would both add and update your current score automattically-->
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-btn density="compact">Add</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn density="comfortable">Delete</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn density="default">Update</v-btn>
      </v-col>
    </v-row>
  </v-container>
    
   <footer class="bg-grey-lighten-1 footer">footer</footer>
</template>

<style>
.footer{
position: fixed;
  left: 0;
  bottom: 0;
  width: 100%
}
</style>

