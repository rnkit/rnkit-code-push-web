<template>
  <div id="upload">
    <el-upload
      class="upload-demo"
      drag
      action="upload_url"
      data="options"
      mutiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">支持.ipa或.apk文件，单个文件最大支持2G</div>
    </el-upload>
  </div>
</template>

<script>
  // import { API_HOST } from '../api/config'
  export default {
    name: 'upload',
    // data() {
    //   return {
    //     upload_url: API_HOST + 'app/create',
    //     options: {},
    //   };
    // },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #upload{
    margin: 260px auto;
    text-align: center;
  }
</style>
