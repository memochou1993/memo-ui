<template>
  <div>
    <v-timeline
      dense
      align-top
    >
      <v-timeline-item
        v-for="(item, index) in items"
        :key="index"
        :color="colorize(item.type.name)"
        fill-dot
      >
        <template
          v-slot:icon
        >
          <v-icon
            dark
          >
            {{ iconize(item.type.name) }}
          </v-icon>
        </template>
        <v-card
          :color="colorize(item.type.name)"
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
            <p>
              {{ item.content }}
            </p>
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
      </v-timeline-item>
      <v-timeline-item
        large
        color="primary"
        class="mb-5"
      />
    </v-timeline>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      q: '',
    };
  },
  computed: {
    ...mapState([
      'icons',
      'colors',
    ]),
  },
  methods: {
    iconize(name) {
      const { type } = this.icons;
      return type[name];
    },
    colorize(name) {
      const { type } = this.colors;
      return type[name];
    },
  },
};
</script>
