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
        <CardText
          :item="item"
          :color="colorize(item.type.name)"
        />
      </v-timeline-item>
      <v-timeline-item
        color="primary"
        class="mb-5"
      />
    </v-timeline>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import CardText from '@/components/cards/CardText.vue';

export default {
  components: {
    CardText,
  },
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
    ...mapState('record', [
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
