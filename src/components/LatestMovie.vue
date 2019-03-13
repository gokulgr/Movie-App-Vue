<template>
  <v-container v-if="isLoading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4 v-for="(item, index) in latestMovies" :key="index" mb-2>
        <v-card>
          <v-img :src="item.Poster" aspect-ratio="1"></v-img>
          <v-card-title primary-title>
            <div>
              <h2>{{item.Title}}</h2>
              <div>Year: {{item.Year}}</div>
              <div>Type: {{item.Type}}</div>
              <div>IMDB-id: {{item.imdbID}}</div>
            </div>
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn flat color="green" @click="getMovieDetails(item.imdbID)">View</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "LatestMovie",
  data: function() {
    return {};
  },
  components: {},
  computed: {
    ...mapGetters(["isLoading", "latestMovies"])
  },
  mounted() {
    this.findLatestMovies();
  },
  methods: {
    ...mapMutations(["ADD_LINK"]),
    ...mapActions(["searchLatestMovies", "getMovieDetails"]),
    findLatestMovies: function() {
      this.searchLatestMovies();
    },
    getMovieDetails: function(movieId) {
      this.$router.push("/movie/" + movieId);
    }
  }
};
</script>