<?php
header('Content-Type: text/html;charset=UTF-8');
?>
<!--页面顶部-->
<div id="topbar" class="topbar hidden-xs">
    <div class="topbarcon">
      <div class="topleft">
        <a id="tempBar0" href="#">ENGLISH</a>
        <a id="tempBar1" href="#">政企客户</a>
      </div>
      <div class="topright">
        <div class="dropdown">
          <a id="dropdownMenu2" class="t1 dropdown-toggle rose" href="#">登录</a>

          <div class="dropdown-menu" id="divLoginfcBar">
            <a id="loginYDSC" href="#">登录移动商城</a>
            <a id="loginYYT" href="#">登录网上营业厅</a>
          </div>
        </div>
        <span>|</span>

        <div class="dropdown" id="sjyyt">
          <a class="t2 dropdown-toggle" id="tempBar2" href="#">手机营业厅</a>
          <img src="Images/new.gif">

          <div class="dropdown-menu" id="yytbar">
            <img src="Images/ewm.jpg">

            <p>扫一扫，随时查话费！</p>
          </div>
        </div>
        <span>|</span>
        <a class="t3" id="tempBar3" href="#">积分商城</a>
        <span>|</span>
        <a id="tempBar4" href="#">关于中国移动</a>
        <span>|</span>
        <a id="tempBar5" href="#">联系我们</a>
      </div>
    </div>
  </div>
  <div class="container">
    <div id="middle" class="row headcon">
      <div id="middleLeft" class="col-xs-10 col-sm-6">
        <a class="logo" href="#">
          <img src="Images/logo.png" alt="中国移动欢迎您" class="img-responsive">
        </a>

        <div class="dropdown">
          <div class="topcity" id="dropdownMenu3">合肥</div>
        </div>
      </div>
      <div class="col-sm-6 searchdiv hidden-xs">
        <div class="searchbar input-group">
          <input value="服务密码重置" id="skeywords" autocomplete="off"
                 disableautocomplete="" class="form-control" type="form-control"
                 onfocus="javascript:if(this.value=='服务密码重置'){this.value=''}
               this.style.color = '#333333';"
                 onblur="javascript:if(this.value==''){this.value='服务密码重置'}
               this.style.color ='#ccc'"
                 title="关键字必须至少有一个汉字或英文字母" name="qt" maxlength="20">
          <span class="input-group-btn">
            <input id="searchbtn" type="submit"
                   class="btn" value="搜索">
          </span>
        </div>
        <div class="hot hidden-sm">
          <a id="hotWord0" href="#" class="rose">资费专区</a>
          <a id="hotWord1" href="#">选号入网</a>
          <a id="hotWord2" href="#" class="rose">通话记录查询</a>
          <a id="hotWord3" href="#">服务密码重置</a>
          <a id="hotWord4" href="#" class="rose">实名认证</a>
          <a id="hotWord5" href="#">宽带</a>
        </div>
      </div>
      <div class="col-xs-2 phonenav dropdown visible-xs-block">
        <a class="t1 navbar-toggle" href="#yd-menu"
           data-toggle="collapse">
          <img src="Images/phonenav.png">
        </a>
        <div class="navbar-collapse collapse" id="yd-menu" class="yd-menu">
          <button type="button" class="close" data-toggle="collapse">
            <span>×</span>
          </button>
          <p class="beforelogin">
            <a href="#">登录移动商城</a>
          </p>
          <ul>
            <li><a href="#">网上营业厅</a></li>
            <li><a href="#">手机营业厅</a></li>
            <li><a href="#">积分商城</a></li>
            <li><a href="#">关于中国移动</a></li>
            <li><a href=#">ENGLISH</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="navbar">
      <div class="navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="navindex active" id="navTop4">
            <a id="topA4" href="#">首页</a>
          </li>
          <li class="dropdown" id="navTop0">
            <a class="dropdown-toggle" id="topA0" href="#">移动商城
              <ins></ins>
            </a>
            <ul class="dropdown-menu" id="secMenu0">
              <li><a href="#">买手机</a></li>
              <li><a href="#">办套餐</a></li>
              <li><a href="#">办业务</a></li>
              <li><a href="#">挑配件</a></li>
              <li><a href="#">立即充值</a></li>
              <li><a href="#">个人中心</a></li>
            </ul>
          </li>
          <li class="dropdown" id="navTop1">
            <a class="dropdown-toggle" id="topA1" href="#">我的移动
              <ins></ins>
            </a>
            <ul class="dropdown-menu" id="secMenu1">
              <li><a href="#">我的话费</a></li>
              <li><a href="#">我的详单</a></li>
              <li><a href="#">我的账单</a></li>
              <li><a href="#">我的流量</a></li>
              <li><a href="#">我的宽带信息</a></li>
              <li><a href="#">我已开通业务</a></li>
            </ul>
          </li>
          <li class="dropdown hidden-xs" id="navTop2">
            <a class="dropdown-toggle" id="topA2" href="#">网上营业厅
              <ins></ins>
            </a>
            <ul class="dropdown-menu" id="secMenu2">
              <li><a href="#">选号入网</a></li>
              <li><a href="#">优惠购机</a></li>
              <li><a href="#">移动宽带</a></li>
              <li><a href="#">网上交费</a></li>
              <li><a href="#">套餐精选</a></li>
              <li><a href="#">流量办理</a></li>
            </ul>
          </li>
          <li class="dropdown" id="navTop3">
            <a class="dropdown-toggle" id="topA3" href="#">服务与支持
              <ins></ins>
            </a>
            <ul class="dropdown-menu" id="secMenu3">
              <li><a href="#">产品</a></li>
              <li><a href="#">资费专区</a></li>
              <li><a href="#">终端售后点查询</a></li>
              <li><a href="#">国际、港澳台</a></li>
              <li><a href="#">星级服务</a></li>
              <li><a href="#">优惠专区</a></li>
              <li><a href="#">公告与新闻</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>