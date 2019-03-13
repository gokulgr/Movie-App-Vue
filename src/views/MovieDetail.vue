<template>
  <v-container v-if="isLoading">
    <div class="text-xs-center">
      <v-progress-circular indeterminate :size="150" :width="8" color="green"></v-progress-circular>
    </div>
  </v-container>

  <v-container v-else>
    <v-layout wrap>
      <v-flex xs12 mr-1 ml-1>
        <v-card>
          <v-img :src="movieDetail.Poster" aspect-ratio="2"></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{movieDetail.Title}}-{{movieDetail.Year}}</h2>
              <p>{{ movieDetail.Plot}}</p>
              <h3>Actors:</h3>
              {{movieDetail.Actors}}
              <h4>Awards:</h4>
              {{movieDetail.Awards}}
              <p>Genre: {{movieDetail.Genre}}</p>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green" @click="$router.go(-1)">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "MovieDetail",
  props: ["id"],
  data: function() {
    return {};
  },
  components: {},
  computed: {
    ...mapGetters(["isLoading", "movieDetail"])
  },
  mounted() {
    console.log("Movie Id" + this.id);
    this.getMovieDetail(this.id);
  },
  methods: {
    ...mapActions(["getMovieDetails"]),

    getMovieDetail: function(movieId) {
      this.getMovieDetails(movieId);
    },
    back() {
      this.$router.push("/");
    }
  }
};
</script>