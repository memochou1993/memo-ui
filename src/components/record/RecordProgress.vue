<template>
  <div>
    <v-timeline
      dense
      align-top
    >
      <v-timeline-item
        :color="color"
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
          :color="color"
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
            <RecordNoData
              v-if="!error && noData"
            />
            <v-progress-circular
              v-else
              :size="60"
              :width="4"
              :color="`${color} lighten-2`"
              :indeterminate="loading"
            />
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import RecordNoData from '@/components/record/RecordNoData.vue';

export default {
  components: {
    RecordNoData,
  },
  computed: {
    ...mapState([
      'loading',
      'error',
      'noData',
    ]),
    color() {
      if (this.error) {
        return 'error lighten-2';
      }
      if (this.noData) {
        return 'warning lighten-2';
      }
      return 'success lighten-2';
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
