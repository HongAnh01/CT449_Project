<template>
  <v-app id="inspire">
    <!---------------------------- navigation Start ------------------------------------->
    <v-navigation-drawer v-if="isLoggedIn" v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title><v-img src="./../public/Blog Watch.png" class="fix-logo"></v-img></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- gạch xuống hàng -->
      <v-divider inset></v-divider>

      <v-list rounded>
        <v-list-item-group color="teal">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>

            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>
          <v-list-item @click="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon> <!-- Thay icon bằng icon logout mong muốn -->
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>
    <!---------------------------- navigation End --------------------------------------->
    <v-app-bar app rounded outlined color="teal lighten-4">

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <h3>Watch Blog</h3>
      </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>


    <v-footer dark padless class="mt-15">
      <v-card class="flex" flat tile>
        <v-card-title class="teal lighten-4">
          <strong class="subheading">Get connected with us on social networks!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in iconFooter" :key="icon" class="mx-4" dark icon @click="openSocialMedia(icon.url)">
            <v-icon size="24px">
              {{ icon.sticker }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Blog Watch</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { EventBus } from './event-bus.js';
export default {
  data: () => ({
    drawer: null,
    isLoggedIn: false,
    items: [
      { title: 'My Blog', icon: 'mdi-home', link: '/home' },
      { title: 'Add Post', icon: 'mdi-notebook', link: '/add-post' },
    ],
    iconFooter: [
      { sticker: 'mdi-facebook', url: 'https://www.facebook.com' },
      { sticker: 'mdi-instagram', url: 'https://www.instagram.com' },
      { sticker: 'mdi-twitter', url: 'https://twitter.com' },
    ],
  }),
  methods: {
    openSocialMedia(url) {
      window.open(url, '_blank');
    },
    logout() {
      this.isLoggedIn = false;
      EventBus.$emit('logged-out');

      this.$router.push('/');
    },
  },
  created() {
    EventBus.$on('loggedIn', ({ isLoggedIn }) => {
      this.isLoggedIn = isLoggedIn;
    });
  },
}
</script>

<style scoped>
.fix-logo {
  height: 70px
}
</style>
