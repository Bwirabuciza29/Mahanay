<template>
  <q-page class="center">
    <div class="container">
      <AddRevenu />
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import AddRevenu from 'src/components/AddRevenu.vue';

export default defineComponent({
  components: { AddRevenu },
  name: 'FormulaireProduit'
})
</script>

