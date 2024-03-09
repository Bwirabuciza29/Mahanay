<template>
  <div class="q-pa-md q-gutter-sm">
    <q-btn flat label="Menu" icon="expand_more" color="black" @click="bar = true" />

    <q-dialog v-model="bar" persistent>
      <q-card>
        <q-bar>
          <div>
            <ul class="list-group">
              <li class="list-group-item" v-show="time">{{ time }}</li>
            </ul>
          </div>

          <q-space />

          <q-btn dense flat icon="close" v-close-popup>
            <q-tooltip>Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="q-pa-md row items-start q-gutter-md text-center">
            <TimeLine />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import TimeLine from "./TimeLine.vue";

export default defineComponent({
  components: { TimeLine },
  name: "DateComponent",
  data: () => ({
    time: "",
  }),
  methods: {
    printDate: function () {
      return new Date().toLocaleDateString();
    },
    printTime: function () {
      return new Date().toLocaleTimeString();
    },
    printYear: function () {
      return new Date().getFullYear();
    },
    printTimestamp: function () {
      return Date.now();
    },
    printFullDate: function () {
      return new Date();
    },
  },
  mounted: function () {
    this.date = this.printDate();
    this.time = this.printTime();
    this.timestamp = this.printTimestamp();
    this.year = this.printYear();
    this.fulldatetime = this.printFullDate();
  },

  setup() {
    return {
      // icon: ref(false),
      bar: ref(false),
      // bar2: ref(false),
      // toolbar: ref(false),
    };
  },
});
</script>
