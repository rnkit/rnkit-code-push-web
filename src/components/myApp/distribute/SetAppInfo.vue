<template>
	<div id="setAppInfo">
	  <div class="tittle">简单设置下面的信息，您的应用发布即可完成</div>
	  <div class="content">
	  	<div class="top">
	  		<img :src="appInfo.icon">
	  		<p class="version">版本：2.2.2</p>
	  		<p class="type">内测版</p>
	  		<p>包含<span>95</span>台内测设备</p>
	  	</div>
	  	<div class="middle">
	  		<el-form label-position="top" label-suffix="：" label-width="100px">
		      <el-form-item label="名称" required>
		        <el-input placeholder="请输入应用名称" v-model="name"></el-input>
		      </el-form-item>
		      <el-form-item label="应用地址" required>
		        <el-input v-model="address"></el-input>
		      </el-form-item>
		      <el-form-item label="安装方式">
		        <el-select v-model="installType" placeholder="请选择">
					    <el-option
					      v-for="(item,index) in options"
					      :key="index"
					      :label="item.label"
					      :value="item.value">
					    </el-option>
					  </el-select>
		      </el-form-item>
		      <el-form-item label="版本更新说明">
		        <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 5}" placeholder="请输入该版本的更新说明" v-model="updateInfo"></el-input>
		      </el-form-item>
		      <el-form-item label="软件介绍">
		        <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 5}" placeholder="请输入软件介绍" v-model="appIntroduction"></el-input>
		      </el-form-item>
		      <el-form-item label-width="0px">
		        <router-link class="publish" tag="div" :to="{name: 'uploadSuccess'}">
		          <el-button type="primary">发布应用</el-button>
		        </router-link>
		      </el-form-item>
		    </el-form>
	  	</div>
	  </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'setAppInfo',
    data() {
      return {
        name: '',
        address: '',
        options: [{
          value: '选项1',
          label: '公开',
        }, {
          value: '选项2',
          label: '密码安装',
        }, {
          value: '选项3',
          label: '邀请安装',
        }],
        installType: '公开',
        updateInfo: '',
        appIntroduction: '',
      };
    },
    computed: {
      ...mapGetters({
        appInfo: 'appInfo', // app详情
      }),
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#setAppInfo{
  width: 600px;
  margin: 100px auto;

  .tittle{
  	// float: right;
  }

  .content{
  	width: 600px;
  	margin: 50px auto;

  	.top{
  		text-align: center;

  		p{
  			font-size: 14px;
  		}
			
			img{
		    width: 100px;
		    height: 100px;
		  }

  		.version{
  			margin: 10px auto 15px;
  		}

  		.type{
  			font-weight: 700;
  		}

  		span{
				color: #13CE66;
			}
  	}

  	.middle{
  		margin-top: 40px;

  		.publish{
  			text-align: center;
  			margin-top: 40px;
  		}
  	}
  }
}
</style>
