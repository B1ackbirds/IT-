var x=document.getElementsByClassName("box");
var open;
var d,e,f;
// 点击开始闪啊闪
function myFunction(){
    reset();
    box1();
  random()
        time()
        three_col()
                
    }     

    // 点击关闭闪啊闪
    function MyFunction(){
        clearTimeout(open);
        reset();
        back();
    }




    // 抽取三个随机数
    function random(){
        var a=new Array();
    for(var i=0;i<1;i++){
     d=Math.floor(Math.random()*(x.length));
    e=Math.floor(Math.random()*(x.length));
    f=Math.floor(Math.random()*(x.length));
if (d==e||e==f||f==d){
   i--;
}
else{
    a.push(d,e,f);
}
        }
    }



    // 计时器
    function time(){
        clearTimeout(open);
       open=setTimeout("myFunction()",1000);
    }

// 每次变换3个
    function three_col(){
        x[d].style.backgroundColor=color();
        x[e].style.backgroundColor=color();
        x[f].style.backgroundColor=color();
    }


//    每次换色循环后循环这个橙色
function reset(){
box2();
    for(var i=0;i<x.length;i++ ){
       x[i].style.backgroundColor="rgb(255,166,0)";
      
    }
} 

// 随机三个颜色
    function color(){
     var r=Math.floor(Math.random()*256);
     var g=Math.floor(Math.random()*256);
     var b=Math.floor(Math.random()*256);
     console.log(r,g,b);
     return "rgb("+r+","+g+","+b+")";
     
    }
// 以下是按钮换色
function box1(){
    document.getElementById("box1").style.color="white";
    document.getElementById("box1").style.backgroundColor="red";
    document.getElementById("box2").style.color="red";
    document.getElementById("box2").style.backgroundColor="white";
}

function box2(){
    document.getElementById("box1").style.color="red";
    document.getElementById("box1").style.backgroundColor="white";
    document.getElementById("box2").style.color="white";
    document.getElementById("box2").style.backgroundColor="red";
}

function back(){
    setTimeout(function(){
        document.getElementById("box2").style.color="red";
        document.getElementById("box2").style.backgroundColor="white";
    },1000)
}
