<template>
  <v-container fluid>
    <v-layout row wrap>
      <!--<v-flex xs12 class="text-xs-center" mt-5>
        <h1>Home page</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <p>This is a user's home page</p>
      </v-flex> -->
      <v-flex xs12 mt-5>
        <app-chat></app-chat>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import Chat from './Chat'
import chatContainer from './Chat'
export default {
  data(){
    return {
    }
  },
  components:{
    AppChat : chatContainer
  },
  mounted: function(){
    this.$store.dispatch('checkAuth')
    this.$store.dispatch('loadTeams')
  }
}
</script>