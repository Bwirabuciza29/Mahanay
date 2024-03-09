<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        :text="['Etes vous déjà au bureau? je suis un peu bloqué vu embouteillage']"
        sent
        text-color="white"
        bg-color="primary"
      >
        <template v-slot:name>moi</template>
        <template v-slot:stamp>il y'a 7 minutes</template>
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--sent"
            src="~assets/osee (1).jpg"
          />
        </template>
      </q-chat-message>

      <q-chat-message bg-color="grey-4">
        <template v-slot:name>Linda</template>
        <template v-slot:avatar>
          <img
            class="q-message-avatar q-message-avatar--received"
            src="~assets/osee (2).jpg"
          />
        </template>

        <div class="emo">
          Effectivement...
          <img src="https://cdn.quasar.dev/img/discord-qeart.png" class="my-emoji" />
        </div>

        <q-spinner-dots size="2rem" />
      </q-chat-message>

      <!-- MESSAGE INPUT -->
      <q-input rounded outlined label="Message" v-model="fff">
        <template v-slot:before>
          <q-icon name="add_a_photo" />
        </template>
        <template v-slot:append>
          <q-avatar>
            <q-btn round dense flat icon="send" color="primary" />
          </q-avatar>
        </template>
      </q-input>
      <!-- END MESSAGE INPUT -->
    </div>
  </div>
</template>
  <script >
import { ref } from "vue";

</script>

