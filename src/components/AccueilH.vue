<template>
  <q-layout view="hHh lpr lFr">
    <q-header class="ayane bg-white text-white">
      <div class="nav container">
        <!-- Logo -->
        <!-- <img class="lo" src="~assets/hibnews.png" alt="" /> -->
        <SearchBar />
        <!-- <img class="lo" src="~assets/hibnews.png" alt="" /> -->
        <!-- <a href="#" class="logo"> h~<span>Mahanay</span> </a> -->
        <div class="nav-icons">
          <router-link to="/VendeurLogger">
            <q-icon
              class="bx"
              name="fa-brands fa-shopify"
              @click="toggleRightDrawer"
            >
              <!-- <q-badge color="red" floating>4</q-badge> -->
              <q-tooltip
                transition-show="flip-right"
                transition-hide="flip-left"
              >
                Créer un compte vendeur
              </q-tooltip>
            </q-icon>
          </router-link>

          <router-link to="/Log">
            <q-icon class="bx" name="fa-solid fa-user">
              <q-tooltip
                transition-show="flip-right"
                transition-hide="flip-left"
              >
                Créer un compte client
              </q-tooltip>
            </q-icon>
          </router-link>
        </div>
      </div>
    </q-header>
    <q-page-container>
      <!-- SECTION DE LA PAGE D'ACCUEIL  Commence ici-->
      <div class="q-pa-md q-gutter-sm row">
        <div class="col">
          <div>
            <h4>Bienvenue sur</h4>
            <!-- <h1 class="text-bold">h~Mahanay</h1> -->
            <img src="~assets/newLogo.png" alt="" />
          </div>
          <br />
          <p>
            La plateforme la plus optimale pour la gestion saine de vos biens.
          </p>
          <router-link to="/Log">
            <q-btn class="btn" label="Commander" />
          </router-link>
        </div>
        <div class="col">
          <!-- image  -->
          <div class="home-img">
            <img src="~assets/h-mahanay/image4.png" alt="" />
          </div>
        </div>
      </div>

      <!-- SECTION DE LA PAGE D'ACCUEIL  fini ici-->
      <BbSecond />
      <!-- BOUTON MAINTENANCE -->
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab
          icon="fa-solid fa-screwdriver-wrench"
          label="depannage?"
          direction="up"
          color="black"
          @click="open('top')"
        >
        </q-fab>
      </q-page-sticky>
      <!-- FIN BOUTON MAINTENANCE -->
      <q-dialog v-model="dialog" :position="position">
        <!-- STEPPER DU FORMULAIRE DE DEPANNAGE -->
        <div class="q-pa-md">
          <q-linear-progress :value="0.6" color="black" />
          <q-stepper
            v-model="step"
            ref="stepper"
            contracted
            color="primary"
            animated
          >
            <q-step
              :name="1"
              title="Select campaign settings"
              icon="settings"
              color="black"
              :done="step > 1"
            >
              Veuillez completer le formulaire ci-dessous pour la demande de la
              maintenance:
              <div class="q-gutter-md">
                <q-input v-model="text" label="Designation du produit" />
                <q-select v-model="model" :options="options" label="Marque" />
              </div>
            </q-step>

            <q-step
              :name="2"
              title="Create an ad group"
              caption="Optional"
              icon="create_new_folder"
              color="black"
              :done="step > 2"
            >
              <div class="q-gutter-sm items-justify">
                <q-input v-model="text" label="Description panne" />
                <q-uploader
                  color="black"
                  url="http://localhost:4444/upload"
                  label="Image"
                  multiple
                  batch
                  style="max-width: 100%"
                />
              </div>
            </q-step>

            <q-step
              :name="3"
              title="Create an ad"
              icon="add_comment"
              color="black"
            >
              <div class="q-gutter-sm items-justify">
                <q-file
                  bottom-slots
                  v-model="file"
                  label="Ajouter une vidéo ou audio"
                  multiple
                  append
                  style="max-width: 300px"
                  :dense="dense"
                >
                  <template v-slot:before>
                    <q-icon name="movie" />
                  </template>

                  <template v-slot:append>
                    <q-icon
                      v-if="text !== ''"
                      name="close"
                      @click="text = ''"
                      class="cursor-pointer"
                    />
                    <q-icon name="create_new_folder" color="black" />
                  </template>

                  <template v-slot:after>
                    <q-btn round dense flat icon="mic" />
                  </template>
                </q-file>
              </div>
              Le montant uniforme pour le paiement est de 80% du total.
            </q-step>

            <template v-slot:navigation>
              <q-stepper-navigation>
                <q-btn
                  @click="$refs.stepper.next()"
                  color="black"
                  :label="step === 3 ? 'Envoyer' : 'Suivant'"
                />
                <q-btn
                  v-if="step > 1"
                  flat
                  color="black"
                  @click="$refs.stepper.previous()"
                  label="Retour"
                />
              </q-stepper-navigation>
            </template>
          </q-stepper>
        </div>
        <!-- FIN  STEPPER DU FORMULAIRE DE DEPANNAGE -->
      </q-dialog>
    </q-page-container>
  </q-layout>
