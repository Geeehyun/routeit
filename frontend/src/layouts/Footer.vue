<template>
  <v-footer>
    <v-layout class="overflow-visible" style="height: 56px;">
      <v-bottom-navigation
          v-model="value"
          color="teal"
          grow
      >
        <v-btn>
          <v-icon>mdi-home</v-icon>
          Home
        </v-btn>

        <v-btn>
          <v-icon>mdi-heart</v-icon>

          Favorites
        </v-btn>

        <v-btn>
          <v-icon>mdi-map</v-icon>

          Nearby
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </v-footer>
</template>
<script setup>
</script>