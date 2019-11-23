<template>
  <div>
    <KontaktForm></KontaktForm>
  </div>
</template>

<script>
import KontaktForm from '@/components/KontaktForm.vue'
export default {
  components: {
    KontaktForm
  },
  created () {
    this.$store.commit('setOnHomePage', false)
  }
}
</script>

<style>

</style>
