<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-center">
        <div id="app">
          
            <router-view/>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    const api =`${process.env.APIPATH}/api/${process.env.COSTOMPATH}/products`;
    console.log(process.env.APIPATH, process.env.COSTOMPATH);
     //api申請的路經
     //所申請的API path
    this.$http.get(api).then((response) => {
      console.log(response.data)
})
  }
}
</script>

<style lang=scss>
.container{
  /* margin: 0 auto; */
  text-align: center;
}

@import "./assets/all";



</style>
