<template>
  <div>
    <v-chip
      v-for="(tag, index) in items"
      :key="index"
      :color="color"
      small
      outline
    >
      {{ tag.name }}
    </v-chip>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
