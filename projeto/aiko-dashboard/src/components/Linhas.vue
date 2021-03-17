<template>
  <v-card>
    <v-card-title>Linhas</v-card-title>
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
      :items="linhas"
      :items-per-page="5"
      class="elevation-1"
      :loading="linhas.length == 0"
      loading-text="Carregando linhas. Por favor aguarde"
    ></v-data-table>
  </v-card>
</template>

<script>
import { getPosCarros } from "@/services/api/posVeiculos";

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
      linhas: [],
      headers: [
        {
          text: "Identificador de linha",
          align: "start",
          sortable: true,
          value: "cl",
        },
        { text: "Letreiro", value: "c" },
        {
          text: "Sentido",
          value: "sl",
        },
      ],
    };
  },
  methods: {
    async posicoes() {
      let linhasRaw;
      await getPosCarros()
        .then((res) => {
          linhasRaw = res.data.l;
        })
        .catch((err) => {
          console.log(err);
          this.$root.$emit("error", "Erro em linhas");
          getPosCarros();
        });
      this.linhas = linhasRaw;
    },
  },
  mounted() {
    this.posicoes();
  },
  watch: {
    refresh() {
      this.posicoes();
    },
  },
};
</script>

<style>
</style>