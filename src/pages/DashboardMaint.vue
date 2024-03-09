<template>
  <MaintenanceDash />
</template>
<script>
import { defineComponent } from 'vue'
import MaintenanceDash from 'src/components/MaintenanceDash.vue';

export default defineComponent({
  components: { MaintenanceDash },
  name: 'DashboardMaintenance'
})
</script>
