<template>
  <v-container v-if="isLoading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else-if="searchFail">
    <div class="text-xs-center">No movies found!</div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4 v-for="(item, index) in searchMovieResults" :key="index" mb-2>
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
  name: "SearchMovie",
  props: ["name"],
  data: function() {
    return {};
  },
  components: {},
  computed: {
    ...mapGetters(["searchMovieResults", "searchFail", "isLoading"])
  },
  mounted() {
    this.searchMovieByName(this.name);
  },
  watch: {
    name(value) {
      this.searchMovieByName(this.name);
    }
  },
  methods: {
    ...mapActions(["searchMovies"]),

    searchMovieByName: function(name) {
      console.log(" Name : " + name);
      this.searchMovies(name);
    },
    getMovieDetails: function(movieId) {
      this.$router.push("/movie/" + movieId);
    }
  }
};
</script>