<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal bordered class="bg-white text-dark">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <DialogPage />
        <q-space />

        <div class="hib">
          <q-tooltip>Enchers</q-tooltip>
          <q-avatar>
            <img src="~assets/about.jpg" />
          </q-avatar>
          <q-menu v-model="enchers" class="col col-sm col-md">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section> Participer au salon</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section
                  >Tout savoir sur la vente aux Enchers</q-item-section
                >
              </q-item>
            </q-list>
          </q-menu>
        </div>

        <div class="hib">
          <q-btn
            class="icon"
            round
            flat
            icon="shopping_cart"
            @click="open('right')"
          >
            <q-badge color="green" floating transparent> 1 </q-badge>

            <!-- PANNIER NOTIFICATIONS -->
            <q-dialog v-model="dialog" :position="position">
              <q-card style="width: 350px">
                <q-linear-progress :value="0.6" color="primary" />

                <q-card-section class="items-center no-wrap">
                  <div>
                    <div class="text-weight-bold">Mon Pannier</div>
                    <div class="text-grey">Voici toutes vos commandes</div>
                  </div>

                  <q-space />
                  <TablePanier />
                </q-card-section>
              </q-card>
            </q-dialog>

            <!--FIN  PANNIER NOTIFICATIONS -->
          </q-btn>
        </div>
        <!-- NOTIFICATIONS BAR-->
        <div>
          <q-btn dense round flat icon="notifications">
            <q-badge color="red" floating transparent> 4 </q-badge>
          </q-btn>
          <q-menu v-model="notifications">
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section
                  ><q-badge
                    floating
                    transparent
                    rounded
                    color="red"
                    label="news"
                  />
                  <p class="dash-ap">Vous avez 4 nouvelles notifications</p>
                </q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable v-close-popup>
                <q-item-section
                  >Tout savoir sur la vente aux Enchers</q-item-section
                >
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section
                  >Tout savoir sur la vente aux Enchers</q-item-section
                >
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section
                  >Tout savoir sur la vente aux Enchers</q-item-section
                >
              </q-item>
            </q-list>
          </q-menu>
        </div>
        <!-- FIN NOTIFICATIONS BAR-->
        <div>
          <!-- PARAMETRES DU COMPTE UTILISATEURS -->

          <q-btn-dropdown flat color="black" icon="settings" class="dash-app">
            <br />
            <div class="text-h6 text-center q-mb-md dash-ap">Blondy BWIRA</div>
            <div class="text-h6 text-center q-mb-md dash-ap">
              <q-avatar size="72px">
                <img id="profile" src="~assets/about.jpg" alt="profile" />
              </q-avatar>
            </div>
            <q-list>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <router-link to="/Para" class="dash">
                    <q-item-label
                      ><q-icon name="person" />Paramètre du compte</q-item-label
                    ></router-link
                  >
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <router-link to="/Premium" class="dash">
                    <q-item-label
                      ><q-icon name="workspace_premium" />Compte
                      Premium</q-item-label
                    ></router-link
                  >
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label class="dash"
                    ><q-icon name="attach_money" />Vos paiements
                    <q-badge rounded color="green" label="11"
                  /></q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label class="dash"
                    ><q-icon name="mail" />Centre de Messagerie</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="onItemClick">
                <q-item-section>
                  <q-item-label class="dash"
                    ><q-icon name="verified_user" />Connexion et
                    Securité</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-item clickable color="red">
                <q-item-section>
                  <q-item-label class="dash"
                    ><q-icon name="logout" color="red" /> Se
                    Déconnecter</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
      <!-- SIDE BAR CONTENTS-->
      <q-toolbar-title class="text-subtitle1 text-center">
        <div class="dash-ap">
          <div class="q-pa-xs">
            <q-icon name="dashboard" color="black" size="18px" />Tableau de bord
            <q-badge rounded color="blue" label="07" /> <br />
          </div>
        </div>
      </q-toolbar-title>

      <div class="q-pa-md" style="max-width: 350px">
        <q-input
          bottom-slots
          v-model="text"
          label="Rechercher"
          :dense="dense"
          class="dash"
        >
          <template v-slot:append>
            <q-icon
              v-if="text !== ''"
              name="close"
              @click="text = ''"
              class="cursor-pointer"
            />
            <q-icon name="search" />
          </template>
        </q-input>
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            switch-toggle-side
            expand-separator
            icon="trending_up"
            label="Les Tendances"
            class="dash"
          >
            <q-card>
              <q-card-section>
                <ul class="text-justify">
                  <ol>
                    <q-badge rounded color="blue" label="01" />
                    Meilleurs offres
                  </ol>
                  <ol>
                    <q-badge rounded color="blue" label="02" />
                    Meilleurs Ventes
                  </ol>
                  <ol>
                    <q-badge rounded color="blue" label="03" />
                    Les Statistiques
                  </ol>
                </ul>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            switch-toggle-side
            expand-separator
            icon="real_estate_agent"
            label="Proprietés Intellectuelles"
            class="dash"
          >
            <q-card>
              <q-card-section>
                <ul class="text-justify">
                  <ol>
                    <q-badge rounded color="green" label="01" />
                    Livres, Plan et Architectures
                  </ol>
                  <ol>
                    <q-badge rounded color="green" label="02" />
                    Licences
                  </ol>
                  <ol>
                    <q-badge rounded color="green" label="03" />
                    Code Project
                  </ol>
                  <ol>
                    <q-badge rounded color="green" label="04" />
                    Oeuvres Artistiques
                  </ol>
                </ul>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>

        <q-list bordered class="rounded-borders q-mt-md">
          <q-expansion-item
            dense-toggle
            switch-toggle-side
            expand-separator
            icon="phonelink_setup"
            label="Numériques & Appareils"
            class="dash"
          >
            <q-card>
              <q-card-section>
                <ul class="text-justify">
                  <ol>
                    <q-badge rounded color="yellow" label="01" />
                    Informatiques
                  </ol>
                  <ol>
                    <q-badge rounded color="yellow" label="02" />
                    Teléphonies
                  </ol>
                  <ol>
                    <q-badge rounded color="yellow" label="03" />
                    Eléctro-Mécaniques
                  </ol>
                  <ol>
                    <q-badge rounded color="yellow" label="04" />
                    Ménagers
                  </ol>
                  <ol>
                    <q-badge rounded color="red" label="news" />
                    Autres
                  </ol>
                </ul>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            dense-toggle
            switch-toggle-side
            expand-separator
            icon="home"
            label="Les Ménages"
          >
            <q-card>
              <q-card-section>
                <ul class="text-justify">
                  <ol>
                    <q-badge rounded color="geen" label="01" />
                    Cuisines
                  </ol>
                  <ol>
                    <q-badge rounded color="geen" label="02" />
                    Tapis
                  </ol>
                  <ol>
                    <q-badge rounded color="geen" label="03" />
                    Rideaux
                  </ol>
                  <ol>
                    <q-badge rounded color="geen" label="04" />
                    Autres Accessoires
                  </ol>
                </ul>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
        <q-list bordered class="rounded-borders q-mt-md">
          <q-expansion-item
            dense-toggle
            switch-toggle-side
            expand-separator
            icon="shopping_bag"
            label="Habillements & Modes"
            class="dash"
          >
            <q-card>
              <q-card-section>
                <ul class="text-justify">
                  <ol>
                    <q-badge rounded color="pink" label="01" />
                    1950 à 1970
                  </ol>
                  <ol>
                    <q-badge rounded color="pink" label="02" />
                    1970 à 1990
                  </ol>
                  <ol>
                    <q-badge rounded color="pink" label="03" />
                    1990 à 2010
                  </ol>
                  <ol>
                    <q-badge rounded color="pink" label="04" />
                    2010 à 2020
                  </ol>
                  <ol>
                    <q-badge rounded color="pink" label="05" />
                    2020 à Aujourd'hui
                  </ol>
                </ul>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            dense-toggle
            switch-toggle-side
            expand-separator
            icon="chair"
            label="Mobiliers"
            class="dash"
          >
            <q-card>
              <q-card-section>
                <ul class="text-justify">
                  <ol>
                    <q-badge rounded color="primary" label="01" />
                    Bureaux
                  </ol>
                  <ol>
                    <q-badge rounded color="primary" label="02" />
                    Salons
                  </ol>
                  <ol>
                    <q-badge rounded color="primary" label="03" />
                    Restaurants
                  </ol>
                  <ol>
                    <q-badge rounded color="primary" label="04" />
                    Chambres
                  </ol>
                  <ol>
                    <q-badge rounded color="primary" label="05" />
                    Jardin
                  </ol>
                  <ol>
                    <q-badge rounded color="primary" label="06" />
                    Préfabriqués
                  </ol>
                </ul>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            dense-toggle
            switch-toggle-side
            expand-separator
            icon="redeem"
            label="Plus d'Articles"
            class="dash"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
          <router-link to="/Cli">
            <q-expansion-item icon="settings" label="Maintenance" class="dash">
            </q-expansion-item>
          </router-link>
          <router-link to="/Para">
            <q-expansion-item
              icon="settings"
              label="Tous les Paramètres"
              class="dash"
            >
              <q-card>
                <q-card-section> Parametre du compte </q-card-section>
              </q-card>
            </q-expansion-item>
          </router-link>
        </q-list>
      </div>
    </q-drawer>
    <!-- FIN BAR CONTENTS-->

    <q-page-container>
      <CardDash />
    </q-page-container>

    <!-- ACTION BUTTON -->
    <q-page-sticky position="bottom-right" :offset="fabPos">
      <q-fab
        icon="add"
        direction="up"
        color="primary"
        :disable="draggingFab"
        v-touch-pan.prevent.mouse="moveFab"
      >
        <router-link to="/Vendeur">
          <q-fab-action
            @click="onClick"
            color="primary"
            icon="person_add"
            :disable="draggingFab"
          />
        </router-link>
        <q-fab-action
          @click="seamless = true"
          color="primary"
          icon="mail"
          :disable="draggingFab"
        />
        <router-link to="/Livreur">
          <q-fab-action
            @click="onClick"
            color="primary"
            icon="book"
            :disable="draggingFab"
          />
        </router-link>
      </q-fab>
      <!-- MESSAGE DIALOGUE -->
      <q-dialog v-model="seamless" seamless position="top">
        <q-card style="width: 350px">
          <q-linear-progress :value="0.6" color="primary" />

          <q-card-section class="items-center no-wrap">
            <div class="messages">
              <div class="text-weight-bold">
                <h4 class="text-weight-bolder">Messages</h4>
              </div>
              <q-btn
                flat
                round
                icon="close"
                class="text-weight-bolder"
                v-close-popup
              />
            </div>
            <q-space />

            <ChatMessage />
          </q-card-section>
        </q-card>
      </q-dialog>
      <!-- FIN MESSAGE DIALOGUE -->
    </q-page-sticky>
    <!-- FIN ACTION BUTTON -->
    <!-- LE FOOTER -->
    <q-footer class="footer text-cyan-12 transparent rounded" align="center">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar> </q-avatar>
          <div class="menu" align="center">
            <router-link to="/">
              <q-btn
                class="icon"
                round
                flat
                icon="fa-solid fa-house"
                style="color: aqua"
              />
            </router-link>
            <router-link to="/Log">
              <q-btn
                class="icon"
                round
                flat
                icon="fa-solid fa-right-to-bracket"
                style="color: aqua"
              />
            </router-link>
            <div class="icon">
              <q-tooltip>Enchers</q-tooltip>
              <q-avatar>
                <img src="~assets/about.jpg" />
              </q-avatar>
              <q-menu v-model="eanchers" class="col col-sm col-md">
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section> Participer au salon</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <q-item-section
                      >Tout savoir sur la vente aux Enchers</q-item-section
                    >
                  </q-item>
                </q-list>
              </q-menu>
            </div>
            <q-btn
              class="icon"
              round
              flat
              icon="fa-solid fa-bag-shopping"
              @click="open('right')"
            />
            <router-link to="/Para">
              <q-btn
                class="icon"
                round
                flat
                icon="fa-solid fa-gear"
                style="color: aqua"
              />
            </router-link>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <!-- FIN DU FOOTER -->
  </q-layout>
