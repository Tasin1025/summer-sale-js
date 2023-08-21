document.addEventListener("DOMContentLoaded", function () {
    const productList = document.querySelectorAll(".product");

    const list = document.getElementById("list");
    const price = document.getElementById("price");
    const discount = document.getElementById("discount");
    const totalPriceText = document.getElementById("total-price");
    const couponField = document.getElementById("coupon-field");
    const applyBtn = document.getElementById("apply-btn");
    const makePurchaseBtn = document.getElementById("make-purchase");

    let totalPrice = 0;
    let counter = 1;
    let flag = false;

    productList.forEach(product => {
        product.addEventListener("click", function () {
            const productName = this.querySelector(".card-title").innerText;
            const productPrice = parseFloat(this.querySelector(".price").innerText);
            totalPrice += productPrice;

            const listItem = document.createElement("li");
            listItem.innerText = counter + ". " + productName;
            list.appendChild(listItem);

            price.innerText = "Total price: " + totalPrice + " Tk";

            counter++;

           
            if (totalPrice > 200) {
                makePurchaseBtn.removeAttribute("disabled");
            }
        });
    });

    applyBtn.addEventListener("click", function () {
        const couponCode = couponField.value;
        if (couponCode === "SELL200") {
        
            const discountAmount = (totalPrice * 20) / 100;
            const discountedTotalPrice = totalPrice - discountAmount;

            discount.innerText = "Discount: " + discountAmount + " Tk";
            totalPriceText.innerText = "Total: " + discountedTotalPrice + " Tk";
            flag = true;

            
            applyBtn.disabled = true;

            
            if (totalPrice > 200 ) {
                makePurchaseBtn.removeAttribute("disabled");
                applyBtn.setAttribute("disabled");
            }
        } else {
            alert("Invalid coupon code");
        }
    });

    makePurchaseBtn.addEventListener("click", function () {

        totalPrice = 0;
        counter = 1;
        
        flag = false;

        list.innerHTML = "";
        price.innerText = "Total price:";
        discount.innerText = "Discount:";
        totalPriceText.innerText = "Total:";
        couponField.value = "";

        applyBtn.disabled = false;
        makePurchaseBtn.disabled = true;

        my_modal_3.showModal();
    });
});


