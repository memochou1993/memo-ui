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
            class="white text--primary"
          >
            <v-progress-circular
              :size="60"
              :width="4"
              :color="color"
              indeterminate
              class="ma-5"
            />
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Loading...',
      color: 'orange lighten-2',
    };
  },
};
</script>
