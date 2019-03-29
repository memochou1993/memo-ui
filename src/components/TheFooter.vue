<template>
  <div>
    <v-footer
      height="auto"
    >
      <v-card
        class="flex primary lighten-1 white--text text-xs-center"
      >
        <v-card-text>
          <v-btn
            v-for="(icon, index) in icons"
            :key="index"
            class="white--text mx-3"
            icon
          >
            <v-icon>
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text
          class="pt-0"
        >
          Footer
        </v-card-text>

        <v-divider />

        <v-card-text>
          &copy; 2019
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-youtube',
      'fab fa-github',
    ],
  }),
};
</script>
