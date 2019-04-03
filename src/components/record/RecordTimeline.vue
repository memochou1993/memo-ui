<template>
  <div>
    <v-timeline
      dense
      align-top
    >
      <v-timeline-item
        v-for="(item, index) in items"
        :key="index"
        color="info lighten-2"
        fill-dot
      >
        <RecordCard
          :item="item"
        />
      </v-timeline-item>
      <v-timeline-item
        fill-dot
        color="info lighten-2"
        class="mb-5"
      />
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
};
</script>
