<template>
  <q-page class="center">
    <div class="container">
      <FormData />
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import FormData from 'src/components/FormData.vue';

export default defineComponent({
  components: { FormData },
  name: 'FormulaireProduit'
})
</script>

