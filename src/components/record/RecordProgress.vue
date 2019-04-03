<template>
  <div>
    <v-timeline
      dense
      align-top
    >
      <v-timeline-item
        :color="`${color} lighten-2`"
        fill-dot
      >
        <template
          v-slot:icon
        >
          <v-icon
            dark
          >
            mdi-dots-horizontal
          </v-icon>
        </template>
        <v-card
          :color="`${color} lighten-2`"
          dark
          class="text-xs-center"
        >
          <v-card-title
            class="title"
          >
            {{ title }}
          </v-card-title>
          <v-card-text
            class="white text--primary py-5"
          >
            <div
              v-if="!error && noData"
            >
              no data
            </div>
            <div
              v-else
            >
              <v-progress-circular
                :size="60"
                :width="4"
                :color="`${color} lighten-2`"
                :indeterminate="loading"
              />
            </div>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'loading',
      'error',
      'noData',
    ]),
    color() {
      if (this.error) {
        return 'error';
      }
      if (this.noData) {
        return 'warning';
      }
      return 'success';
    },
    title() {
      if (this.error) {
        return this.error.message;
      }
      if (this.noData) {
        return 'No Data Found';
      }
      return 'Loading...';
    },
  },
};
</script>
