<template>
  <v-content>
    <v-container fluid fill-height px-0 py-0>
      <v-layout fill-height column>
        <v-layout align-center justify-center>
          <v-fade-transition mode="out-in">
            <div v-if="$store.state.isLoading === false">
              <v-fade-transition mode="out-in">
                <slot></slot>
              </v-fade-transition>
            </div>
            <v-progress-circular
              v-if="$store.state.isLoading === true && $store.state.loadingType === 'normal'"
              indeterminate
              color="primary"
              size="50"></v-progress-circular>
          </v-fade-transition>
        </v-layout>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'CenterLayout'
}
</script>
