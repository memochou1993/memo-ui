<template>
  <div>
    <v-timeline
      dense
      align-top
    >
      <v-timeline-item
        v-for="(item, index) in items"
        :key="index"
        :color="`${colorize(item.type.name)} lighten-2`"
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
        <RecordCard
          :item="item"
          :color="`${colorize(item.type.name)} lighten-2`"
        />
      </v-timeline-item>
      <v-timeline-item
        fill-dot
        class="mb-5"
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
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import RecordCard from '@/components/record/RecordCard.vue';

export default {
  components: {
    RecordCard,
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
