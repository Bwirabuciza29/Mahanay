<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row items-start">
      <div class="col">
         <q-select filled v-model="model" :options="options" label="Designation" /> <br>
         <q-input filled v-model="model" :options="options" label="Etat Produit" /> <br>
          <q-input v-model="text" filled type="textarea" label="Description" /><br>
          <q-input v-model="text" filled type="textarea" label="Autres détails" /><br>
          <q-file
          v-model="files"
          label="Pick files"
          filled
          counter
          :counter-label="counterLabelFn"
          max-files="3"
          multiple
          style="max-width: 300px"
        >
          <template v-slot:prepend>
            <q-icon name="attach_file" />
          </template>
        </q-file>
      </div>
      <div class="col">

        <q-card class="relative-position card-example" flat bordered>
          <q-card-section class="q-pb-none">
            <div class="text-h6">Image Choisie</div>
          </q-card-section>

          <q-card-section>
            <transition
              appear
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
            >
              <div v-show="showSimulatedReturnData">
                <q-img class="imagi" src="~assets/blog-2.png" no-native-menu>
                  <div class="absolute-bottom text-subtitle1 text-center">
                    Produits
                  </div>
                </q-img>

              </div>

            </transition>
          </q-card-section>

          <q-inner-loading :showing="visible">
            <q-spinner-gears size="50px" color="primary" />
          </q-inner-loading>

        </q-card> <br>
          <p class="text-caption"> cliquez en bas pour actualiser l'image</p>
          <q-btn flat  color="primary" icon="refresh" @click="showTextLoading"/>
          <BtnSub />
            <!-- Display data from database -->
  <div v-for="offreur in storeDb.Offreur" :key="offreur.id_c">
    <p v-if="storeDb.err === ''">
      {{ offreur }}
    </p>
    <p v-else>
      {{ storeDb.err }}
    </p>
  </div>
      </div>


    </div>

  </div>


</template>
<style lang="sass" scoped>
.card-example
  width: auto
  height: auto
  .imagi
  width: auto
</style>
<script>
import { ref, onMounted } from 'vue'
import BtnSub from "./BtnSub.vue";
import { useCounterStore } from '../stores/hstore.js';

export default {
  components: { BtnSub },
  setup () {
    // Database import's
    const storeDb = useCounterStore();
    // call the get method
    storeDb.getOffreur();
    const getOffreur = onMounted(() => {
    })

    const visible = ref(false)
    const showSimulatedReturnData = ref(false)
    return {
      storeDb,
      getOffreur,
      files: ref(null),
      counterLabelFn ({ totalSize, filesNumber, maxFiles }) {
        return `${filesNumber} files of ${maxFiles} | ${totalSize}`
      },
      model: ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      visible,
      showSimulatedReturnData,

      showTextLoading () {
        visible.value = true
        showSimulatedReturnData.value = false

        setTimeout(() => {
          visible.value = false
          showSimulatedReturnData.value = true
        }, 3000)
      }
    }
    }
  }
</script>