</template>

<script>
import { ref } from "vue";
import DialogPage from "./DialogPage.vue";
import CardDash from "./CardDash.vue";
import TablePanier from "./TablePanier.vue";
import ChatMessage from "./ChatMessage.vue";

export default {
  components: { DialogPage, CardDash, TablePanier, ChatMessage },

  setup() {
    const leftDrawerOpen = ref(false);
    const dialog = ref(false);
    const position = ref("top");
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);
    return {
      seamless: ref(false),
      showing: ref(false),
      notifications: ref(false),
      enchers: ref(false),
      eanchers: ref(false),
      text: ref(""),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      dialog,
      position,

      open(pos) {
        position.value = pos;
        dialog.value = true;
      },
      fabPos,
      draggingFab,

      onClick() {
        // console.log('Clicked on a fab action')
      },

      moveFab(ev) {
        draggingFab.value = ev.isFirst !== true && ev.isFinal !== true;

        fabPos.value = [
          fabPos.value[0] - ev.delta.x,
          fabPos.value[1] - ev.delta.y,
        ];
      },
    };
  },
};
</script>

<style lang="scss">
.dash {
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  align-items: center;
  color: black;
}

.dash-ap {
  font-family: "Redressed", sans-serif;
  font-size: 14px;
  font-weight: bold;
}

.dash-app {
  font-family: "Redressed", sans-serif;
  font-size: 14px;
  text-shadow: 1.3rem;
  text-align: center;
}

#profile {
  display: block;
  margin: auto;
}
.messages {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px auto;
}
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  text-decoration: none;
  background-color: #0f7bb9e0;
  border: 2px solid;
  border-color: #66ffff;
  border-radius: 20px;
  margin: 5px;
  padding: 10px;
  height: auto;
  width: auto;
}
@media only screen and (min-width: 600px) {
  .menu {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  .hib {
    display: none;
  }
}
@media only screen and (max-width: 600px) {
  .titre {
    font-size: 48px;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 10px 0;
    font-weight: bold;
  }
}
</style>
