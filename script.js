const basePrice = document.getElementById('basePrice');
const basePriceValue = 1299;
const memoryPart = document.getElementById('memoryCost');
const storagePart = document.getElementById('storageCost');
const deliveryOption = document.getElementById('deliveryCharge');

const productTotalPrice = document.getElementById('productTotalPrice');
const totalPrice = document.getElementById('totalPrice');

const promoCodeInput = document.getElementById('promoCode');
const promoCodeValue = promoCodeInput.value;
const applyPromoCode = document.getElementById('applyPromoCode');
const promoCodeDiscount = document.getElementById('promoCodeDiscount');

const memory8gbPrice = 0;
const memory16gbPrice = 180;

const storage256gbPrice = 0;
const storage512gbPrice = 100;
const storage1tbPrice = 180;

const normalDeliveryCharge = 0;
const fastDeliveryCharge = 20;

let discountApplied;

// Update Parts Price
function setPartsCost(variation, partsName){
    partsName.innerText = variation
}

// Update Total Price
function updateTotalPrice(){
    productTotalPriceAmount = parseInt(basePrice.innerText) + parseInt(memoryPart.innerText) + parseInt(storagePart.innerText) + parseInt(deliveryOption.innerText)

    productTotalPrice.innerText = productTotalPriceAmount;

    discountUpdate()
    totalPrice.innerText = productTotalPriceAmount - parseFloat(promoCodeDiscount.innerText)
    
}

// Promo Code Discount Update
function discountUpdate(){
    const promoCodeRoundAmount = parseInt(productTotalPriceAmount) * (20/100)
    if(discountApplied == true){
        promoCodeDiscount.innerText = promoCodeRoundAmount.toFixed(2)
    }
}


// Memory Cost
document.getElementById('memory8gb').addEventListener('click', function(){
    setPartsCost(memory8gbPrice, memoryPart)
})

document.getElementById('memory16gb').addEventListener('click', function(){
    setPartsCost(memory16gbPrice, memoryPart)
})

// Storage Cost
document.getElementById('storage256gb').addEventListener('click', function(){
    setPartsCost(storage256gbPrice, storagePart)
})
document.getElementById('storage512gb').addEventListener('click', function(){
    setPartsCost(storage512gbPrice, storagePart)
})
document.getElementById('storage1tb').addEventListener('click', function(){
    setPartsCost(storage1tbPrice, storagePart)
})

// Delivery Cost
document.getElementById('normalDelivery').addEventListener('click', function(){
    setPartsCost(normalDeliveryCharge, deliveryOption)
})

document.getElementById('fastDelivery').addEventListener('click', function(){
    setPartsCost(fastDeliveryCharge, deliveryOption)
})

//Update Product Total Price on Load
updateTotalPrice();


// Update Product Total Price On Click
document.getElementById('productDetails').addEventListener('click', function(){
    updateTotalPrice();
    
})



applyPromoCode.addEventListener('click', function(){
    if(promoCodeInput.value.toLowerCase() == 'stevekaku'){
        document.getElementById('promoCodeSection').removeAttribute("class");
        document.getElementById('discountNotifyText').removeAttribute("class")
        discountUpdate();
        discountApplied = true;
    }
    
})