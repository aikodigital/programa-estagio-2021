<template>
  <v-card>
    <v-card-title>Corredores</v-card-title>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Procurar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      locale="pt-BR"
      :search="search"
      :headers="headers"
      :items="corredores"
      :items-per-page="5"
      class="elevation-1"
      :loading="corredores.length == 0"
      loading-text="Carregando corredores. Por favor aguarde"
    ></v-data-table>
  </v-card>
</template>

<script>
import { getCorredores } from "@/services/api/corredores";

export default {
  props: {
    refresh: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      search: "",
      corredores: [],
      headers: [
        {
          text: "Identificador do corredor",
          align: "start",
          sortable: true,
          value: "cc",
        },
        { text: "Nome", sortable: true, value: "nc" },
      ],
    };
  },
  methods: {
    async dados() {
      await getCorredores()
        .then((res) => {
          this.corredores = res.data;
        })
        .catch((err) => {
          console.log(err);
          this.$root.$emit("error", "Erro em corredores");
          getCorredores();
        });
    },
  },
  mounted() {
    this.dados();
  },
  watch: {
    refresh() {
      this.dados();
    },
  },
};
</script>

<style>
</style>