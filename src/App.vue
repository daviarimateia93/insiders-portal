<template>
  <div id="app">
    <v-app id="inspire">
      <v-card class="mx-2" width="256" tile>
        <v-navigation-drawer v-model="drawer" App>
          <v-system-bar></v-system-bar>
            <v-list>
              <v-list-item>
                <v-list-item-avatar >
                    <v-avatar>
                      <v-img size="100" src="https://pbs.twimg.com/profile_images/1257083037537501185/HCcZl8Os_400x400.jpg"></v-img>
                    </v-avatar>
                </v-list-item-avatar>
              </v-list-item>
              
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title class="text-h6 font-weight-bold">Renan Soriano</v-list-item-title>
                  <v-list-item-subtitle>@renansor</v-list-item-subtitle>
                  <v-list-item-subtitle>100 Folllowing 50 Followers</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-icon>mdi-menu-down</v-icon>
                </v-list-item-action>
              </v-list-item>

            </v-list>
            <v-divider></v-divider>
            <v-list nav dense>
              <v-list-item-group v-model="selectedItem" color="primary">

                <v-list-item v-for="(menu, i) in menus" :key="i">
                  <v-list-item-icon>
                    <v-icon>{{menu.icon}}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title link class="mx-2"><v-btn v-bind:href="menu.url">{{menu.text}}</v-btn></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

              </v-list-item-group>
            </v-list>
            <template v-slot:append>
              <div class="pa-2">
                <v-btn id="menu-btn-logout" link block>Logout</v-btn>
              </div>
            </template>
        </v-navigation-drawer>
      </v-card>
      <v-app-bar app color=#CDDC39>
        <v-app-bar-nav-icon @click="drawer = !drawer" color=#F0F4C3></v-app-bar-nav-icon>
        <v-toolbar-title><span class="font-weight-bold ma-2" ><span class="font-weight-black">In</span>siders <span class="font-weight-medium">Network</span></span></v-toolbar-title>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>


<script>
export default {
  name: "App",

  el: '#app',

  data: () => ({ 
    drawer: null,

    selectedItem: 0,

    menus: [
      { text: 'Profile', icon: 'mdi-account-circle', url: '/profile' },
      { text: 'Ideas', icon: 'mdi-lightbulb-on', url: '/ideas' },
      { text: 'Channels', icon: 'mdi-chat', url: '/channels' },
      { text: 'About', icon: 'mdi-star', url: '/about'},
      { text: 'Settings', icon: 'mdi-cog', url: '/settings' },
    
    ],

      dropMenus: [
        { title: 'Editar' }
      ],

  }),

    methods: {
      swipe (direction) {
        this.swipeDirection = direction
      },
    }

};
</script>

<style>

h1 {
  color: #000;
  margin-top: 10px;
  margin-left: 10px;
}

#menu-btn-logout{
  color:#fff;
  background-color: #000;
}

</style>