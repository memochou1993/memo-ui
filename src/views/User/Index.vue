<template>
  <div>
    <AppTimeline
      v-if="!loading"
      :items="records"
    />
    <AppProgress
      v-else
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppTimeline from '@/components/AppTimeline.vue';
import AppProgress from '@/components/AppProgress.vue';

export default {
  components: {
    AppTimeline,
    AppProgress,
  },
  data() {
    return {
      records: [],
    };
  },
  computed: {
    ...mapState([
      'loading',
      'query',
    ]),
  },
  watch: {
    query() {
      this.fetchRecords();
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
          with: 'type,tags',
          paginate: 50,
          q: this.query,
        },
      })
        .then(({ data }) => {
          this.records = data;
        })
        .catch(() => {
          this.$router.replace({
            name: 404,
          });
        });
    },
  },
};
</script>
