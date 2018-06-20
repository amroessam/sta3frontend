<template>
<<<<<<< HEAD
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
import Chat from './Chat'
=======
  <chat-container :currentTeam="currentTeam"/>
</template>

<script>
import chatContainer from '@/components/ChatContainer'
>>>>>>> 7e03a9463676cbe43a6543eba7758abb0ddcd0f3
export default {
  components:{
    AppChat: Chat
  },
  data(){
    return {
      message:null,
      currentTeam: 'Test Team Name For The Win',
      userTeams: ['a','b','c']
    }
  },
  components:{
    'chat-container' : chatContainer
  },
  computed:{
    user(){
      return this.$store.state.user
    }

  }
}
</script>