</template>
<script>
import { ref, defineComponent } from "vue";
import BbSecond from "./BbSecond.vue";
import SearchBar from "./SearchBar.vue";

export default defineComponent({
  components: { BbSecond, SearchBar },
  setup() {
    const dialog = ref(false);
    const position = ref("top");
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);
    return {
      text: ref(""),
      ph: ref(""),
      dense: ref(false),
      onClick() {
        // console.log('Clicked on a fab action')
      },
      options: [
        "Meuble",
        "Appareils Electroniques",
        "Appareils Automobiles",
        "Machine Industrielle",
        "Autres",
      ],
      step: ref(1),
      dialog,
      position,
      open(pos) {
        position.value = pos;
        dialog.value = true;
      },
      slide: ref(1),
      autoplay: ref(true),
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
});
</script>
<style lang="scss">
:root {
  --main-color: #2b7598;
  --light-color: #e1b955;
  --text-color: #2e2e2e;
  --hover-color: #000;
  --bg-color: #fff;
}
img {
  width: 100%;
}
section {
  padding: 4rem 0 3rem;
}
.ayane {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.ayane .shadow {
  background: var(--bg-color);
  box-shadow: 1px 4px 14px;
  transition: 0.3s;
}
.container {
  max-width: 968px;
  margin: auto;
  width: 100%;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
}
.nav-icons .bx {
  padding: 10px;
  font-size: 20px;
  background: var(--text-color);
  color: var(--bg-color);
  border-radius: 5rem;
  margin: 1px;
}
.nav-icons .bx:hover {
  background: var(--main-color);
}
.logo {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-color);
  margin: 0px auto 0px 24px;
}
.logo span {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--hover-color);
}
.btn {
  background: var(--main-color);
  padding: 10px 20px;
  color: var(--bg-color);
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.5rem;
}
.btn:hover {
  background: var(--hover-color);
  transition: 0.3s all linear;
}
/* ACCUEIL */
.home {
  position: relative;
  min-height: 640px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 1.5rem;
}

.home-img img {
  width: 400px;
}
.home-img {
  position: relative;
}

@media (max-width: 1020px) {
  .container {
    margin: 0 auto;
    width: 95%;
  }
  .home-img {
    display: none;
  }
  p {
    text-align: justify;
  }
  .nav .logo {
    display: none;
  }
}

@media (max-width: 880px) {
  section {
    padding: 3rem 0 2rem;
  }
  .nav {
    padding: 12px 0;
  }
  h1 {
    font-size: 3.5rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  .home-img img {
    width: 100%;
  }
  .home-img::after {
    width: 415px;
    right: 10px;
  }
}
.lo {
  width: 50%;
  height: 50px;
  object-fit: contain;
}
</style>
