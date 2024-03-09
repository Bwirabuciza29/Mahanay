<template>
  <q-page class="center">
    <div class="container">
      <CreateCount />
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CreateCount from 'src/components/CreateCount.vue';

export default defineComponent({
  components: { CreateCount },
  name: 'CreateForm'
})
</script>
