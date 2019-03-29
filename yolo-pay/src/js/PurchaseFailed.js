import '../sass/base.scss';
// import '../sass/BuySuccess.scss';

window.onload = function(){
    getRem(720,100);

    //节点加载出来，隐藏loading
    document.getElementsByTagName("body")[0].style.display = "block";
    window.android.hideLoading();

    //重新购买
    let id = sessionStorage.getItem("id");
    console.log(id);
    // document.location = `js:webview?id=${id}`;
    document.getElementById('call-btn').onclick=()=>{
       window.android.pay(id); 
    }

    //done
    document.getElementById('done-btn').onclick=()=>{
        window.android.goBack(); 
    }

};
function getRem(pwidth,prem){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/pwidth*prem + "px";
}