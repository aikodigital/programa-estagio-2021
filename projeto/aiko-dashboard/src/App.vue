<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title
        >Dados de transporte público da cidade de São Paulo
      </v-toolbar-title>
    </v-app-bar>

    <v-main class="mt-8">
      <v-container>
        <v-row>
          <v-col cols="12" lg="6">
            <MapaCarros class="mx-auto my-2" />
          </v-col>
          <v-col cols="12" lg="6">
            <Paradas class="mx-auto my-2" />
          </v-col>
          <v-col cols="12" lg="6">
            <Linhas :refresh="refresh" class="my-2" />
          </v-col>
          <v-col cols="12" lg="6">
            <Corredores :refresh="refresh" class="my-2" />
          </v-col>
          <v-col cols="12" lg="6">
            <Previsao class="my-2" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-snackbar v-model="snackbar" :timeout="2000">
      {{ errorText }}
    </v-snackbar>
  </v-app>
</template>

<script>
import MapaCarros from "./components/MapaCarros";
import Linhas from "./components/Linhas";
import Paradas from "./components/Paradas";
import Previsao from "./components/Previsao";
import Corredores from "./components/Corredores";

import { auth } from "@/services/api/Auth";
import GoogleMapsApiLoader from "google-maps-api-loader";
import { getPosCarros } from "@/services/api/posVeiculos";
import { getParadas } from "@/services/api/paradas";

export default {
  name: "App",

  components: {
    MapaCarros,
    Linhas,
    Paradas,
    Previsao,
    Corredores,
  },
  data() {
    return {
      google: null,
      mapCarros: null,
      mapParadas: null,
      posicoes: [],
      errorText: "",
      snackbar: false,
      refresh: false,
    };
  },
  methods: {
    initializeMapCarros() {
      const mapContainer = document.getElementById("map");
      this.mapCarros = new this.google.maps.Map(mapContainer, {
        center: { lat: -23.5489, lng: -46.6388 },
        zoom: 15,
      });
      getPosCarros()
        .then((res) => {
          this.posicoes = res.data.l;
          this.posicoes.forEach((posicao) => {
            posicao.vs.forEach((cord) => {
              new this.google.maps.Marker({
                position: { lat: cord.py, lng: cord.px },
                map: this.mapCarros,
              });
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    initializeMapParadas() {
      const mapContainer = document.getElementById("map2");
      this.mapParadas = new this.google.maps.Map(mapContainer, {
        center: { lat: -23.5489, lng: -46.6388 },
        zoom: 13,
      });
      getParadas("")
        .then((res) => {
          let paradas = res.data;
          paradas.forEach((posicao) => {
            new this.google.maps.Marker({
              position: { lat: posicao.py, lng: posicao.px },
              map: this.mapParadas,
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async refreshItens() {
      await auth().catch((err) => {
        console.log(err);
      });
      this.initializeMapCarros();
      this.initializeMapParadas();
      this.refresh = !this.refresh;
      this.$root.$emit("error", "Recarregando dados");
    },
  },
  async created() {
    await auth().catch((err) => {
      console.log(err);
    });
  },
  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: "AIzaSyAqqIRSht5vfGyJeLWz9eIPtQ7mwnDQQxI",
    });
    this.google = googleMapApi;
    this.initializeMapCarros();
    this.initializeMapParadas();
    this.$root.$on("error", (message) => {
      this.errorText = message;
      this.snackbar = true;
    });
    setTimeout(() => {
      setInterval(() => {
        this.refreshItens();
      }, 90000);
    }, 90000);
  },
};
</script>
