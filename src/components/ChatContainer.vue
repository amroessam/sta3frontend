<template>
  <v-container fluid>
    <v-navigation-drawer v-model="teamBar" app>
      <v-list>
        <v-list-tile>
        <v-list-tile-content >Next Test Team</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-layout>
        <v-toolbar dark color="primary">
        <span>
        <v-toolbar-side-icon @click="teamBar = !teamBar">
        </v-toolbar-side-icon>
      </span>
            <v-toolbar-title class="white--text">{{currentTeam}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
    </v-layout>
    <v-layout>
        <v-flex>
            <v-list two-line style="overflow-y: scroll; height: 80vh;" >
            </v-list>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
export default {
  data(){
    return{
      teamBar:false
    }
  },
  props:['currentTeam','userTeams']
}
</script>