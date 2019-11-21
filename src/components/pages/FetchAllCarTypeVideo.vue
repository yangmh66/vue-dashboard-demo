<!--
<template>
   <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getPageData(2)">取得該頁資料</button>

    <ul v-for="(entry, index) in pageEntry" :key="entry.index">
      <li>
        <a>{{index}}.{{entry.youtubeId}}, {{entry.Object}}, {{entry.filename}}</a>
      </li>
    </ul>
  </div>
</template>
-->
<template>
  <div id="app" class="align-items-center">
    <br />
    <!-- <div>currentPage: {{currentPage}}</div> -->
    <b-pagination
      size="md"
      :total-rows="totalItems"
      v-model="currentPage"
      :per-page="perPage"
      @input="getPageData(currentPage)"
      align="center"
    ></b-pagination>
    <div class="row">
      <div class="col-md-12">

        <table class="table mt-4">
<thead>
<tr>
<th width="120">項目</th>
<th>工作影片名稱</th>

<th width="120">點選接案</th>
</tr>
</thead>
<tbody>


<tr v-for="(entry, index) in pageEntry" :key="entry.index">
<td>{{ index+(currentPage-1)*perPage+1 }}</td>
<td>{{entry.title}}</td>

<td>
<div>
<button class="btn btn-outline-primary btn-sm">接案</button>

</div>
</td>
</tr>
</tbody>
</table>
      </div>
    </div>
    <br />

  </div>
</template>

<script>
//Import axios for REST API calls
import axios from "axios";
import VueAxios from "vue-axios";
//Import bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
//Import bootstrap vue CSS
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "FetchAllCarTypeVideo",
  props: {
    msg: String
  },

  data: function() {
    return {

      allEntry: [],//fetch all entry's items

      currentPage: 1,
      perPage: 10,
      pageEntry: [],
      totalItems: 0,
      imgUrl: ""
    };
  },
  methods: {
    getPageData: function(currentPage = 1) {
      let self = this;
      let totalEntry = self.allEntry;
      console.log("In getPageData");
      console.log("perPage =", self.perPage);
      console.log("totalEntry =", totalEntry);
      console.log(totalEntry.slice(0, self.perPage));
      self.pageEntry = totalEntry.slice(
        self.perPage * (currentPage - 1),
        self.perPage * currentPage
      );
      console.log(self.pageEntry);
    },
    downLoadJpg: function() {
      let self = this;
      let url =
        "http://10.174.61.1:50016/filterfun/getYoloImg/04jm7VfInbo/res_00000024.jpg";
      console.log("url: ", url);

      axios.get(url, { responseType: "blob" }).then(function(response) {
        const content = response.data; //返回的文件流
        console.log("content:", content);
        const cnHeader = response.headers; //返回的headers

        const blob = new Blob([content], { type: "image/jpeg" });

        self.imgUrl = window.URL.createObjectURL(blob);
        console.log(cnHeader);

        console.log(self.imgUrl);


      });
    }
  },

  created: function() {
    let self = this;
    axios({
      methods: "get",
      url: "http://10.174.61.1:50016/dataset/queryTrainTwOrg"
    }).then(response => {
      //self.data = response.data;
      console.log(response.data.message.data);
      console.log(response.data.message.data.length);
      var resdata = response.data.message.data;
      self.allEntry = resdata;
      self.totalItems = response.data.message.data.length;
      console.log(self.totalItems);
      console.log(self.allEntry);

      this.getPageData(1); //init first page
    });
  },
  mounted: function() {
    // let self = this;
  }
};
</script>
