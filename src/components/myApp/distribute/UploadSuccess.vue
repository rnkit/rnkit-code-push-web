<template>
	<div id="uploadSuccess">
	  <img class="appImg" src="">
    <div class="successTips">
      <i class="el-icon-circle-check successIcon"></i><span>您的应用</span><span class="appName">跟单宝</span><span>已经上传成功啦！</span>
    </div>
    <router-link class="toDownLoad" tag="div" :to="{name: 'download'}">
      <el-button icon="document" type="primary">查看下载页</el-button>
    </router-link>
    <div class="line"></div>
    <div class="btn">
      <router-link tag="div" :to="{name: 'upload'}">
        <el-button icon="upload2" :plain="true" type="info">继续上传</el-button>
      </router-link>
      <router-link tag="div" :to="{name: 'manage'}">
        <el-button icon="menu" :plain="true" type="info">应用管理</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'uploadSuccess',
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #uploadSuccess{
    width: 600px;
    margin: 100px auto;

    .appImg{
      width: 100px;
      height: 100px;
      margin: 0 auto;
      display: block;
    }
    
    .successTips{
      margin: 60px 100px 70px;
      font-size: 22px;
      
      .successIcon{
        // background-color: #13CE66;
      }

      .appName{
        color: #13CE66;
      }
    }

    .toDownLoad{
      text-align: center;
    }

    .line{
      margin: 40px 0px 30px;
      height: 0.5px;
      background-color: #D3DCE6;
    }

    .btn{
      display: flex;
      justify-content: space-between;
      padding: 0px 100px;
    }

  }
</style>
