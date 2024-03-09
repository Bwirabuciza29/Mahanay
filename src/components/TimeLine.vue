<template>
  <div class="q-px-lg q-pb-md">
    <q-timeline :layout="layout" color="secondary">
      <q-timeline-entry title="Les Tendances" subtitle="Les Tendances" side="left" icon="trending_up" color="red">
        <div>
          <ol>
            <li class="text-justify">Meilleurs Offres</li>
            <li class="text-justify">Meilleurs Ventes</li>
            <li class="text-justify">Statistiques</li>
          </ol>
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Les Proprietés intellectuelles" subtitle="Les Proprietés intellectuelles" side="right"
        icon="real_estate_agent" color="black">
        <div>
          <ol>
            <li class="text-justify">Livre, Plan et Architecture</li>
            <li class="text-justify">Licences</li>
            <li class="text-justify">Code Project</li>
            <li class="text-justify">Oeuvres Artistiques</li>
          </ol>
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Numérique et Appareils" icon="phonelink_setup" subtitle="Numérique et Appareils"
        side="left" color="yellow">
        <div>
          <ol>
            <li class="text-justify">Informatiques</li>
            <li class="text-justify">Téléphonies</li>
            <li class="text-justify">Télécommunication</li>
            <li class="text-justify">Elecro-mécaniqes</li>
            <li class="text-justify">Ménagers</li>
            <li class="text-justify">Autres</li>
          </ol>
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Les Ménages" icon="home" subtitle="Les Ménages" side="right" color="blue">
        <div>
          <ol>
            <li class="text-justify">Cuisines</li>
            <li class="text-justify">Tapis</li>
            <li class="text-justify">Rideaux</li>
            <li class="text-justify">Autres Accessoires</li>
          </ol>
        </div>
      </q-timeline-entry>

      <q-timeline-entry title="Habillements Mode" subtitle="Habillements Mode" side="left" color="pink"
        icon="shopping_bag">
        <div>
          <ol>
            <li class="text-justify">1950 à 1970</li>
            <li class="text-justify">1970 à 1990</li>
            <li class="text-justify">1990 à 20210</li>
            <li class="text-justify">2010 à 2020</li>
            <li class="text-justify">2020 à Aujourd'hui</li>
          </ol>
        </div>
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>
<script>
import { useQuasar } from 'quasar'
import { computed } from 'vue'

export default {
  setup() {
    const $q = useQuasar()

    return {
      layout: computed(() => {
        return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
      })
    }
  }
}
</script>
