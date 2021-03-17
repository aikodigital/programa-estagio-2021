<template>
  <v-card width="100%">
    <v-card-title><p class="text-h5 mb-0 text-center">Paradas</p></v-card-title>
    <v-row no-gutters justify="center">
      <div class="map2" id="map2"></div>
    </v-row>
  </v-card>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {},
  async mounted() {},
};
</script>

<style lang="scss" scoped>
.map2 {
  height: 439px;
  width: 100%;
}
</style>