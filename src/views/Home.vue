<template>
  <div class="home">  
  <LatestMovie/>  
  </div>
</template>

<script>
// @ is an alias to /src
import LatestMovie from '@/components/LatestMovie.vue'

export default {
  name: 'home',
  components: {
    LatestMovie
  }
}
</script>
