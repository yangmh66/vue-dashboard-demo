<template>
  <div class="m-3 container">
    <img
      class="img-responsive center-block"
      src="https://img.youtube.com/vi/-8T3is64kmU/hqdefault.jpg"
    />

    <!-- <div class="m-4 col-xs-3 form-group">
  <label > 辨識車牌: </label>
  <input type="text" class="form-control" id="lpr">
    </div>-->

    <div class="m-3 form-group w-25">
      <label for="example1">辨識車牌:</label>
      <input type="text" class="form-control" id="example1" placeholder="4523F0" />

      <button type="button" class="m-1 btn btn-primary" disabled>確認</button>
      <button type="button" class="m-1 btn btn-primary" >取消</button>
    </div>
  </div>
</template>




<script>
export default {
  name: "LIcensePlateRecog",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
