<template>
  <div>
    <v-autocomplete
      v-model="select"
      :items="items"
      :loading="loading"
      :no-data-text="noDataText"
      :search-input.sync="search"
      flat
      cache-items
      hide-details
      hide-no-data
      solo-inverted
      class="mx-3"
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: null,
      items: [],
      loading: false,
      noDataText: '',
      search: null,
    };
  },
};
</script>
