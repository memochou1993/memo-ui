<template>
  <div>
    <v-autocomplete
      v-model="select"
      :items="items"
      :loading="loading"
      :no-data-text="noDataText"
      :search-input.sync="input"
      flat
      dense
      clearable
      hide-details
      hide-no-data
      solo-inverted
      class="mx-3"
      @keyup.enter="setQuery(input)"
    />
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      records: [],
      loading: false,
      noDataText: '',
      select: '',
      input: '',
      query: '',
      color: 'orange lighten-2',
    };
  },
  computed: {
    items() {
      if (!this.input) {
        return [];
      }
      return this.records
        .map((record) => {
          const reg = new RegExp(`\\w*${this.input}\\w*`, 'gi');
          const text = `${record.title} ${record.content}`;
          const word = text.match(reg);
          return word ? word[0] : '';
        })
        .filter(word => word.length > 0);
    },
  },
  watch: {
    select(value) {
      if (value) {
        this.setQuery(value);
      }
    },
    input(value) {
      if (value) {
        this.search();
      }
    },
    query(value) {
      this.$store.dispatch('setQuery', value);
    },
  },
  methods: {
    search: _.debounce(function anonymous() {
      this.searchRecords();
    }, 500),
    searchRecords() {
      this.setLoading(this.color);
      this.$store.dispatch('record/searchRecords', {
        url: '/users/me/records/search',
        params: {
          with: 'tags',
          q: this.query,
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
    setQuery(query) {
      this.query = query;
    },
  },
};
</script>
