<template>
  <v-card>
    <v-card-title> Previsão de parada </v-card-title>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Digite a parada"
        single-line
        hide-details
      ></v-text-field>
      <v-btn
        @click="procurar"
        color="blue lighten 1"
        style="color: white"
        class="mx-10 mt-1 mt-md-0"
        >procurar</v-btn
      >
    </v-card-title>
    <v-list-item-content class="mx-5" v-if="dado && dado.p">
      <div class="overline mb-4">Codigo {{ dado.p.cp }}</div>
      <div v-for="(item, index) in dado.p.l" :key="index">
        <v-list-item-title class="headline mb-1">
          {{ item.c }} Linha {{ item.cl }}
        </v-list-item-title>
        <v-list-item-subtitle>
          Origem {{ item.lt1 }} Destino {{ item.lt0 }}
        </v-list-item-subtitle>
        <v-data-table
          :headers="[
            { text: 'veiculo', value: 'p' },
            { text: 'Horario previsto de chegada', value: 't' },
          ]"
          :items="item.vs"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </div>
    </v-list-item-content>
    <v-list-item-content v-else-if="load">
      <v-skeleton-loader
        type="card-heading, list-item-three-line, list-item-three-line"
      ></v-skeleton-loader>
    </v-list-item-content>
    <v-list-item-content class="mx-5" v-else-if="erro">
      <v-list-item-title class="headline mb-1">
        Erro ao buscar parada
      </v-list-item-title>
    </v-list-item-content>
  </v-card>
</template>

<script>
import { getPrevisao } from "@/services/api/previsao";

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
      dado: null,
      load: false,
      erro: false,
    };
  },
  methods: {
    procurar() {
      if (this.search == "") return;

      this.erro = false;
      this.load = true;
      getPrevisao(this.search)
        .then((res) => {
          this.dado = res.data;
          this.load = false;
          if (!this.dado.p) this.erro = true;
        })
        .catch((err) => {
          console.log(err);
          this.$root.$emit("error", "Erro em previsão");
          this.dado = null;
          this.load = false;
          this.erro = true;
        });
    },
  },
};
</script>

<style>
</style>