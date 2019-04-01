<template>
  <div
    class="py-3"
  >
    <v-btn
      v-if="!error"
      outline
      color="primary"
    >
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>
    <v-btn
      v-else
      outline
      color="primary"
    >
      <v-icon>
        mdi-refresh
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'error',
      'noData',
    ]),
  },
};
</script>
