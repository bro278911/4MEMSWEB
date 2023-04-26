var mycanvas=document.getElementById('mycanvas');
var cxt=mycanvas.getContext('2d');//canvas getContext 渲染環境
var validate="";

var sColor=["#B22222","#F9F900","#82D900","#FFAF60"];   //干擾線顏色
var fColor=["#804040","#5A5AAD","#408080","#8F4586"];   //文字顏色
var indexColor=""; //顏色組序號

var img = new Image(); 
img.src ="https://i.imgur.com/ssTQW1o.jpg";

/*生成隨機顏色組合序號*/
function randColor(){
    indexColor="";
    indexColor=Math.floor(Math.random()*sColor.length); //亂數取得 0~顏色陣列長度
    return  indexColor;
}
/*干擾線的隨機x坐標值*/
function lineX(){
        var ranLineX=Math.floor(Math.random()*150);
        return ranLineX;
    }

/*干擾線的隨機y坐標值*/
function lineY(){
        var ranLineY=Math.floor(Math.random()*40);
        return ranLineY;
    }

var DD;//數字字串
var D2;//大寫數字字串

//產生驗證碼
function createCode(){
//設定數字
  var aa=[5,6,7,8,9];//十位數
  var bb=[0,1,2,3,4];//個位數
  var cc=['+','-','*'];//運算符號
  //設定大寫數字
  var a2=["五","六","七","八","九"];//十位數
  var b2=["零","一","二","三","四"];//個位數
  var c2=['加','減','乘'];//運算符號
  
  //取得隨機數字
  var r1=Math.floor(Math.random()*aa.length);
  var r2=Math.floor(Math.random()*bb.length);
  var r3=Math.floor(Math.random()*cc.length);
  //alert(r1+"-"+r2+"-"+r3);

  var AA=aa[r1];
  var BB=bb[r2];
  var CC=cc[r3];
  DD="";
  DD=AA+CC+BB;//數字字串
  Md = eval(DD);//透過eval強制運算
    $("#myvad_ans").val(Md);
/*    console.log($("#myvad_ans").val())*/
/*    alert(Md);*/

  var A2=a2[r1];
  var B2=b2[r2];
  var C2=c2[r3];
  D2="";
  D2=A2+C2+B2;//大寫數字字串
  //alert(D2);
  //checkCode.style["font-family"]="Microsoft JhengHei";
  //checkCode.style["font-style"]="normal";
  //重設canvas內容
  mycanvas.width  = mycanvas.width;
  mycanvas.height = mycanvas.height;
  //選取底圖範圍
  cxt.drawImage(img,lineX(),lineY(),150,40,0,0,150,40);
    
  /*生成干擾線2條*/
  for(var j=0; j<2; j++){
     //產生一個新路徑，產生後再使用繪圖指令來設定路徑
    //若省略beginPath，則每點擊一次驗證碼會累積干擾線的條數
     cxt.beginPath(); 
     cxt.strokeStyle=sColor[randColor()];
     cxt.moveTo(0,lineY());//起始點座標
     cxt.lineTo(150,lineY());//從起始點畫一條直線到指定的(x, y)座標點
     cxt.lineWidth=(Math.floor(Math.random()*(20-10+1))+10)/10; //亂數 取得介於1~2之間的值
     cxt.stroke();
     cxt.closePath();
  }
  cxt.fillStyle=fColor[randColor()];//隨機文字顏色
  cxt.font='bold 30px Verdana';
  cxt.fillText(D2,20,30);   //把rand()生成的隨機數文本填充到canvas中  
}

/*點擊驗證碼更換*/
mycanvas.onclick=function(e){
        e.preventDefault();   //阻止滑鼠點擊發生預設的行為
        createCode();
}

/*輸入文字框清空*/ //改用placeholder
/*var myvad=document.getElementById('myvad');
myvad.addEventListener("focus",function(e){
    myform.vad.value="";
});*/
img.onload = function() {
    createCode();
}