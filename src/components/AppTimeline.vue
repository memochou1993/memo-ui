<template>
  <div>
    <v-timeline align-top>
      <v-timeline-item
        v-for="(item, index) in items"
        :key="index"
        :color="colorize('type')(item.type.name)"
        :icon="item.icon"
        fill-dot
      >
        <v-card
          :color="colorize('type')(item.type.name)"
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
            <v-btn
              :color="colorize('type')(item.type.name)"
              class="mx-0"
              outline
            >
              Button
            </v-btn>
          </v-card-text>
        </v-card>
      </v-timeline-item>
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
      //
    };
  },
  computed: {
    ...mapState([
      'colors',
    ]),
  },
  methods: {
    colorize(type) {
      const colors = this.colors;
      return function(name) {
        return colors[type][name];
      }
    },
  },
};
</script>
