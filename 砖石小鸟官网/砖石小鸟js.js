//  var gwc= document.getElementById("gwc");
//   var nav_text2=document.getElementById("nav_text2");
//
// gwc.onmouseover=function () {
//  var box  =   document.createElement("div");
//   box.style.width=100+"px";
//   box.style.height=100+"px";
//      box.innerHTML="购物车";
//     nav_text2.appendChild(box);
//
// }
// function get() {
//     var bo=document.getElementById("bo");
//     bo.style.display="block";
// }
//  function out() {
//      var bo=document.getElementById("bo");
//      bo.style.display="none";
//  }

//砖石下拉

   function xiala () {
       var zsbox = document.getElementById("zsbox");
       zsbox.style.display="block";
}
   function lala() {
      var zsbox=document.getElementById("zsbox");
       zsbox.style.display="none";
 }
 //婚戒下拉
function huaru1 () {
    var hjbox = document.getElementById("hjbox");
    hjbox.style.display="block";
}
function huachu1() {
    var hjbox=document.getElementById("hjbox");
    hjbox.style.display="none";
}
// 对戒下拉
function huaru2() {
    var djbox = document.getElementById("djbox");
    djbox.style.display="block";
}
function huachu2() {
    var djbox=document.getElementById("djbox");
    djbox.style.display="none";
}
// 配饰下拉
function huaru3() {
    var psbox = document.getElementById("psbox");
    psbox.style.display="block";
}
function huachu3() {
    var psbox=document.getElementById("psbox");
;    psbox.style.display="none";
}
// 定制下拉
function huaru4() {
    var dzbox = document.getElementById("dzbox");
    dzbox.style.display="block";
}
function huachu4() {
    var dzbox=document.getElementById("dzbox");
    dzbox.style.display="none";
}
// 体验下拉
function huaru5() {
    var tybox = document.getElementById("tybox");
    tybox.style.display="block";
}
function huachu5() {
    var tybox=document.getElementById("tybox");
    tybox.style.display="none";
}
// ————————————————————————————

// 图片自动切换

 window.onload=init;
var n=1;
function init() {
 dsq=  window.setInterval("dong()",2000);
}
function dong() {
    var tu=document.getElementById("tu");
    tu.src="imge/mainIMG"+n+".jpg";
    if (n>=5){
        n=1;

    }
    n++;
}
 function yidong() {
     var left=document.getElementById("left");
     var Right=document.getElementById("Right");

     left.style.display="block";
     Right.style.display="block";

    window.clearInterval(dsq);

 }
function yikai() {
    var left=document.getElementById("left");
    var Right=document.getElementById("Right");

    left.style.display="none";
    Right.style.display="none";
  dsq  =   window.setInterval("dong()",2000);

}


// 点箭头图片切换
function shang() {
    n--;
    var arr=["imge/mainIMG1.jpg","imge/mainIMG2.jpg", "imge/mainIMG3.jpg","imge/mainIMG4.jpg"];
    if(n <= 0){
        n =arr.length;

    }
    var tu=  document.getElementById("tu");
    tu.src="imge/mainIMG"+n+".jpg";


}


function xia() {
    n++;
    var arr=["imge/mainIMG1.jpg","imge/mainIMG2.jpg", "imge/mainIMG3.jpg","imge/mainIMG4.jpg"];
    var tu=  document.getElementById("tu");
    tu.src="imge/mainIMG"+n+".jpg";

    if(n>arr.length-1){
        n=0;

    }

}










// maintow隐藏内容
function huadong() {
    var zhuangshi=document.getElementById("zhuangshi");
    zhuangshi.style.display="block";

}
function likai() {
    var zhuangshi=document.getElementById("zhuangshi");
    zhuangshi.style.display="none";

}







