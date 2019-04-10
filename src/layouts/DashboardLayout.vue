<template>
  <div>
    Dashboard layout
  </div>
</template>

<script>
export default {
  name: 'DashboardLayout',
  data: () => ({
    logoutDialog: false
  }),
  beforeMount () {
    console.log('mounted')
  }
}
</script>
