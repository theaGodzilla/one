import '../sass/base.scss';
// import '../sass/BuySuccess.scss';

window.onload = function(){
    getRem(720,100);

    let url = location.search.split("?")[1].split("=")[1];
    let pointspurcred = document.getElementById("points-pur-cred");
    if(url<=0){
        document.getElementById("prompt-words").style.display = 'none';
        document.getElementById("points-pur").style.display = 'none';
    }else if(url>0){
        pointspurcred.innerHTML = formatCurrency(url);
    }

    //节点加载出来，隐藏loading
    document.getElementsByTagName("body")[0].style.display = "block";
    window.android.hideLoading();

    //call now
    document.getElementById('call-btn').onclick=()=>{
        window.android.goCall();
    }

    //done
    document.getElementById('done-btn').onclick=()=>{
        window.android.goBack(); 
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
};
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
}