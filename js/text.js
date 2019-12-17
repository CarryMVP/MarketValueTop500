function int() {
    var size = $('body').width() * 0.15625;
    var width = $('html').css('font-size', size + 'px');
    $('body').css('visibility', 'visible');
};
int();	//rem，px


var imgNum = 0;
var images = [];
function preloadImg() {
    //把所有该网页上用到的图片文件都预先放入一个数组里 
    $.imgpreload(['images/bg.png'], function () {
        //此处是显示进度百分比时需要用到的背景图，这个可以先加载进去
    });
    //then push all other images in array to load 
    images.push("images/bg.png");
    images.push("images/btn.png");
    images.push("images/all.png");
    images.push("images/banner.png");
    images.push("images/jt.png");
    images.push("images/logo.png");
    images.push("images/close.png");
    /*这里是真正的图片预加载 preload*/
    $.imgpreload(images, {
        each: function () {
            /*this will be called after each image loaded*/
            var status = $(this).data('loaded') ? 'success' : 'error';
            if (status == "success") {
                var v = (parseFloat(++imgNum) / images.length).toFixed(2);
                $("#percentShow").html(Math.round(v * 100) + "<sup>%</sup>");
            }
        },
        all: function () {
            /*this will be called after all images loaded*/
            $("#percentShow ").html("100<sup>%</sup>");
            $(".load").hide();
        }
    });
};
//load加载
preloadImg();
var len = 0;
var widht1 = $(window).width();
var height1 = $(window).height();
$('.end').css('height', height1);
var bar = setInterval(function () {
    if (len > 98) {
        $(".process-txt").html("加载 " + "100%");
        clearInterval(bar);
        $(".process").hide();
        $('.page1').css('visibility', 'visible');
    }
    else {
        $(".process-txt").html("加载 " + (++len) + "%");
    }
}, 10);