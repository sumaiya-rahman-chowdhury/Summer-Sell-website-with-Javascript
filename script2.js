let total = 0 ;
const makePurchase = document.getElementById('purchase');
const applyBtn = document.getElementById('apply-btn');
function handleClickCard(target){
    console.log(target.childNodes[7].childNodes[1].innerText)
    const title = target.childNodes[5].innerText ;
    createli(title) ;
    const price = target.childNodes[7].childNodes[1].innerText ;
     total = parseFloat(price) + parseFloat(total) ;
    document.getElementById('total-price').innerText = total.toFixed(2) ;
    document.getElementById('newTotal').innerText = total.toFixed(2)
    if(total>0){
        removeAttribute(makePurchase);
     }
     if(total>200){
        removeAttribute(applyBtn);
     }  
}
function removeAttribute(elementName){
    elementName.removeAttribute('disabled');
    elementName.style.backgroundColor = '#E527B2'
}
function createli(text){
   const li = document.createElement('li') ;
   li.innerText = text ;
    const ol = document.getElementById('order-list');
    ol.appendChild(li) ;
}
function goHome(){
    window.location.reload() ;
}
function discount(){
    if(document.getElementById('apply-coupn').value === 'SELL200')
    {
        const discount = (20*total)/100 ;
        document.getElementById('discount').innerText = discount.toFixed(2) ;
        const nowTotal = total - discount ;
        document.getElementById('newTotal').innerText = nowTotal.toFixed(2) ;
    }
}