let total = 0
document.getElementById('card-1').addEventListener('click',function(){
    // console.log("object") 
    const listName = document.getElementById('card-1-title').innerText ;
    console.log(listName)
    const li = document.createElement('li');
    li.innerText = listName ;
    const orderList = document.getElementById('order-list');
    li.style.fontWeight = 500 ;
    orderList.appendChild(li)

    const price = document.getElementById('card-1-price').innerText ;
    total = parseFloat(price) + parseFloat(total) ;
    document.getElementById('total-price').innerText = total ;
    document.getElementById('newTotal').innerText = total ;
    // 
    const applyBtn = document.getElementById('apply-btn') ;
    const purchaseBtn = document.getElementById('purchase') ;
    if(total>200){
        applyBtn.removeAttribute('disabled') ;
        applyBtn.style.backgroundColor = '#E527B2'

    }
    else{
        applyBtn.setAttribute('disabled',true)
      }
    
      if(total>0){
       purchaseBtn.removeAttribute('disabled') ;
        purchaseBtn.style.backgroundColor = '#E527B2'
      }
    
})
document.getElementById('card-2').addEventListener('click',function(){
    // console.log("object") 
    const listName = document.getElementById('card-2-title').innerText ;
    console.log(listName)
    const li = document.createElement('li');
    li.innerText = listName ;
    const orderList = document.getElementById('order-list');
    li.style.fontWeight = 500 ;
    orderList.appendChild(li)

    const price = document.getElementById('card-2-price').innerText ;
    total = parseFloat(price) + parseFloat(total) ;
    document.getElementById('total-price').innerText = total ;
    document.getElementById('newTotal').innerText = total ;
    // 
    const applyBtn = document.getElementById('apply-btn') ;
    if(total>200){
        applyBtn.removeAttribute('disabled') ;
        applyBtn.style.backgroundColor = '#E527B2'
    }
    else{
        applyBtn.setAttribute('disabled',true)
      }
      const purchaseBtn = document.getElementById('purchase') ;
      if(total>0){
       purchaseBtn.removeAttribute('disabled') ;
        purchaseBtn.style.backgroundColor = '#E527B2'
      }
    
})
document.getElementById('card-3').addEventListener('click',function(){
    // console.log("object") 
    const listName = document.getElementById('card-3-title').innerText ;
    console.log(listName)
    const li = document.createElement('li');
    li.innerText = listName ;
    const orderList = document.getElementById('order-list');
    li.style.fontWeight = 500 ;
    orderList.appendChild(li)

    const price = document.getElementById('card-3-price').innerText ;
    total = parseFloat(price) + parseFloat(total) ;
    document.getElementById('total-price').innerText = total ;
    document.getElementById('newTotal').innerText = total ;
    // 
    const applyBtn = document.getElementById('apply-btn') ;
    if(total>200){
        applyBtn.removeAttribute('disabled') ;
        applyBtn.style.backgroundColor = '#E527B2'
    }
    else{
        applyBtn.setAttribute('disabled',true)
      }
      const purchaseBtn = document.getElementById('purchase') ;
      if(total>0){
       purchaseBtn.removeAttribute('disabled') ;
        purchaseBtn.style.backgroundColor = '#E527B2'
      }
    
})
document.getElementById('card-4').addEventListener('click',function(){
    // console.log("object") 
    const listName = document.getElementById('card-4-title').innerText ;
    console.log(listName)
    const li = document.createElement('li');
    li.innerText = listName ;
    const orderList = document.getElementById('order-list');
    li.style.fontWeight = 500 ;
    orderList.appendChild(li)
    
    const price = document.getElementById('card-4-price').innerText ;
    total = parseFloat(price) + parseFloat(total) ;
    document.getElementById('total-price').innerText = total ;
    document.getElementById('newTotal').innerText = total ;
    // 
    const applyBtn = document.getElementById('apply-btn') ;
    if(total>200){
        applyBtn.removeAttribute('disabled') ;
        applyBtn.style.backgroundColor = '#E527B2'
    }
    else{
        applyBtn.setAttribute('disabled',true)
      }
      const purchaseBtn = document.getElementById('purchase') ;
      if(total>0){
       purchaseBtn.removeAttribute('disabled') ;
        purchaseBtn.style.backgroundColor = '#E527B2'
      }
})
document.getElementById('card-5').addEventListener('click',function(){
    // console.log("object") 
    const listName = document.getElementById('card-5-title').innerText ;
    console.log(listName)
    const li = document.createElement('li');
    li.innerText = listName ;
    const orderList = document.getElementById('order-list');
    li.style.fontWeight = 500 ;
    orderList.appendChild(li)
    
    const price = document.getElementById('card-5-price').innerText ;
    total = parseFloat(price) + parseFloat(total) ;
    document.getElementById('total-price').innerText = total ;
    document.getElementById('newTotal').innerText = total ;
    // 
    const applyBtn = document.getElementById('apply-btn') ;
    if(total>200){
        applyBtn.removeAttribute('disabled') ;
        applyBtn.style.backgroundColor = '#E527B2'
    }
    else{
        applyBtn.setAttribute('disabled',true)
      }
      const purchaseBtn = document.getElementById('purchase') ;
      if(total>0){
       purchaseBtn.removeAttribute('disabled') ;
        purchaseBtn.style.backgroundColor = '#E527B2'
      }
    
})
document.getElementById('card-6').addEventListener('click',function(){
    // console.log("object") 
    const listName = document.getElementById('card-6-title').innerText ;
    console.log(listName)
    const li = document.createElement('li');
    li.innerText = listName ;
    const orderList = document.getElementById('order-list');
    li.style.fontWeight = 500 ;
    orderList.appendChild(li)
    
    const price = document.getElementById('card-6-price').innerText ;
    total = parseFloat(price) + parseFloat(total) ;
    document.getElementById('total-price').innerText = total ;
    document.getElementById('newTotal').innerText = total ;
    // 
    const applyBtn = document.getElementById('apply-btn') ;
    if(total>200){
        applyBtn.removeAttribute('disabled') ;
        applyBtn.style.backgroundColor = '#E527B2'
    }
    else{
        applyBtn.setAttribute('disabled',true)
      }
      const purchaseBtn = document.getElementById('purchase') ;
      if(total>0){
       purchaseBtn.removeAttribute('disabled') ;
        purchaseBtn.style.backgroundColor = '#E527B2'
      }
})
function discount(){
    
    const text =document.getElementById('apply-coupn').value ;
    if(text === 'SELL200'){
        const discount = (total * 20)/100 ;
        document.getElementById('discount').innerText = discount ;
        const nowTotal = total - discount ;
        document.getElementById('newTotal').innerText = nowTotal ;
    }
  
}

// document.getElementById('apply-coupn').addEventListener('keyup',function(event){
//     const text = event.target.value ;
//     // console.log(text)
//     // console.log(totalPrice)
//     const applyBtn = document.getElementById('apply-btn') ;
//     if(text !== 'SELL200' )
//     {
//         applyBtn.setAttribute('disabled',true)
//     }
  
// }
// )



function goHome(){
    document.getElementById('order-list').innerText = '' ;
    document.getElementById('total-price').innerText = '' ;
    document.getElementById('discount').innerText = '' ;
    document.getElementById('newTotal').innerText = '' ;
    total = 0 ;
    document.getElementById('apply-coupn').value = ''
    const applyButton = document.getElementById('apply-btn');
applyButton.disabled = true;
applyButton.style.backgroundColor = '#f1addf';
const purchaseButton = document.getElementById('purchase');
purchaseButton.disabled = true;
purchaseButton.style.backgroundColor = '#f1addf';

    // window.location.reload() ;
}