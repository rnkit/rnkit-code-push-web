<template>
  <div id="distribution">
    <div id="leftMenu">      
	    <router-link :to="{name: 'upload'}" class="navIcon unActiveClass" active-class="activeClass">应用上传</router-link>
	    <router-link :to="{name: 'manage'}" class="navIcon unActiveClass" active-class="activeClass">应用管理</router-link>
	    <router-link :to="{name: 'udid'}" class="navIcon unActiveClass" active-class="activeClass">UDID</router-link>
    </div>

    <div id="right">
    	<router-view></router-view>
    </div>
  </div>
</template>

<script>
	export default {
	  name: 'distribution',
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#distribution{
	display: flex;
	#leftMenu{
		margin-top: 60px;

		.navIcon{
			font-size: 16px;
			display: block;
			margin-bottom: 30px;
		}

		.unActiveClass{
	      color: #000000;
	      text-decoration: none;
	    }

	    .activeClass{
	      color: #20A0FF;
	    }
	}
	#right{
		// text-align: center;
		// margin: 60px auto;
		display: flex;
		flex: 1;
	}
}
</style>
