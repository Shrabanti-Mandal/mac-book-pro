// function for products + parts
function choice(product, option){
    const productValue= document.getElementById(product+"-cost");
if(product=="memory" && option=="memorySmall"){
//memory
    productValue.innerText= 0;
}
else if(product=="memory" && option=="memoryBig"){
    productValue.innerText= 180;
}
//storage
else if(product=="storage" && option=="storageSmall"){
   productValue.innerText= 0;
}
else if(product=="storage" && option=="storageMedium"){
    productValue.innerText= 100;
}
else if(product=="storage" && option=="storageBig"){
    productValue.innerText= 180;
}
//delivery
else if(product=="delivery" && option=="primeDelivery"){
    productValue.innerText= 0;
}
else if(product=="delivery" && option=="normalDelivery"){
    productValue.innerText= 20;
}
updateTotal();
}


//total cost - update total functiion
function updateTotal(){
    const memoryCost= document.getElementById('memory-cost');
    const storageCost = document.getElementById('storage-cost');
    const deliveryCost = document.getElementById('delivery-cost');
    const bestPrice = document.getElementById('best-price');
    const totalPrice= document.getElementById('total-price');
    let overallCost = parseInt(memoryCost.innerText) +parseInt (storageCost.innerText) + parseInt(deliveryCost.innerText) + parseInt(bestPrice.innerText) ;
    totalPrice.innerText= overallCost;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText= overallCost;
}


//update promocode function
function promo(){
const grandTotal = document.getElementById('grand-total');
let grandTotalNumber=parseInt(grandTotal.innerText);
let promoCode= document.getElementById('promo-code');
promoCodeValue = promoCode.value ;
let totalPrice= document.getElementById('total-price');
overallCost= totalPrice.innerText;

if(promoCodeValue=='stevekaku'){
    let discount= overallCost*.2;
    grandTotalNumber=overallCost-discount;
    grandTotal.innerText= parseFloat(grandTotalNumber)
    promoCode.value='';
    document.getElementById("promo-apply").disabled = true;
}
}


//---------------------------------memory cost--------------------------------- 
document.getElementById('memory-small').addEventListener('click', function(){
    choice("memory","memorySmall" );
});

document.getElementById('memory-big').addEventListener('click', function(){
    choice("memory","memoryBig" );
});

//-------------------------------storage cost ----------------------------------
document.getElementById('storage-small').addEventListener('click',function(){
    choice("storage","storageSmall" );
});

document.getElementById('storage-medium').addEventListener('click', function(){
    choice("storage","storageMedium" );
})

document.getElementById('storage-big').addEventListener('click', function(){
    choice("storage","storageBig");
})

//---------------------------------delivery cost--------------------------------
document.getElementById('prime-delivery').addEventListener('click', function(){
    choice("delivery","primeDelivery");
});

document.getElementById('normal-delivery').addEventListener('click', function(){
    choice("delivery","normalDelivery");
});

//------------------------------------promo-----------------------------------
document.getElementById('promo-apply').addEventListener('click', function(){
   promo();
})

