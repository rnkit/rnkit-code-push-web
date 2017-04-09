<template>
	<div id="download">
	  <div class="top">
	  	<div>跟单宝</div>
	  	<div>版本：2.2.2(build 29) / 大小：12.9MB / 2017-03-14</div>
	  </div>
	  <div class="line"></div>
	  <div class="load">
	  	<div><img class="appIcon" src=""></div>
	  	<el-button type="primary">点击安装</el-button>
	  	<div class="info">
		  	<div class="device">适用于iOS设备</div>
		  	<div class="type">内测版</div>
	  	</div>
	  	<div class="dashedLine"></div>
	  	<p>或者用手机扫描下面的二维码安装</p>
	  	<img class="twoDCode" src="">
	  </div>
		<div class="dashedLine"></div>
  </div>
</template>

<script>
	export default {
	  name: 'download',
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@mixin border-radius($px){
		-moz-border-radius: $px; /* Firefox */
	  -webkit-border-radius: $px; /* Safari 和 Chrome */
	  border-radius: $px; /* Opera 10.5+, 以及使用了IE-CSS3的IE浏览器 */
	}
	#download{
		width: 600px;
    	margin: 100px auto;
		.top{
			margin: 20px auto;
			display: flex;
			justify-content: space-between;
		}

		.line{
			border-top: 0.5px solid #D3DCE6;
		}

		.load{
			width: 100%;
			text-align: center;

		  .appIcon{
		    width: 100px;
		    height: 100px;
		    display: inline-block;
		    margin: 60px 0 30px;
		  }

		  .info{
		  	width: 170px;
		  	margin: 20px auto;
		  	font-size: 14px;
		  	color: #ffffff;
		  	display: flex;
		  	justify-content: space-between;
				
				.device{
					background-color: #13CE66;
					@include border-radius(5px);
					padding: 0 4px;
				}

				.type{
					background-color: #FF4949;
					@include border-radius(4px);
					padding: 0 4px;
				}

		  }

		  .dashedLine{
		  	margin: 30px 0;
				border-top: 0.5px dashed #D3DCE6;
		  }

		  p{
		  	font-size: 14px;
		  	margin: 40px auto;
		  }

		  .twoDCode{
		  	width: 156px;
		    height: 156px;
		  }
		}

	}
</style>
