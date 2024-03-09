<template>
  <q-layout view="hHh lpR fFf">
    <!-- <q-header elevated class="bg-white text-black" height-hint="98">
      <q-toolbar class="tools">
        <q-toolbar-title>
          <div class="title"><img src="~assets/logohh.png" /></div>
        </q-toolbar-title>
        <q-space />
        <div class="nav">
          <div class="links">
            <a class="nav-link" href="#">Accueil</a>
            <q-btn class="icon" round flat icon="fa-brands fa-shopify fa-bounce" />
            <router-link to="/Log">
              <q-btn outline class="btn" label="Login" />
            </router-link>
          </div>
        </div>
      </q-toolbar>
    </q-header> -->

    <q-page-container>
      <div class="container">
        <q-header elevated class="hib bg-white text-black" height-hint="98">
          <q-toolbar class="tools">
            <q-toolbar-title>
              <div class="title"><img src="~assets/logohh.png" /></div>
            </q-toolbar-title>
            <q-space />
            <div class="nav">
              <div class="links">
                <a class="nav-link" href="#">Accueil</a>
                <q-btn
                  class="icon"
                  round
                  flat
                  icon="fa-brands fa-shopify fa-bounce"
                />
                <router-link to="/Log">
                  <q-btn outline class="btn" label="Login" />
                </router-link>
              </div>
            </div>
          </q-toolbar>
        </q-header>

        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          height="700px"
        >
          <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <q-btn
              v-if="active"
              size="lg"
              icon="fa-brands fa-shopify fa-bounce"
              color="primary"
              flat
              round
              dense
              @click="onClick"
            />
            <q-btn
              v-else
              size="sm"
              :icon="btnProps.icon"
              color="white"
              flat
              round
              dense
              @click="onClick"
            />
          </template>
          <q-carousel-slide
            class="carr"
            :name="1"
            img-src="~assets/greenback.jpg"
          >
            <div class="row">
              <div class="col-12" align="center">
                <div class="titre q-gutter-lg">
                  <br />
                  <h3 class="text-center" style="color: #0e2a47">
                    Bienvenue sur
                  </h3>
                  <div class="loader" anim-text="h~Mahanay">h~Mahanay</div>
                  <h6 class="text-center" style="color: #fff">
                    La plateforme la plus optimale pour une gestion saine de vos
                    biens.
                  </h6>
                  <br />
                </div>
              </div>
            </div>
            <p
              class="text-center text-white"
              style="
                font-family: 'Trebuchet MS', 'Lucida Sans Unicode',
                  'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
              "
            >
              Contribuez à la preservation de la nature en:
            </p>
            <br />
            <div class="q-gutter-lg" align="center">
              <router-link to="/Log">
                <q-btn
                  class="btn"
                  style="color: #0e2a47"
                  label="Commandant maintenant"
                />
              </router-link>
              <!-- <q-btn outline style="color: blue" class="btn" label="Nos Produits" /> -->
            </div>
          </q-carousel-slide>
          <!-- <q-carousel-slide class="carr" :name="2" img-src="~assets/blog-1.png" >
              <div class="row">
                <div class="col"></div>
                <div class="col-12" align="center">
              <div class="titre q-gutter-lg">
                <h3 class=" text-center text-black"><br> <span class="spannet text-black"> <br> h-Mahanay</span></h3>
              </div>
                </div>
              </div> <br>
              <h6 class="text-justify text-grey-4">
                La plateforme la plus optimale pour une gestion saine de vos biens.
              </h6><br>
              <p
                class="text-justify text-primary"
                style="
                  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
                    'Lucida Sans', Arial, sans-serif;
                "
              >
                Contribuez à la preservation de la nature en:
              </p> <br>
              <div class="q-gutter-lg" align="center">
                <router-link to="/Log">
                <q-btn
                  class="text-primary text-bold text-primary"
                  label="Commandant maintenant"
                />
              </router-link>

              </div>
            </q-carousel-slide>
            <q-carousel-slide class="carr" :name="3" img-src="~assets/blog-2.png" >
              <div class="row">
                <div class="col"></div>
                <div class="col-12" align="center">
              <div class="titre q-gutter-lg">
                <h3 class=" text-center text-black"><br> <span class="spannet text-black"> <br> h-Mahanay</span></h3>
              </div>
                </div>
              </div> <br>
              <h6 class="text-justify text-grey-4">
                La plateforme la plus optimale pour une gestion saine de vos biens.
              </h6><br>
              <p
                class="text-justify text-primary"
                style="
                  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
                    'Lucida Sans', Arial, sans-serif;
                "
              >
                Contribuez à la preservation de la nature en:
              </p> <br>
              <div class="q-gutter-lg" align="center">
                <router-link to="/Log">
                <q-btn
                  class="text-primary text-bold text-primary"
                  label="Commandant maintenant"
                />
              </router-link>

              </div>
            </q-carousel-slide>
            <q-carousel-slide class="carr" :name="4" img-src="~assets/blog-3.png" >
              <div class="row">
                <div class="col"></div>
                <div class="col-12" align="center">
              <div class="titre q-gutter-lg">
                <h3 class=" text-center text-black"><br> <span class="spannet text-black"> <br> h-Mahanay</span></h3>
              </div>
                </div>
              </div> <br>
              <h6 class="text-justify text-grey-4">
                La plateforme la plus optimale pour une gestion saine de vos biens.
              </h6><br>
              <p
                class="text-justify text-primary"
                style="
                  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
                    'Lucida Sans', Arial, sans-serif;
                "
              >
                Contribuez à la preservation de la nature en:
              </p> <br>
              <div class="q-gutter-lg" align="center">
                <router-link to="/Log">
                <q-btn
                  class="text-primary text-bold text-primary"
                  label="Commandant maintenant"
                />
              </router-link>

              </div>
            </q-carousel-slide> -->
        </q-carousel>
      </div>

      <!-- LES PRODUITS -->

      <div class="container-product" data-aos="fade-up">
        <codesX />
      </div>
    </q-page-container>
    <q-footer class="footer text-cyan-12 transparent rounded" align="center">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar> </q-avatar>
          <div class="menu" align="center">
            <q-btn class="icon" round flat icon="fa-solid fa-house" />
            <router-link to="/Log">
              <q-btn
                class="icon"
                round
                flat
                icon="fa-solid fa-right-to-bracket"
                style="color: aqua"
              />
            </router-link>
            <q-btn class="icon" round flat icon="fa-solid fa-bag-shopping" />
            <q-btn class="icon" round flat icon="fa-solid fa-bars">
              <q-menu
                transition-show="jump-down"
                transition-hide="jump-up"
                style="backbround-color: #000"
              >
                <q-list style="min-width: 100px; backbround-color: #000">
                  <q-item clickable>
                    <q-item-section>Les Tandances</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section
                      >Les Proprités Intellectuelles</q-item-section
                    >
                  </q-item>
                  <q-separator />
                  <q-item clickable>
                    <q-item-section>Numérique et Appareils</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Les ménages</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Habillements & Modes</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <!-- INTERFACE MAINTENANCE -->

    <q-page-sticky position="bottom-left" :offset="fabPos">
      <q-fab
        icon="engineering"
        direction="up"
        color="primary"
        :disable="draggingFab"
        v-touch-pan.prevent.mouse="moveFab"
      >
        <q-fab-action
          @click="open('top')"
          color="primary"
          icon="question"
          label="?Dépannage"
          :disable="draggingFab"
        />

        <q-dialog v-model="dialog" :position="position">
          <!-- STEPPER DU FORMULAIRE DE DEPANNAGE -->
          <div class="q-pa-md">
            <q-linear-progress :value="0.6" color="primary" />
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
                :done="step > 1"
              >
                Veuillez completer le formulaire ci-dessous pour la demande de
                la maintenance:
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
                :done="step > 2"
              >
                <div class="q-gutter-sm items-justify">
                  <q-input v-model="text" label="Description panne" />
                  <q-uploader
                    url="http://localhost:4444/upload"
                    label="Image"
                    multiple
                    batch
                    style="max-width: auto"
                  />
                </div>
              </q-step>

              <q-step :name="3" title="Create an ad" icon="add_comment">
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
                      <q-icon name="create_new_folder" />
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
                    class="btn"
                    @click="$refs.stepper.next()"
                    color="primary"
                    :label="step === 3 ? 'Envoyer' : 'Suivant'"
                  />
                  <q-btn
                    class="btn"
                    v-if="step > 1"
                    flat
                    color="primary"
                    @click="$refs.stepper.previous()"
                    label="Retour"
                  />
                </q-stepper-navigation>
              </template>
            </q-stepper>
          </div>
          <!-- FIN  STEPPER DU FORMULAIRE DE DEPANNAGE -->
        </q-dialog>
      </q-fab>
    </q-page-sticky>
    <!--FIN INTERFACE MAINTENANCE -->
  </q-layout>
