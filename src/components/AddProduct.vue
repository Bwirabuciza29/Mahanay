<template>
  <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 q-gutter-lg">

    <q-card class="my-card">
      <h6 class="text-bold text-center">ADD PRODUCT</h6>
      <q-card-section class="bg-white text-black" align="left">
        <div class="text-h6">
          <div class="text-weight-thin" align="justify">
          <h6 class="text-bold">Construisez votre Boutique</h6>
          <p class="text-weight-thin">Veuillez fournir toutes les informations</p>
        </div>
      </div>
      </q-card-section>
        <div class="q-pa-md">
          <div class="row justify-evenly">
            <div class="col col-md-8">
              <q-input class="q-pa-sm"  label="De quel produit s'agit-t-il?"  hint="Nom du produit" />
              <q-input class="q-pa-sm"  label="Quelle est la marque du produit?"  hint="Marque du produit" />
              <q-input class="q-pa-sm"  label="Proposer un prix pour produit"  hint="Prix" />
              <q-input class="q-pa-sm"  label="Selectionner une devise"  hint="Devise" />
            </div>
          <q-space/><q-space/><q-space/>
            <div class="col">
              <q-input class="q-pa-sm"  label="Précisez l'état du produit"  hint="Etat du produit" />
              <q-input class="q-pa-sm"  label="Précisez la catégorie du produit"  hint="Catégorie" />
              <q-input class="q-pa-sm" v-model="date" type="date" hint="Date" />
            </div>
          </div> <br>
          <q-input class="q-pa-sm" filled label="Entrez tous les autres élements (kits) qui constituent le présent produit"  hint="Autres composants du produit" /> <br>
          <q-input class="q-pa-sm" filled label="Decrivez un peu plus le produit que vous pensez vendre pour que le client prenne connaissance"  hint="Description du produit" />
        </div>
    </q-card>
    <q-card class="my-card">
      <q-card-section class="bg-white text-black" align="left">
        <div class="text-h6">
          <div class="text-weight-thin" align="justify">
          <h6 class="text-bold">Gestion Médias</h6>
          <p class="text-weight-thin">Veuillez déposer les images du produit</p>
        </div>
      </div>
      </q-card-section>

      <div class="q-pa-md example-row-horizontal-alignment">
        <div class="row justify-evenly">
          <div class="col-12">
            <q-uploader url="http://localhost:4444/upload" label="Custom header" multiple>
              <template v-slot:header="scope">
                <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                  <q-btn
                    v-if="scope.queuedFiles.length > 0"
                    icon="clear_all"
                    @click="scope.removeQueuedFiles"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Clear All</q-tooltip>
                  </q-btn>
                  <q-btn
                    v-if="scope.uploadedFiles.length > 0"
                    icon="done_all"
                    @click="scope.removeUploadedFiles"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Remove Uploaded Files</q-tooltip>
                  </q-btn>
                  <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
                  <div class="col">
                    <div class="q-uploader__title">Choisissez les images</div>
                    <div class="q-uploader__subtitle">
                      {{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}
                    </div>
                  </div>
                  <q-btn
                    v-if="scope.canAddFiles"
                    type="a"
                    icon="add_box"
                    @click="scope.pickFiles"
                    round
                    dense
                    flat
                  >
                    <q-uploader-add-trigger />
                    <q-tooltip>Pick Files</q-tooltip>
                  </q-btn>
                  <q-btn
                    v-if="scope.canUpload"
                    icon="cloud_upload"
                    @click="scope.upload"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Upload Files</q-tooltip>
                  </q-btn>

                  <q-btn
                    v-if="scope.isUploading"
                    icon="clear"
                    @click="scope.abort"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Abort Upload</q-tooltip>
                  </q-btn>
                </div>
              </template>
            </q-uploader>
          </div>

        </div>
      </div>
    </q-card>
    <q-card class="my-card">
      <q-card-section class="bg-white text-black" align="left">
        <div class="text-h6">
          <div class="text-weight-thin" align="justify">
          <h6 class="text-bold">Gestion Médias</h6>
          <p class="text-weight-thin">Veuillez déposer un document certifiant la possession de l'objet</p>
        </div>
      </div>
      </q-card-section>

      <div class="q-pa-md example-row-horizontal-alignment">
        <div class="row justify-evenly">
          <div class="col-12">
            <q-uploader url="http://localhost:4444/upload" label="Custom header" multiple>
              <template v-slot:header="scope">
                <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                  <q-btn
                    v-if="scope.queuedFiles.length > 0"
                    icon="clear_all"
                    @click="scope.removeQueuedFiles"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Clear All</q-tooltip>
                  </q-btn>
                  <q-btn
                    v-if="scope.uploadedFiles.length > 0"
                    icon="done_all"
                    @click="scope.removeUploadedFiles"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Remove Uploaded Files</q-tooltip>
                  </q-btn>
                  <q-spinner v-if="scope.isUploading" class="q-uploader__spinner" />
                  <div class="col">
                    <div class="q-uploader__title">Choisissez un fichier PDF</div>
                    <div class="q-uploader__subtitle">
                      {{ scope.uploadSizeLabel }} / {{ scope.uploadProgressLabel }}
                    </div>
                  </div>
                  <q-btn
                    v-if="scope.canAddFiles"
                    type="a"
                    icon="add_box"
                    @click="scope.pickFiles"
                    round
                    dense
                    flat
                  >
                    <q-uploader-add-trigger />
                    <q-tooltip>Pick Files</q-tooltip>
                  </q-btn>
                  <q-btn
                    v-if="scope.canUpload"
                    icon="cloud_upload"
                    @click="scope.upload"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Upload Files</q-tooltip>
                  </q-btn>

                  <q-btn
                    v-if="scope.isUploading"
                    icon="clear"
                    @click="scope.abort"
                    round
                    dense
                    flat
                  >
                    <q-tooltip>Abort Upload</q-tooltip>
                  </q-btn>
                </div>
              </template>
            </q-uploader>
          </div>

        </div>
      </div>
    </q-card>
    <div class="q-gutter-sm">
      <q-btn label="Enregistrer Produit" class="btn" color="primary" @click="showCustom" />
      <q-btn color="red" class="btn" @click="showLoading" label="Annuler" />
    </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import { useQuasar, QSpinnerGears,QSpinnerFacebook } from 'quasar'
import { onBeforeUnmount } from 'vue'

export default {
  setup () {
    const $q = useQuasar()
    function showCustom () {
      const dialog = $q.dialog({
        title: 'Téléchargement des fichiers en cours...',
        message: '0%',
        progress: {
          spinner: QSpinnerGears,
          color: 'amber'
        },
        persistent: true, // we want the user to not be able to close it
        ok: false // we want the user to not be able to close it
      })

      // we simulate some progress here...
      let percentage = 0
      const interval = setInterval(() => {
        percentage = Math.min(100, percentage + Math.floor(Math.random() * 22))

        // we update the dialog
        dialog.update({
          message: `${percentage}%`
        })

        // if we are done...
        if (percentage === 100) {
          clearInterval(interval)

          dialog.update({
            title: 'Fait!',
            message: 'Enregistrement terminé avec succès',
            progress: false,
            ok: true
          })
        }
      }, 500)
    }
    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer)
        $q.loading.hide()
      }
    })

    return {
      showCustom,
      password: ref(''),
      isPwd: ref(true),

      email: ref(''),
      search: ref(''),
      tel: ref(''),
      url: ref(''),
      time: ref(''),
      date: ref(''),
      showLoading () {
        $q.loading.show({
          spinner: QSpinnerFacebook,
          spinnerColor: 'yellow',
          spinnerSize: 140,
          backgroundColor: 'purple',
          message: 'Un processus important est en cours. Attendez...',
          messageColor: 'black'
        })

        // hiding in 3s
        timer = setTimeout(() => {
          $q.loading.hide()
          timer = void 0
        }, 3000)
      }
    }
  }
}
</script>
<style lang="scss">
.icone {
  size: 50px;
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
.q-pa-xs{
  background-color: #DCDCDC;
}
</style>
