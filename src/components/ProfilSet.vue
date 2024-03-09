<template>
  <q-layout view="hHh LpR fFf">
    <!-- ======HEADER====== -->

    <q-header reveal bordered class="bg-white text-dark q-pa-xs">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> </q-toolbar-title>

        <q-space />
        <div class="hib">
          <q-tooltip>Enchers</q-tooltip>
          <q-avatar>
            <img src="~assets/about.jpg" />
          </q-avatar>
          <q-menu v-model="enchers">
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
          <q-btn class="icon" round flat icon="shopping_cart" @click="open('right')">
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
          </q-btn>
        </div>
        <!-- NOTIFICATIONS BAR-->
        <div class="text-center">
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
                <router-link to="/MyDashboard" class="dash">
                <q-item-label class="dash"
                  ><q-icon name="dashboard" />Mon dashboard</q-item-label
                ></router-link>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <router-link to="/Premium" class="dash">
                <q-item-label class="dash"
                  ><q-icon name="workspace_premium" />Compte
                  premium</q-item-label
                >
                </router-link>
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
      </q-toolbar>
    </q-header>

    <!-- ====== FIN DU HEADER====== -->

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
      <!-- ======SIDEBAR ====== -->
      <q-toolbar-title class="text-subtitle1 text-center">
        <div class="dash-ap">
          <div class="q-pa-xs">
          <q-icon name="dashboard" color="black" size="18px" />
          Tableau de bord
          <q-badge rounded color="blue" label="07" />
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex
                numquam, dolorum officiis modi facere maiores architecto
                suscipit iste eveniet doloribus ullam aliquid.
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
          <q-expansion-item
            icon="settings"
            label="Tous les Paramètres"
            class="dash"
          ></q-expansion-item>
        </q-list>
      </div>
    </q-drawer>
    <!-- ======FIN DU SIDE ====== -->

    <!-- ====== DEBUT DU MAIN CONTAINER ====== -->

    <q-page-container>
      <SettingsContainer />
    </q-page-container>

        <!-- LE FOOTER -->
      <q-footer class="footer text-cyan-12 transparent rounded" align="center">
            <q-toolbar>
              <q-toolbar-title>
                <q-avatar>
                </q-avatar>
                <div class="menu" align="center">
                  <router-link to="/">
                  <q-btn class="icon" round flat icon="fa-solid fa-house" style="color:aqua" />
                  </router-link>
                  <router-link to="/Log">
                  <q-btn class="icon" round flat icon="fa-solid fa-right-to-bracket" style="color:aqua" />
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
                              <q-item-section>Tout savoir sur la vente aux Enchers</q-item-section>
                            </q-item>
                          </q-list>
                        </q-menu>
                  </div>
                  <q-btn class="icon" round flat icon="fa-solid fa-bag-shopping"  @click="open('right')"/>
                   <router-link to="/Para">
                  <q-btn class="icon" round flat icon="fa-solid fa-user" style="color:aqua"/>
                    </router-link>
                </div>
              </q-toolbar-title>
            </q-toolbar>
          </q-footer>
          <!-- FIN DU FOOTER -->

    <!-- ====== FIN DU MAIN CONTAINER ====== -->
  </q-layout>
</template>

<script>
import { ref } from "vue";
import SettingsContainer from "./SettingsContainer.vue";
import TablePanier from "./TablePanier.vue";
export default {
  components: { SettingsContainer, TablePanier },
  setup() {
    const leftDrawerOpen = ref(false);
    const accept = ref(false);
    const dialog = ref(false);
    const position = ref("top");
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);

    return {
      dialog,
      notifications: ref(false),
      password: ref(""),
      isPwd: ref(true),
      customModel: ref("no"),
      tab: ref("alarms"),
      text: ref(""),
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      options: ["Masculin", "Feminin"],
      quartier: ["Goma", "Mabanga", "Himbi"],
      avenue: ["chandellier", "lowa", "ruyange"],
      accept,
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

        fabPos.value = [fabPos.value[0] - ev.delta.x, fabPos.value[1] - ev.delta.y];
      },
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700;800&family=Redressed&display=swap");

#main {
  margin-top: 60px;
  padding: 20px 30px;
  transition: all 0.3s;
}

@media (max-width: 1199px) {
  #main {
    padding: 20px;
  }
}

.dash {
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  align-items: center;
  color: black;
}

.dash-ap {
  font-family: "Redressed", sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1.3rem;
}

.dash-app {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1.3rem;
}

#profile {
  display: flex;
  margin: auto;
}

.my-card-profile img {
  display: inline-block;
  width: 150px;
  height: 150px;
  border: none;
  border-radius: 75px;
}

h2 {
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin: 10px 0 0 0;
}

.r {
  font-size: 24px;
  font-weight: 700;
  color: #000000;
  margin: 10px 0 0 0;
}

.my-card-profile h3 {
  font-size: 18px;
}

.btn {
  font-size: 15px;
  font-family: "Open Sans", sans-serif;
  text-transform: capitalize;
  padding: 8px 20px;
  border-radius: 0;
  font-weight: 600;
  border: 1px solid;
  position: relative;
  z-index: 1;
  transition: 0.2s ease;
}
.menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  text-decoration: none;
  background-color: #0f7bb9e0;
  border: 2px solid;
  border-color: #66FFFF;
  border-radius: 20px;
  margin: 5px;
  padding: 10px;
  height: auto;
  width: auto;
}
@media only screen and (min-width: 600px){
    .menu{
        display: none;
        }
}
@media only screen and (max-width: 600px){
    .hib{
        display: none;
        }
}
@media only screen and (max-width: 600px){
    .titre{
        font-size: 48px;
        align-items: center;
        justify-content: center;
        padding: 5px;
        margin: 10px 0;
        font-weight: bold;


        }
   }

</style>
