<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers-list></app-servers-list>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
  import appHeader from './components/Shared/Header.vue'
  import appServersList from './components/Server/ServersList.vue'
  import appServerDetails from './components/Server/ServerDetails.vue'
  import appFooter from './components/Shared/Footer.vue'

  export default {
    components: {
      appHeader,
      appServersList,
      appServerDetails,
      appFooter
    }
  }
</script>

<style>

</style>
