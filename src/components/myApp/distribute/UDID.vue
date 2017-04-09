<template>
  <div id="udid">
    <h2 class="title">一步快速获取iOS设备的UDID</h2>
    <div class="line"></div>
    <p class="content">使用<span>iPhone</span>或<span>iPad</span>扫描下面的二维码，即可快速获取UDID</p>
    <div><img src="../../../assets/udid.png"/></div>
    <div class="line"></div>
    <div class="bottom">
    	<p><span>注意：</span>如果系统提示输入密码，请输入锁屏密码。</p>
    	<p><span>什么是UDID？</span>UDID，是iOS设备的一个唯一识别码，每台iOS设备都有一个独一无二的编码，这个编码，我们称之为识别码，也叫做UDID（ Unique Device Identifier ）</p>
    </div>
  </div>
</template>

<script>
	export default {
	  name: 'udid',
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	#udid{
		// border: 1px solid #D3DCE6;
		// width: 600px;
		text-align: center;

		.title{
			font-size: 24px;
			margin: 120px 0 40px;
		}

		.line{
			margin: 0 20px;
			height: 0.5px;
			background-color: #D3DCE6;
		}

		.content{
			margin: 20px auto;
			font-size: 16px;

			span{
				color: #13CE66;
			}
		}

		.bottom{
			text-align: left;
			margin: 20px auto;
			width: 600px;
			p{
				font-size: 14px;
				line-height: 1.6;
				span{
					font-weight: 700;
				}
			}
		}
	}
</style>
