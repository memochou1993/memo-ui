<template>
  <div>
    <v-toolbar
      app
      dark
      color="primary"
    >
      <v-toolbar-title
        class="headline"
      >
        memo
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items
        class="hidden-sm-and-down"
      >
        <v-btn
          v-for="(link, index) in links"
          :key="index"
          :to="link.location"
          flat
          exact
          class="title font-weight-light"
        >
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: 'Home',
          location: {
            name: 'home',
          },
        },
        {
          title: 'Gallery',
          location: {
            name: 'gallery',
          },
        },
      ],
    };
  },
};
</script>
