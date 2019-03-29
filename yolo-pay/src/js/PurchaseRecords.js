import '../sass/base.scss';
import '../sass/PurchaseRecords.scss';
import util from './util';

window.onload = function(){
    getRem(720,100);

    document.getElementsByTagName("body")[0].style.display = "block";
    window.android.hideLoading();


    // let token = sessionStorage.getItem("tk");
    // let userid = sessionStorage.getItem("userid");
    //拿token和userid
    window.android.getIdAndToken();
    window.idAndtoken = function(userid,token){
        // document.getElementsByTagName("body")[0].innerHTML = userid;
        
        rundata(userid,token);
    }
    
    let uls = document.getElementById("pur-main-record-ul");
    function render(data){
        let html = '';
        let len = data.length;
        if( len > 0 ){
           for( let i = 0;i<len;i++ ){
            html+=`
                    <li class="record-lis">
                        <div class="record-lis-int">
                            <img class="record-lis-int-icon" src="../img/icon/xxhdpi/integralicon.png" alt="">
                            <span class="points-pur">${formatCurrency(data[i].credit)} credits</span>
                            <b class="cost-price">${data[i].price}</b>
                        </div>
                        <div class="time-judgment">
                            <span class="time">${getLocalTime(data[i].ct)}</span>
                            <span class="judgment">${data[i].status}</span>
                        </div>
                    </li>
                `;
            } 
        }else if( len == 0 ){
            html = `
                <li class="orderli">
                    <img class="no-order" src="../img/icon/xxhdpi/noorder.png" />
                    <p class="orderli-tit">Oops,no history yet</p>
                </li>
            `;
        }
        
        uls.innerHTML = html;
    }
    
    //金额一千起加上逗号
    function formatCurrency(num) {
        if(num){
            num = num.toString().replace(/\$|\,/g,'');
            if(''==num || isNaN(num)){return 'Not a Number ! ';}
            var sign = num.indexOf("-")> 0 ? '-' : '';
            var cents = num.indexOf(".")> 0 ? num.substr(num.indexOf(".")) : '';
            cents = cents.length>1 ? cents : '' ;
            num = num.indexOf(".")>0 ? num.substring(0,(num.indexOf("."))) : num ;
            if('' == cents){ if(num.length>1 && '0' == num.substr(0,1)){return 'Not a Number ! ';}}
            else{if(num.length>1 && '0' == num.substr(0,1)){return 'Not a Number ! ';}}
            for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
            {
                num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
            }
            return (sign + num + cents);    
        }
    }

    //将时间转换成时间戳
    function getLocalTime(nS) {     
        return new Date(parseInt(nS) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');     
    }

    //滚动固定历史标题
    let purmaintit = document.getElementById('pur-main-tit');
    function tithistory(){
        window.onscroll=function(){
            if(window.scrollY>0){
                purmaintit.style.position = 'fixed';
                purmaintit.style.left = '0.3rem';
                purmaintit.style.right = '0.3rem';
                purmaintit.style.top = '0.2rem';
                purmaintit.style.background = 'white';
                purmaintit.style.borderRadius = '0.13rem 0.13rem 0 0';
            }
        }
    }
    // position: fixed;
    // left: .3rem;
    // right: 0.3rem;
    // background: white;
    // border-radius: 0.13rem 0.13rem 0 0;
    // margin: 0 .2rem;
    // top: .2rem;
    async function rundata(userid,token){
        window.android.showLoading();
        try {
            await fetch("https://touchcall.yolonet.net/buy/history",{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json;charset=UTF-8',
                    'Authorization': util.encode(JSON.stringify({uid:userid,webtoken:token})),
                    
                },
                body:JSON.stringify({uid:userid,webtoken:token})
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                }
            }).then(res => {
                window.android.hideLoading();
                console.log(res.data.buy_history);
                let data = res.data.buy_history;
                render(data);
            }).catch(e => {
                console.log(e);
            })
        } catch(e) {
            console.log("error:", e);
        }
    }
};
window.onresize = function(){
    getRem(720,100)
};
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
}