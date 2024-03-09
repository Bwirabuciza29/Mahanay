<template>
  <div class="q-pa-md  items-start q-gutter-md">
    <q-card class="my-card">
        <div class="q-pa-md  justify-center">
          <div style="width: 100%; max-width: 400px">
            <q-chat-message
              :text="['Hey vous êtes là?']"
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
                >
              </template>
            </q-chat-message>

            <q-chat-message
              bg-color="amber"
            >
              <template v-slot:name>Mary</template>
              <template v-slot:avatar>
                <img
                  class="q-message-avatar q-message-avatar--received"
                  src="~assets/osee (2).jpg"
                >
              </template>

              <div>
                il y'a à peine quelques minutes ouais...
                <img src="~assets/osee (2).jpg" class="my-emoji">
              </div>

              <q-spinner-dots size="2rem" />
            </q-chat-message>
             <!-- MESSAGE INPUT -->
      <q-input rounded outlined label="Message" >
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

    </q-card>
  </div>
</template>
<style lang="sass">
.my-emoji
  vertical-align: middle
  height: 2em
  width: 2em
</style>
