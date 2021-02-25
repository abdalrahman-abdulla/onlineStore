<template>
  <div class="user">
    
    <navbar />
    <div class="row m-0 p-0">
      <vue-page-transition class="w-100">
        <router-view :key="$route.path" />
      </vue-page-transition>
      <Footer-nav/>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar.vue";
import FooterNav from "@/components/footer.vue"; 

export default {
  name: "user",
  components: {
    navbar,
    FooterNav
  },
  methods: {
    
  },
  mounted() { 
  },
};
</script>
<style lang="scss" scoped>
@import '../assets/css/variables.scss';

</style>
