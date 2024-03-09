<template>
  <q-page class="center">
    <div class="container">
      <SeeTables />
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import SeeTables from 'src/components/SeeTables.vue';

export default defineComponent({
  components: { SeeTables },
})
</script>
