<template>
	  <!-- 底部固定 -->
      <footer>
        <ul>
          <li ><router-link to="/" tag="a" class="one"></router-link></li>
          <li><router-link to="/type" tag="a" class="two"></router-link></li>
          <li><router-link to="/cart" tag="a" class="three"></router-link></li>
          <li><router-link to="/me" tag="a" class="four"></router-link></li>
        </ul>
      </footer>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
    }
  }

}
</script>
<style scoped lang="scss">
/*加载公共的样式*/
@import '../../assets/css/base.scss';

/*底部固定*/
footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #eee;
  z-index: 100;
  ul li a.one {
    float: left;
    width: 25%;
    height: rem(100px);
    background: url(../../../static/images/footer/1.png) no-repeat;
    background-size: rem(188px);
  }
  a.two {
    float: left;
    width: 25%;
    height: rem(100px);
    background: url(../../../static/images/footer/2.png) no-repeat;
    background-size: rem(188px);
  }
  a.three {
    float: left;
    width: 25%;
    height: rem(100px);
    background: url(../../../static/images/footer/3.png) no-repeat;
    background-size: rem(188px);
  }
  a.four {
    float: left;
    width: 25%;
    height: rem(100px);
    background: url(../../../static/images/footer/4.png) no-repeat;
    background-size: rem(188px);
  }
}


</style>