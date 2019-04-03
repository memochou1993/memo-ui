<template>
  <div>
    <v-card
      dark
      color="info lighten-2"
    >
      <v-card-title
        class="title"
      >
        {{ item.title }}
      </v-card-title>
      <v-card-text
        class="white text--primary"
      >
        <p>
          {{ item.content }}
        </p>
        <AppChip
          :items="item.tags"
          color="secondary"
        />
        <div
          class="text-xs-right text--secondary"
        >
          {{ item.date }}
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import AppChip from '@/components/AppChip.vue';

export default {
  components: {
    AppChip,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
