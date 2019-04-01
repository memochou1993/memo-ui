<template>
  <div>
    <v-autocomplete
      v-model="select"
      :items="items"
      :loading="loading"
      :no-data-text="noDataText"
      :search-input.sync="q"
      flat
      dense
      cache-items
      hide-details
      hide-no-data
      solo-inverted
      class="mx-3"
    />
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      records: [],
      select: null,
      loading: false,
      noDataText: '',
      q: null,
      titleLimit: 20,
      loadingColor: 'orange lighten-2',
    };
  },
  computed: {
    items() {
      return this.records
        .map((record) => {
          const reg = new RegExp(`\\w*${this.q}\\w*`, 'gi');
          const titles = record.title.match(reg);
          const title = titles ? titles[0] : '';
          const contents = record.content.match(reg);
          const content = contents ? contents[0] : '';
          return title || content || '';
        })
        .filter(word => word !== '');
    },
  },
  watch: {
    q() {
      this.search();
    },
  },
  methods: {
    search: _.debounce(function anonymous() {
      this.searchRecords();
    }, 500),
    searchRecords() {
      this.setLoading(this.loadingColor);
      this.$store.dispatch('record/searchRecords', {
        url: '/users/me/records/search',
        params: {
          with: 'type,tags',
          q: this.q,
        },
      })
        .then(({ data }) => {
          this.records = data;
        })
        .then(() => {
          setTimeout(() => {
            this.setLoading(false);
          }, 500);
        });
    },
    setLoading(loading) {
      this.loading = loading;
    },
  },
};
</script>
