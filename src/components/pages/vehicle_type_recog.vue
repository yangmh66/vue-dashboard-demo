<template>
  <div class="m-4 container">
    <img
      class="img-responsive center-block"
      src="https://img.youtube.com/vi/CD1sjh5SWK4/hqdefault.jpg"
    />

    <!-- Group of default radios - option 1 -->
    <div class="custom-control custom-radio">
      <input
        type="radio"
        class="custom-control-input"
        id="defaultGroupExample1"
        name="groupOfDefaultRadios"
        checked
      />
      <label class="custom-control-label" for="defaultGroupExample1">汽車</label>
    </div>

    <!-- Group of default radios - option 2 -->
    <div class="custom-control custom-radio">
      <input
        type="radio"
        class="custom-control-input"
        id="defaultGroupExample2"
        name="groupOfDefaultRadios"
      />
      <label class="custom-control-label" for="defaultGroupExample2">巴士</label>
    </div>
    <!-- Group of default radios - option 3 -->
    <div class="custom-control custom-radio">
      <input
        type="radio"
        class="custom-control-input"
        id="defaultGroupExample3"
        name="groupOfDefaultRadios"
      />
      <label class="custom-control-label" for="defaultGroupExample3">卡車</label>
    </div>
    <button type="button" class="m-1 btn btn-primary" disabled>確認</button>
    <button type="button" class="m-1 btn btn-primary">取消</button>
  </div>
</template>

<script>
export default {
  name: "VehicleTypeRecog",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>


