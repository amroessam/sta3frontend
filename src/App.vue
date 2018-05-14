<templFizxate>
  <v-app dark>
    <v-navigation-drawer v-model="sidebar" app>
      <v-list>
        <v-list-tile
        v-for="item in menuItems"
        :key="item.title"
        :to="item.path">
        <v-list-tile-action>
          <v-icon>{{item.icon}}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content >{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app>
      <span class="hidden-sm-and-up">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
        </v-toolbar-side-icon>
      </span>
      <v-toolbar-title v-if="this.$store.state.user">
        <router-link to="/home" tag="span" style="cursor:pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-toolbar-title v-else>
        <router-link to="/" tag="span" style="cursor:pointer">
          {{ appTitle }}
        </router-link>
      </v-toolbar-title>
      <v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn 
            flat
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path">
            <v-icon left dark>{{item.icon}}</v-icon>
            {{item.title}}  
          </v-btn>
        </v-toolbar-items>
      </v-spacer>
    </v-toolbar>
    
    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sidebar: false
      }
    },
    computed:{
      appTitle(){
        return 'STA3'
      },
      menuItems(){
        let menuItems
        if(!this.$store.state.user) {
          menuItems = [
          {title: 'Home', path: '/', icon: 'home'},
          {title: 'Sign Up', path: '/signup', icon: 'face'},
          {title: 'Sign In', path: '/signin', icon: 'lock_open'}
        ]}
        else{
          menuItems = [
            {title: 'Home', path: '/home', icon: 'home'},
            {title: 'Log Out', path: '/logout', icon: 'exit_to_app'}
          ]
        }
        return menuItems
      }
    },
    methods: {
      logoutUser(){
        console.log('lol')
      }
    },
    mounted: function(){
      this.$store.dispatch('checkAuth')
    }
  }
</script>