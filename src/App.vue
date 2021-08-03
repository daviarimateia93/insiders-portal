<template>
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
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon>{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title class="mx-2">{{item.text}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <template v-slot:append>
            <div class="pa-2">
              <v-btn link color=#000 class="white--text pt-0" block>Logout</v-btn>
            </div>
          </template>
      </v-navigation-drawer>
    </v-card>
    <v-app-bar app color=#CDDC39>
      <v-app-bar-nav-icon @click="drawer = !drawer" color=#F0F4C3></v-app-bar-nav-icon>
      <v-toolbar-title><span class="font-weight-bold ma-2" ><span class="font-weight-black">In</span>siders <span class="font-weight-medium">Network</span></span></v-toolbar-title>
    </v-app-bar>
    <v-main>
        <v-row
          v-touch="{
            left: () => swipe('Left'),
            right: () => swipe('Right'),
            up: () => swipe('Up'),
            down: () => swipe('Down')
          }"
          align="center"
          class="grey lighten-2"
          justify="center"
          style="height: 500px"
        >
          <v-subheader>Swipe Direction</v-subheader>
          {{ swipeDirection }}
        </v-row>
        <router-view></router-view>
    </v-main>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        DISCLAIMER: As informações disponibilizadas na COMUNIDADE são meramente opiniões do USUÁRIO na data em que foram expressas e não declarações de fatos ou recomendações para comprar, reter ou vender quaisquer títulos ou valores mobiliários, ou ainda, qualquer recomendação de investimento. A participação de USUÁRIO na COMUNIDADE não representa qualquer vínculo com a ADMINISTRADORA.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Insiders Network</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>


<script>
export default {
  name: "App",
  data: () => ({ 
    drawer: null,

    selectedItem: 0,

    items: [
      { text: 'Perfil', icon: 'mdi-folder' },
      { text: 'Ideas', icon: 'mdi-account-multiple' },
      { text: 'Channels', icon: 'mdi-star' },
      { text: 'About', icon: 'mdi-star'},
      { text: 'Settings and Privacy', icon: 'mdi-star' },
    
    ],

    swipeDirection: 'None',

  }),

    methods: {
      swipe (direction) {
        this.swipeDirection = direction
      },
    }

};
</script>