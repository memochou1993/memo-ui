<template>
  <div>
    <v-toolbar
      app
      dark
      clipped-left
      color="primary"
    >
      <v-toolbar-title
        class="headline"
      >
        ApiHub
      </v-toolbar-title>
      <v-spacer />
      <v-autocomplete
        v-model="select"
        :items="items"
        :loading="loading"
        :search-input.sync="search"
        flat
        cache-items
        hide-details
        hide-no-data
        no-data-text=""
        solo-inverted
        class="mx-3"
      />
      <v-toolbar-items>
        <v-btn
          icon
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn
          icon
        >
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: '',
      items: [],
      loading: false,
      search: '',
    };
  },
};
</script>
