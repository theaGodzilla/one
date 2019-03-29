// import './js/base';
import './sass/base.scss';
import './sass/index.scss';

SPA_RESOLVE_INIT = function(transition) { 
    
	document.getElementsByTagName("body")[0].innerHTML = `
	    <p style="color:#099fde;">当前异步渲染首页（积分购买页）
	`+ JSON.stringify(transition) +`</p>`;
	console.log("首页回调" + JSON.stringify(transition))
}

// window.onload = function(){
//     getRem(720,100);
    
//     var android = android || {getCredit: function() {}};
//     //拿积分
//     // window.android.getCredit();
//     window.data = function(num) {
//         var numall = document.getElementById("int-integral");
//         numall.innerHTML = formatCurrency(num);
//     }


//     //判断版本
//     // window.android.getAndroidVersion();
//     // window.runVersion = function(version){
//     //     var numall = document.getElementById("int-integral");
//     //     numall.innerHTML = formatCurrency(version);
//     // }

//     //节点加载出来，隐藏loading
//     document.getElementsByTagName("body")[0].style.display = "block";
//     // window.android.hideLoading();

//     document.getElementById('history-icon').onclick=()=>{
//         window.location.href='./html/againToBuy.html';
//     };

//     //与客户端交互
    
//     //购买成功
//     window.Buysuccess = function(cred){
//         window.location.href = './html/BuySuccess.html?cred='+cred;
//     }
//     //购买失败
//     window.Buyfailed = function(){
//         window.location.href = './html/PurchaseFailed.html';
//     }

//     //金额一千起加上逗号
//     function formatCurrency(num) {
//         if(num){
//             num = num.toString().replace(/\$|\,/g,'');
//             if(''==num || isNaN(num)){return 'Not a Number ! ';}
//             var sign = num.indexOf("-")> 0 ? '-' : '';
//             var cents = num.indexOf(".")> 0 ? num.substr(num.indexOf(".")) : '';
//             cents = cents.length>1 ? cents : '' ;
//             num = num.indexOf(".")>0 ? num.substring(0,(num.indexOf("."))) : num ;
//             if('' == cents){ if(num.length>1 && '0' == num.substr(0,1)){return 'Not a Number ! ';}}
//             else{if(num.length>1 && '0' == num.substr(0,1)){return 'Not a Number ! ';}}
//             for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
//             {
//                 num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
//             }
//             return (sign + num + cents);    
//         }

//     } 

//     //与服务端交互
//     let integralul = document.getElementById('integral-package');
//     function render(data){
//         let html = '';
//         let len = data.length;
//         for( let i = 0;i<len;i++ ){
//             if( data[i].is_sale ){
//                 var a = 'inline-block'
//             }else{
//                 var a = 'none'
//             }
//             if( data[i].is_hot ){
//                 var b = 'inline-block'
//             }else{
//                 var b = 'none'
//             }
//             html+=`
//                 <li class="int-one">
//                     <div class="int-num">
//                         <div class="ali-cen">
//                             <img class="int-num-icon" src="./img/icon/xxhdpi/integralicon.png" alt="">
//                             <span class="int-num-all" id="int-num-all">${formatCurrency(data[i].credits)}</span>
//                             <i class="int-num-unit">credits</i>
//                         </div>
//                     </div>
//                     <div class="int-price">
//                         <span class="int-price-spe">
//                             <i class="spe-icon">
//                                 <img style="display:${b}" class="spe-icon-img" src="./img/icon/xxhdpi/fire.png" alt="">
//                             </i>
//                             <span>$${data[i].price}</span>
//                         </span>
//                         <span style="display:${a}" class="int-price-oripirce">$${data[i].original_price}</span>
//                     </div>
//                     <div class="int-pay">
//                         <span class="int-pay-tit" id="int-pay-tit">
//                             <p>BUY NOW</p>
//                         </span>
//                     </div>
//                     <img style="display:${a}" src="./img/icon/xxhdpi/bonus.png" class="red-mark" alt="">
//                 </li>
//             `;
//         }
//         integralul.innerHTML = html;
//     }
//     // window.android.showLoading();
//     async function rundata(){
//         try {
//             await fetch("/api/buy/products",{
//                 method: 'POST',
//                 headers:{
//                     'Content-Type':'application/json;charset=UTF-8',
//                     'Authorization': '8WkjBas6a4Hk'
//                 }
//             }).then((response) => {
//                 if (response.ok) {
//                     return response.json();
//                 }
//             }).then(res => {
//                 // window.android.hideLoading();
//                 console.log(res.data.product_list);
//                 let data = res.data.product_list;
//                 render(data);
//                 let paybtn = integralul.querySelectorAll('.int-pay-tit');
//                 let paylen = paybtn.length;
//                 for( let i=0;i < paylen;i++ ){
//                     paybtn[i].onclick=()=>{
//                         window.android.pay(res.data.product_list[i].product_id);
//                         sessionStorage.setItem("id",res.data.product_list[i].product_id);
//                     }
//                 }
//             }).catch(e => {
//                 console.log(e);
//             })
//         } catch(e) {
//             console.log("error:", e);
//         }
//     }
//     rundata();
    
// };
// window.onresize = function(){
//     getRem(720,100)
// };
// function getRem(pwidth,prem){
//     var html = document.getElementsByTagName("html")[0];
//     var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
//     html.style.fontSize = oWidth/pwidth*prem + "px";
// }



