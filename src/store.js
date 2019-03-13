import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Movie App',
    latestMovies: [],
    searchMovieResults:[],
    isLoading: false,
    movieDetail: {},
    searchFail : false
  },
  getters: {
    isLoading: state => {
      return state.isLoading
    },
    latestMovies: state => {
      return state.latestMovies
    },
    movieDetail: state => {
      return state.movieDetail
    },
    searchMovieResults: state=>{
      return state.searchMovieResults
    },
    searchFail : state =>{
      return state.searchFail
    }
  },
  mutations: {
    latestMovies(state, movies) {
      state.latestMovies = movies;
    },
    loading(state, bool) {
      state.isLoading = bool;
    },
    clearMovies(state) {
      state.latestMovies = [];
    },
    movieDetails(state, movieDetails) {
      state.movieDetail = movieDetails
    },
    clearMovieDetails(state) {
      state.movieDetail = {}
    },
    //Search mutations
    searchMovies(state, searchResults)
    {
      state.searchMovieResults = searchResults
    },
    clearSearchResults(state)
    {
      state.searchMovieResults=[]
    },
    searchFail(state, bool) {
      state.searchFail = bool;
    }
  },
  actions: {
    searchLatestMovies(context) {
      context.commit('loading', true);
      context.commit('clearMovies');
      Axios.get(`http://www.omdbapi.com/?s=Batman&apikey=xxxx&page=1`)
        .then(res => {
          console.log(res.data);
          console.log("...............................")
          context.commit('latestMovies', res.data.Search);
          context.commit('loading', false);
        })
        .catch(error => {
          console.log(error);
          context.commit('loading', false);
        });
    },
    getMovieDetails(context, movieId) {
      context.commit('loading', true);
      context.commit('clearMovieDetails');
      Axios.get(`http://www.omdbapi.com/?i=`+movieId+`&apikey=xxxx&page=1`)
        .then(res => {
          console.log(res.data);
          console.log("....................`...........")
          context.commit('movieDetails', res.data);
          context.commit('loading', false);
        })
        .catch(error => {
          console.log(error);
          context.commit('loading', false);
        });
    },
    searchMovies(context, searchString) {
      context.commit('searchFail',false);
      context.commit('loading', true);
      context.commit('clearSearchResults');
      Axios.get(`http://www.omdbapi.com/?s=`+searchString+`&apikey=xxxx`)
        .then(res => {
          console.log(res.data);
          console.log("...............................")
          context.commit('searchMovies', res.data.Search);
          context.commit('loading', false);
        })
        .catch(error => {
          console.log(error);
          context.commit('searchFail',true);
          context.commit('loading', false);
        });
    }
  }
})
