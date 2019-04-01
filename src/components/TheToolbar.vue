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
        <router-link
          id="title"
          to="/"
          class="white--text"
        >
          memo
        </router-link>
      </v-toolbar-title>
      <v-spacer />
      <TheToolbarSearch />
      <v-toolbar-items>
        <v-btn
          icon
        >
          <v-icon>
            mdi-tag-multiple
          </v-icon>
        </v-btn>
        <v-btn
          icon
        >
          <v-icon>
            mdi-plus
          </v-icon>
        </v-btn>
        <v-btn
          icon
        >
          <v-icon>
            mdi-settings
          </v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import TheToolbarSearch from '@/components/TheToolbarSearch.vue';

export default {
  components: {
    TheToolbarSearch,
  },
};
</script>

<style lang="stylus" scoped>
#title
  text-decoration: none
</style>

