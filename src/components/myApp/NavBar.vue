<template>
  <div id="nav-bar">
    <el-dropdown :hide-on-click="true" @command="handleCommand">
      <span class="changeApp">切换应用<i class="el-icon-caret-bottom el-icon--right"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item, index) in appList" :key="index" command="item.key">{{item.name}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="navgation">
      <router-link :to="{name: 'appCont', params: { type: 'hotUpdate' }}" class="navIcon unActiveClass" >热更新</router-link>
      <router-link :to="{name: 'appCont', params: { type: 'distribute' }}" class="navIcon unActiveClass" >应用分发</router-link>
      <router-link :to="{name: 'appCont', params: { type: 'statistics' }}" class="navIcon unActiveClass" >流量统计</router-link>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'navBar',
    data() {
      return {
        // loginState: true
      };
    },
    computed: {
      ...mapGetters({
        appList: 'appList', // 应用列表
      }),
    },
    methods: {
      handleCommand(command) {
        this.$router.push({ name: 'appCont', params: { key: command, type: 'hotUpdate' } });
      },
    },
  };
</script>

<style lang="scss" scoped>
@mixin linear-gradient($color:#58B7FF) {
  background: -webkit-linear-gradient(left,$color,transparent); /* Safari 5.1 - 6 */
  background: -o-linear-gradient(right,$color,transparent); /* Opera 11.1 - 12*/
  background: -moz-linear-gradient(right,$color,transparent); /* Firefox 3.6 - 15*/
  background: linear-gradient(to right,$color,transparent); /* 标准的语法 */
}
#nav-bar {
  // height: 50px;
  // @include linear-gradient(#1F2D3D);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #20A0FF;
  padding: 0px 50px;
  height: 40px;
  .changeApp{
    font-size: 20px;
    color: #ffffff;
    font-weight: bold;
    margin-left: 10px;
  }
  .navgation{

    .navIcon {
      padding: 0 10px; 
      font-size: 16px;
      display: inline-block;
      height: 40px;
      line-height: 40px;
    }
    .unActiveClass{
      color: #D3DCE6;
      text-decoration: none;
      &:hover{
        color: #ffffff;
      }
    }

    .router-link-active{
      border-bottom: 2px solid #E5E9F2;
      color: #ffffff;
    }
  }
}
</style>
