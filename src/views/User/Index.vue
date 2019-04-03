<template>
  <div>
    <RecordTimeline
      v-if="show"
      :items="records"
    />
    <RecordProgress
      v-else
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import RecordTimeline from '@/components/record/RecordTimeline.vue';
import RecordProgress from '@/components/record/RecordProgress.vue';

export default {
  components: {
    RecordTimeline,
    RecordProgress,
  },
  data() {
    return {
      records: [],
    };
  },
  computed: {
    ...mapState([
      'loading',
      'error',
      'noData',
      'refresh',
      'query',
    ]),
    show() {
      return !this.loading && !this.error && !this.noData;
    },
  },
  watch: {
    query() {
      this.fetchRecords();
    },
    refresh(value) {
      if (value) {
        this.fetchRecords();
      }
    },
  },
  created() {
    this.fetchRecords();
  },
  methods: {
    fetchRecords() {
      this.$store.dispatch('record/fetchRecords', {
        url: '/users/me/records',
        params: {
          with: 'tags',
          paginate: 50,
          q: this.query,
        },
      })
        .then(({ data }) => {
          this.records = data;
        });
    },
  },
};
</script>
