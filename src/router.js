import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MovieDetail from './views/MovieDetail.vue'
import SearchMovie from './views/SearchMovieResults.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      props: true,
      component: MovieDetail
    },
    {
      path: '/search/:name',
      name: 'SearchMovie',
      props: true,
      component: SearchMovie
    }
  ]
})
