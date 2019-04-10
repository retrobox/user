<v-snackbar
  :right="true"
  :bottom="$store.state.isMobile"
  :top="!$store.state.isMobile"
  :color="$store.state.alert.color"
  :multi-line="true"
  :vertical="$store.state.isMobile"
  v-if="$store.state.alert.location === 'global'"
  v-model="$store.state.alert.enabled"
>
  {{ $store.state.alert.text }}
  <v-layout justify-end>
    <v-btn flat class="px-2" @click="$store.commit('DISABLE_ALERT')">
      {{ $t('app.close') }}
    </v-btn>
  </v-layout>
</v-snackbar>
