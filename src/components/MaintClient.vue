<template>
  <q-layout view="hHh LpR fFf">
    <q-header reveal  class="bg-transparent text-dark">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

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
            icon="engineering"
            label="Les Maintenances Sollicités"
            class="dash"
          >
          </q-expansion-item>

          <q-expansion-item
            switch-toggle-side
            expand-separator
            icon="verified"
            label="Validité de Garantie"
            class="dash"
          >

          </q-expansion-item>
        </q-list>

        <q-list bordered class="rounded-borders q-mt-md">
          <q-expansion-item
            dense-toggle
            switch-toggle-side
            expand-separator
            icon="drag_indicator"
            label="Rapport"
            class="dash"
          >
          </q-expansion-item>

        </q-list>
      </div>
    </q-drawer>
    <!-- FIN BAR CONTENTS-->

    <q-page-container>
      <!-- <CardDash /> -->
      <div class="q-pa-md">
      <q-card class="my-card" flat bordered>
        <q-card-section>
          <div class="text-h6">Les Maintenances Sollicitées</div>
          <div class="text-subtitle2">Maintenances</div>
        </q-card-section>

        <q-markup-table>
          <thead>
            <tr>
              <th class="text-left">Bien à Maintenir</th>
              <th class="text-right">Marque</th>
              <th class="text-right">Image</th>
              <th class="text-right">Video</th>
              <th class="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-left">abcd</td>
              <td class="text-right">efgh</td>
              <td class="text-right">
                <q-btn round flat @click="card = true">
                    <q-avatar size="42px">
                      <img src="~assets/8.jpg">
                    </q-avatar>
                  </q-btn>
              </td>
              <td class="text-right">
                <div class=" q-gutter-md" style="font-size: 2em">
                  <q-icon name="fa-solid fa-eye fa-beat" @click="small = true" />
                </div>
              </td>
              <td class="text-center">
                      <div class="q-gutter-md" style="font-size: 2em">
                        <q-icon name="verified_user" class="text-green" @click="persistent = true" />
                        <q-icon name="list" class="text-grey"/>
                        <q-icon name="close" class="text-red"/>
                      </div>
              </td>

            </tr>
          </tbody>
        </q-markup-table>
      </q-card>
    </div>
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
      <router-link to="/Vendeur"> <q-fab-action
          @click="onClick"
          color="primary"
          icon="person_add"
          :disable="draggingFab"
        /> </router-link>
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
              <q-btn flat round icon="close" class="text-weight-bolder" v-close-popup />

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
                <q-btn class="icon" round flat icon="fa-solid fa-gear" style="color:aqua"/>
                  </router-link>
              </div>
            </q-toolbar-title>
          </q-toolbar>
        </q-footer>
        <!-- FIN DU FOOTER -->

        <!-- DIALOGUE IMAGE-->
        <q-dialog v-model="card">
        <q-card class="my-card">
          <q-img src="~assets/8.jpg" />

          <q-card-section>
            <q-btn
              fab
              color="green"
              icon="handyman"
              class="absolute"
              style="top: 0; right: 12px; transform: translateY(-50%);"
            />

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                Reparation smartphone
              </div>
              <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                <q-icon name="home_repair_service" />
                $ 20
              </div>
            </div>

            <q-rating v-model="stars" :max="5" size="32px" />
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-subtitle1">
              $ 20
            </div>
            <div class="text-caption text-grey">
              Description de la panne & lorem ipsum.
            </div>
          </q-card-section>

          <q-separator />

          <!-- <q-card-actions align="right">
            <q-btn v-close-popup flat color="primary" label="Reserve" />
            <q-btn v-close-popup flat color="primary" round icon="event" />
          </q-card-actions> -->
        </q-card>
      </q-dialog>
