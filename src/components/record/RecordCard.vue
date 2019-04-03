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
          <component
            :is="setComponent(item.type.name)"
            :item="item"
          />
        </div>
        <div>
          <AppChip
            :items="item.tags"
            color="secondary"
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
import TypeText from '@/components/record/types/TypeText.vue';
import AppChip from '@/components/AppChip.vue';

export default {
  components: {
    TypeText,
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
  methods: {
    setComponent(type) {
      // return `Type${type.charAt(0).toUpperCase()}${type.slice(1)}`;
      return 'TypeText';
    },
  },
};
</script>
