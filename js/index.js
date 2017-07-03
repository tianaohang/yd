////异步加载页头页尾
$('#header').load('header.php', function () {
  $('#yd-menu .close').click(function () {
    $('#yd-menu').css('display', 'none');
  });
  $('.phonenav .t1').click(function () {
    $('#yd-menu').css('display', 'block');
  });
});
$('div#footer').load('footer.php');

$('.help-list h2 a').click(function (e) {
  e.preventDefault();
  var linkGroup = $(this).parent('h2').siblings('.linkgroup');
  if (linkGroup.css('display') == 'none') {
    linkGroup.css('display', 'block');
    $(this).html('×');
  } else {
    linkGroup.css('display', 'none');
    $(this).html('+');
  }
});

//充值缴费
$(".insselect").on("click","a",function(e){
  e.preventDefault();
  $(this).addClass('on').siblings('.on').removeClass('on');
});

//主广告轮播图
var imgs = [
  {"img": "Images/banner_01.jpg", "title": "HUAWEI nova 正式发售"},
  {"img": "Images/banner_02.jpg", "title": "宽带钜惠，电子券“任性”送"},
  {"img": "Images/banner_03.jpg", "title": "我的特权我做主"},
  {"img": "Images/banner_04.jpg", "title": "华为P9（青春版）"},
  {"img": "Images/banner_05.jpg", "title": "iPhone7 正式发售"},
  {"img": "Images/banner_06.jpg", "title": "华为P9（定制版32G）"},
  {"img": "Images/banner_07.jpg", "title": "上学用移动，4G+嗨起来"},
  {"img": "Images/banner_08.jpg", "title": "优惠购机，手机任你选"}
];
for (var i = 0, bannerHtml = ''; i < imgs.length; i++) {
  bannerHtml += `
    <div class="item">
      <a href="#">
       <img src="${imgs[i].img}" title="${imgs[i].title}">
      </a>
    </div>
  `;
}
$('.banner .carousel-inner').html(bannerHtml);
$('.banner .carousel-inner .item:first-child').addClass('active');
var slideHtml = "";
slideHtml += `<ul class="carousel-indicators">`;
for (var j = 0; j < imgs.length; j++) {
  slideHtml += `
    <li title="${imgs[j].title}" data-target="#carousel-example-captions" data-slide-to="${i}"></li>
  `;
}
slideHtml += `</ul>`;
$('.banner .carousel-inner').append(slideHtml);
$('.banner .carousel-inner li:first-child').addClass('active');

//优惠促销图数据--仿php
var yh_imgs = [
  {"img": "Images/yhcx_banner_1.png", "title": "安徽移动掌上营业厅", "H1": "安徽移动手机营业厅", "H2": "便捷服务，一触即发"},
  {"img": "Images/yhcx_banner_2.png", "title": "移动光宽带", "H1": "宽带大升级", "H2": "开启高速新旅程"},
  {"img": "Images/yhcx_banner_3.png", "title": "流量套餐", "H1": "流量季包/半年包", "H2": "流量不月结，畅玩敢越界"},
  {"img": "Images/yhcx_banner_4.png", "title": "和聚宝", "H1": "理财产品和聚宝", "H2": "奖金存这里，享受高收益"}
];
for (var i = 0, yh_html = ""; i < yh_imgs.length; i++) {
  yh_html += `
    <div class="indexbox">
      <a href="#" class="lianjie1">
       <h1>${yh_imgs[i].H1}</h1>
       <h2>${yh_imgs[i].H2}</h2>
      </a>
      <a href="#" class="lianjie2">
        <img title="${yh_imgs[i].title}" src="${yh_imgs[i].img}" class="indeximg">
      </a>
     </div>
  `;
}
$('.yhcx .yhgundong').append(yh_html);

