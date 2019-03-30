<template>
  <div>
    <v-card
      :color="color"
      dark
    >
      <v-card-title
        class="title"
      >
        {{ item.title }}
      </v-card-title>
      <v-card-text
        class="white text--primary"
      >
        <div>
          <p>
            {{ item.content }}
          </p>
        </div>
        <div>
          <AppChip
            :items="item.tags"
            :color="secondary"
          />
        </div>
        <div
          class="text-xs-right"
        >
          <span
            class="text--secondary"
          >
            {{ item.date }}
          </span>
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
    color: {
      type: String,
      required: true,
    },
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
