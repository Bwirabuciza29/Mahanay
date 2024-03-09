<template>
  <q-page class="center">
    <div class="container">
      <PremiumCo />
    </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import PremiumCo from 'src/components/PremiumCo.vue';

export default defineComponent({
  components: { PremiumCo },
  name: 'Premium'
})
</script>