//优惠促销轮播图
(function () {
  var moveDirection = true;//控制左右移动
  var moveTimer = null;//移动定时器
  var moveTimerGapless = null;//无缝移动定时器

  var isPause = true;//控制是否连续运动还是每个图片停顿
  var pauseTime = 4000;//默认运动间隔
  var speed = 5;//每次移动像素
  var distance = parseInt($(".indexbox").outerWidth(true));//滚动距离
  var imgWidth = parseInt($(".indexbox").first().outerWidth(true));//单个图片div宽度

  $(window).resize(function () {
    imgWidth = parseInt($(".indexbox").first().outerWidth(true));//单个图片div宽度
  });

  //初始化--图片翻倍 相对定位 增加最外层宽度
  var allImages = $(".yhgundong").children().clone(true);//图片复制
  $(".yhgundong").append(allImages);
  var length = $(".yhgundong").children().length;//图片总长度
  $(".yhgundong").css({"position": "absolute", "left": "0px", "width": length * distance});
  $(window).resize(function () {
    $(".yhgundong").css({"position": "absolute", "left": "0px", "width": length * distance});

  });


  //开始运动函数
  function startMove(bLeft) {
    moveDirection = bLeft;

    if (moveTimer) {
      clearInterval(moveTimer);
    }
    if (moveTimerGapless) {
      clearTimeout(moveTimerGapless);
    }

    moveTimer = setInterval(doMove, 5);
  }


  //停止运动函数
  function stopMove() {
    clearInterval(moveTimer);
    moveTimer = null;
  }

  //pc端添加事件

  $(".yhnext").hide();
  $(".yhpre").hide();
  $(".yhgundong div").on({
    "mouseover": function () {
      stopMove();
    },
    "mouseout": function () {
      startMove(moveDirection);
    }
  });
  $(".yhnext").show();
  $(".yhpre").show();

  $(".yhpre").click(function () {
    startMove(false);
  });
  $(".yhnext").click(function () {
    startMove(true);
  });


  startMove(false);


  //运动函数执行一次left改变speed
  function doMove() {
    var scrollElement = $(".yhgundong");
    var left = parseInt($(".yhgundong").css("left"));

    if (moveDirection) {

      left += speed;
      if (left >= 0) {
        left -= length * distance / 2;
      }

    } else {
      left -= speed;
      if (left <= -length * distance / 2) {

        left += length * distance / 2;

      }
    }

    if (isPause) {

      if (Math.abs(left - Math.round(left / imgWidth) * imgWidth) < Math.ceil(speed / 2)) {
        stopMove();
        moveTimerGapless = setTimeout
        (
          function () {
            startMove(moveDirection);
          }, pauseTime
        );

        left = Math.round(left / imgWidth) * imgWidth;
      }
    }


    $(".yhgundong").css("left", left);
  }

}());


//快速显示title
$.fn.extend({
  showTitle: function () {
    var x = 10, y = 20;
    this.mouseover(function (e) {
      this.myTitle = this.title;
      this.title = "";
      var showDiv = "<div id='showDiv' style='z-index:9999;position: absolute;border: solid 1px #dfdfdf;background-color: white;padding: 0 2px;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;'>" + this.myTitle + "</div>";
      $("body").append(showDiv);
      $("#showDiv").css({
        "top": (e.pageY + y) + "px",
        "left": (e.pageX + x) + "px"
      }).show("fast");
    }).mouseout(function () {
      this.title = this.myTitle;
      $("#showDiv").remove();
    }).mousemove(function (e) {
      $("#showDiv").css({
        "top": (e.pageY + y) + "px",
        "left": (e.pageX + x) + "px"
      });
    });
  }
});

//主广告轮播图 title
$(".banner img").showTitle();
$(".banner ul li").showTitle();
//优惠促销滚动图 title
$(".yhcx img").showTitle();
//4G专区 title
$(".fourg img").showTitle();
//买手机 title
$(".buyphone img").showTitle();
//业务推荐
$(".ywtj img").showTitle();
//公告
$(".indexgg li a").showTitle();

//图片晃动
if ($(document.body).outerWidth(true) > 768) {
  //4G专区图片晃动
  $(".fourg .row .indexboxcon img").mouseover(function () {
    $(this).animate({right: "10px"}, 250);
  }).mouseout(function () {
    $(this).animate({right: "0px"}, 250);
  });
  //买手机区图片晃动
  $(".buyphone .row img").mouseover(function () {
    $(this).animate({right: "10px"}, 250);
  }).mouseout(function () {
    $(this).animate({right: "0px"}, 250);
  });
  //业务推荐去图片晃动
  $(".ywtj .row .indexboxcon img").mouseover(function () {
    $(this).animate({right: "10px"}, 250);
  }).mouseout(function () {
    $(this).animate({right: "0px"}, 250);
  });
}

//公告滚动
var gg_move=function () {
  var ul = $(".indexgg ul");
  var interval = null;
  var timeOut = null;
  //向右运动
  var funcRight = function () {
    $(".indexgg ul li:first").appendTo(ul);
  };
  //向左运动
  var funcLeft = function () {
    $(".indexgg ul li:last").prependTo(ul);
  };

  function do_move() {
    if (interval) {
      clearInterval(interval);
    }
    interval = setInterval(funcRight, 4000);
  }

  function stop_move() {
    clearInterval(interval);
    interval = null;
  }

  do_move();

  $(".qhbtn").on({
    "mouseover": function () {
      stop_move();
    },
    "mouseout": function () {
      do_move();
    }
  });

  $(".indexgg ul").on({
    "mouseover": function () {
      clearInterval(interval);
    },
    "mouseout": function () {
      if (interval) {
        clearInterval(interval);
      }
      interval = setInterval(funcRight, 4000);
    }
  });

  $(".qhbtn .left").click(function () {
    if (interval) {
      clearInterval(interval);
    }
    funcLeft();
  });

  $(".qhbtn .right").click(function () {
    if (interval) {
      clearInterval(interval);
    }
    funcRight();
  });
};
gg_move();

//在线客服
$(".rfu>div").hover(function(){
  $(this).animate({left:-84+"px"},500);
},function(){
  $(this).animate({left:-20+"px"},500);
});













