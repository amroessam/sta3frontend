<template>
  <chat-container :currentTeam="currentTeam"/>
</template>

<script>
import chatContainer from '@/components/ChatContainer'
export default {
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