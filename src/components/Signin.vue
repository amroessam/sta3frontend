<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex>
        <v-alert type="error" dismissible v-model="alert">
          {{error}} <a href="/signup">Click here to sign up</a>
        </v-alert>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Sign In</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form @submit.prevent="userSignIn">
          <v-layout column>
            <v-flex>
              <v-text-field
                name="username"
                label="Username"
                id="username"
                type="text"
                v-model="username"
                required></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                v-model="password"
                required></v-text-field>
            </v-flex>
            <v-flex class="text-xs-center" mt-5>
              <v-btn color="primary" type="submit">Sign In</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: "",
      password: "",
      alert: false,
      message:null,
    }
  },
  mounted: function(){
    this.$store.dispatch('checkAuth')
  },
  methods: {
    userSignIn() {
      this.$store.dispatch("userSignIn", {
        username: this.username,
        password: this.password
      });
    }
  },
  computed: {
    error() {
      return this.$store.state.error;
    },
    loading() {
      return this.$store.state.loading;
    }
  },
  watch: {
    error(value) {
      if (value) this.alert = true;
    },
    alert(value) {
      if (!value) this.$store.commit("setError", null);
    }
  }
};
</script>