<!-- FIN DIALOGUE  IMAGE-->
      <!-- DIALOGUE VIDEO -->
      <q-dialog
        v-model="small"
      >
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-h6">Vidéo</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
             <q-video
                :ratio="16 / 9"
                src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
              />
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <!-- FIN DIALOGUE VIDEO -->

    <!-- DIALOGUE DE PAIEMENT -->
        <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">

    <!-- ICI COMMENCE LE STEPPER DE PAIEMENT VIA CARTE BANCAIRE ET MOBILE MONEY -->
                  <div class="q-pa-md">
                      <q-stepper
                        v-model="step"
                        ref="stepper"
                        animated
                        active-color="purple"
                      >
                        <q-step
                          :name="1"
                          prefix="1"
                          title="Pay with my card"
                        >
                          <q-input filled bottom-slots v-model="text"  :dense="dense" suffix="@gmail.com">
                              <template v-slot:before>
                                <p>Email</p>
                              </template>
                            </q-input>

                            card info
                             <q-input color="teal" outlined v-model="text" label="1234 1234 1234 1234" >
                                <template v-slot:append>
                                 <q-avatar square>
                                  <img src="~assets/vs.png">
                                </q-avatar>
                                <q-avatar square>
                                  <img src="~assets/ms.png">
                                </q-avatar>
                                <q-avatar>
                                  <img src="~assets/eq.jpg">
                                </q-avatar>
                                <q-avatar>
                                    <img src="~assets/tmb.webp">
                                  </q-avatar>
                                </template>
                              </q-input> <br>
                              <div class="row items-start">
                                    <q-input outlined v-model="date" mask="date" :rules="['date']">
                                      <template v-slot:append>
                                        <q-icon name="event" class="cursor-pointer">
                                          <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                                            <q-date v-model="date">
                                              <div class="row items-center justify-end">
                                                <q-btn v-close-popup label="Close" color="primary" flat />
                                              </div>
                                            </q-date>
                                          </q-popup-proxy>
                                        </q-icon>
                                      </template>
                                    </q-input>
                                <q-input outlined v-model="number" type="text" hint="CVC" >
                                  <template v-slot:append>
                                  <q-avatar>
                                      <img src="~assets/cvc.png">
                                    </q-avatar>
                                  </template>
                                </q-input>
                            </div>
                            name on card
                             <q-input v-model="text" label="Nom" :dense="dense" />
                              <q-select v-model="model" :options="options" label="Country or region" />
                             <q-list>
                              <q-item tag="label" v-ripple>
                                  <q-item-section avatar>
                                    <q-checkbox v-model="right" />
                                  </q-item-section>
                                  <q-item-section>
                                    <q-item-label>Securely save my information for 1-click checkout</q-item-label>
                                    <q-item-label caption>Pay faster on Lovco Ltd and everywhere link is accepted</q-item-label>
                                  </q-item-section>
                                </q-item>
                             </q-list>

                        </q-step>

                        <q-step
                          :name="3"
                          prefix="3"
                          title="Mobile Money"
                        >
                        Faites un paiement via mobile money avec ces numeros ci-dessous
                         <div class="q-pa q-gutter-y-md">
                <div class="q-gutter-sm">
                  <q-chip>
                    <q-avatar>
                      <img src="~assets/ab.png">
                    </q-avatar>
                    +243 823 138 020
                  </q-chip>
                  <q-chip>
                    <q-avatar >
                      <img src="~assets/ad.png">
                    </q-avatar>
                    +243 823 138 020
                  </q-chip>
                  <q-chip>
                    <q-avatar>
                      <img src="~assets/a.jpg">
                    </q-avatar>
                    +243 823 138 020
                  </q-chip>
                </div></div> <br>
                <b> Ou par carte de crédit via nos banques:</b>
                <div class="img">
                  <q-avatar>
                    <img src="~assets/eq.jpg">
                  </q-avatar>
                  <q-avatar>
                    <img src="~assets/wu.jpg">
                  </q-avatar>
                  <q-avatar>
                    <img src="~assets/tmb.webp">
                  </q-avatar>
                  <q-avatar >
                    <img src="~assets/vs.png"/>
                  </q-avatar>

                </div>

                        </q-step>

                        <template v-slot:navigation>
                          <q-stepper-navigation>
                            <q-btn class="btn" @click="$refs.stepper.next()" color="primary" :label="step === 3 ? 'Envoyer' : 'Continuer'" />
                            <q-btn v-if="step > 1" flat color="deep-orange" @click="$refs.stepper.previous()" label="Back" class="btn q-ml-sm" />
                            <q-btn flat label="OK" v-close-popup />
                          </q-stepper-navigation>
                        </template>
                      </q-stepper>

                    </div>



      </q-dialog>
      <!-- FIN DIALOGUE DESCRIPTION -->
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
       right: ref(false),
      model: ref(null),
      options: [
        'Congo-Kinshasa', 'Rwanda', 'Cameroun', 'Nigeria', 'South-Africa'
      ],
       date: ref('2019/02/01'),
      step: ref(1),
      small: ref(false),
      persistent: ref(false),
      card: ref(false),
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

        fabPos.value = [fabPos.value[0] - ev.delta.x, fabPos.value[1] - ev.delta.y];
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
