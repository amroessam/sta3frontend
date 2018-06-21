<template>
    <div>
        <v-navigation-drawer v-model="sidebar" app>
            <v-list>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>face</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>Current Team</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>face</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>Other Teams</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar dark color="primary">
            <v-toolbar-side-icon @click="sidebar = !sidebar"></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">Current Team Name</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn flat  @click.stop="newTeamDialog = true">
                Create New Team
            </v-btn>
            <v-btn flat>
                Invite Member
            </v-btn>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
        <div class="chat-container">
          <!-- <chat-message v-for="message in messages" :key="message.messageId" :class="{'own':message.isOwn}"> -->
          <chat-message>
            <div slot="username">{user}</div>
            <div slot="message">{message.message}</div>
          </chat-message>
        </div>
        <div class="typer">
          <input type="text" placeholder="Type here..." v-model="newMessage">
      </div>
      <v-dialog v-model="newTeamDialog" max-width="500px">
        <v-card>
          <v-card-title>
            Create A New Team
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="Team Name"
              v-model="newTeamName"
            ></v-text-field>
            <v-text-field
              label="Team Description"
              v-model="newTeamDescription"
              multi-line
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" flat @click="createNewTeam" :loading="loading">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

</template>

<script>
import ChatMessage from './ChatMessage'
export default {
  components:{
    ChatMessage
  },
  data() {
    return {
      sidebar: false,
      newMessage: '',
      messages:[],
      currentTeam:'',
      newTeamDialog: false,
      newTeamName: '',
      newTeamDescription: ''
    }
  },
  methods:{
    createNewTeam(){
        this.$store.dispatch('createNewTeam', {
            newTeamName:this.newTeamName,
            newTeamDescription:this.newTeamDescription
        })
    }
  },
  computed:{
      loading(){
          return this.$store.state.loading
      }
  }
}
</script>

<style scoped>
        .typer{
            box-sizing: border-box;
            display: flex;
            align-items: center;
            bottom: 0;
            height: 4.9rem;
            width: 100%;
            background-color: #fff;
            box-shadow: 0 -5px 10px -5px rgba(0,0,0,.2);
        }
        .typer input[type=text]{
          position: absolute;
          left: 2.5rem;
          padding: 1rem;
          width: 80%;
          background-color: transparent;
          border: none;
          outline: none;
          font-size: 1.25rem;
          color:black;
        }
        .chat-container{
            box-sizing: border-box;
            height: calc(100vh - 20rem);
            overflow-y: auto;
            padding: 10px;
            background-color: #546A7B;
        }
        .message{
            align: left;
            margin-bottom: 3px;
        }
        .message.own{
            text-align: right;
        }
        .message.own .content{
            background-color: lightskyblue;
        }
        .chat-container .username{
            font-size: 18px;
            font-weight: bold;
        }
        .chat-container .content{
            padding: 8px;
            background-color: lightgreen;
            border-radius: 10px;
            display:inline-block;
            box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12);
            max-width: 50%;
            word-wrap: break-word;
            }
    </style>