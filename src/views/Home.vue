<template>
  <div>
    <AppTimeline
      :items="records"
    />
  </div>
</template>

<script>
import AppTimeline from '@/components/AppTimeline.vue';

export default {
  components: {
    AppTimeline,
  },
  data() {
    return {
      records: [],
    };
  },
  created() {
    this.fetchRecords();
  },
  methods: {
    fetchRecords() {
      this.$store.dispatch('fetchRecords', {
        url: '/users/me/records',
        params: {
          relationships: 'type,tags',
          paginate: 50,
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