</template>
<script>
import { ref, defineComponent } from "vue";
import codesX from "./codesX.vue";

export default defineComponent({
  components: { codesX },
  setup() {
    const dialog = ref(false);
    const position = ref("top");
    const fabPos = ref([18, 18]);
    const draggingFab = ref(false);
    return {
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
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700;800&family=Redressed&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Tangerine:wght@400;700&display=swap");

.tools {
  padding: 10px;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5px 0;
}
.links a {
  text-decoration: none;
  align-items: center;
  padding: 1rem;
  color: #000;
}
.links a:hover {
  color: blue;
}
.nav-link {
  border-bottom: 2px solid transparent;
  transition: padding-bottom 0.4s ease-in-out, border-color 0.3s ease;
}
.nav-link:hover {
  padding-bottom: 5px;
  border-bottom-color: blue;
}

.btn {
  font-family: "Open Sans", sans-serif;
  border-radius: 0;
  font-weight: 600;
  transition: 0.5s;
  cursor: pointer;
}
.btn:hover,
.btn:active {
  color: #4253e9;
  background-color: transparent;
  border: #000;
}
.q-gutter-lg .btn:hover {
  transform: scale(1.09);
}

.title {
  font-family: "Tangerine", cursive;
  font-size: 24px;
}
h3,
.spannet {
  margin: 10px;
  padding: 5px;
  font-size: 72px;
  font-family: "Tangerine", cursive;
  align-items: center;
}

.container {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
}
.container-product {
  margin: 0;
  padding: 0;
  background-color: #eef8ff;
}
.q-pa-md img {
  width: 100%;
  height: 344px;
  object-fit: cover;
  border-radius: 0.5rem;
}
.q-pa-md img :hover {
  transform: scale(1.09);
  cursor: pointer;
}
.my-card {
  padding: 10px;
  height: 100%;
}
.post-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post-profile {
  display: flex;
  align-items: center;
}
.post-img img {
  width: 27px;
  height: 27px;
  object-fit: cover;
  border-radius: 50%;
  object-position: center;
}
.post-profile h3 {
  font-size: 12px;
  font-weight: 600px;
  margin-left: 5px;
}
.post-profile img {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border: 2px solid #4595f1;
  border-radius: 50%;
}

.imaze .q-img:hover {
  transform: scale(1.05);
}
.btn .text-h6 {
  font-family: "redressed", sans-serif;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
}
swiper-container {
  width: 100%;
  height: 100%;
}

swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.title img {
  display: inline;
  width: 20%;
  height: 40%;
  margin: auto;
}
@media screen and (max-width: auto) {
  .titiya {
    width: 80%;
    height: 60%;
    font-size: 20px;
  }
}
@media screen and (max-width: 768px) {
  .title img {
    width: 80%;
    height: 60%;
  }
}
@media screen and (max-width: 768px) {
  .btn {
    width: auto;
    height: auto;
    align-items: center;
    justify-content: center;
  }
}
.footer {
  background-color: #0e2a47;
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
  .titre h3 {
    font-size: 48px;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 10px 0;
    font-weight: bold;
  }
}
.loader {
  position: relative;
  font-size: 12vw;
  font-family: sans-serif;
  font-weight: 800;
  color: transparent;
  -webkit-text-stroke: 0.1vw rgba(255, 255, 255, 0.4);
}
.loader::before {
  position: absolute;
  content: attr(anim-text);
  height: 100%;
  width: 0%;
  color: #0e2a47;
  border-right: 2px solid #fff;
  -webkit-text-stroke: 0.2vw #fff;
  overflow: hidden;
  animation: animate 7s linear infinite;
}
@keyframes animate {
  80% {
    width: 100%;
  }
}
</style>
