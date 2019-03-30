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
      <AppAutocomplete />
      <v-toolbar-items>
        <v-btn
          icon
        >
          <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-btn
          icon
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn
          icon
        >
          <v-icon>mdi-settings</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import AppAutocomplete from '@/components/AppAutocomplete.vue';

export default {
  components: {
    AppAutocomplete,
  },
};
</script>
