document.addEventListener("DOMContentLoaded", function () {
    const productList = document.querySelectorAll(".product");

    const list = document.getElementById("list");
    const price = document.getElementById("price");
    const discountText = document.getElementById("discount");
    const totalPriceText = document.getElementById("total-price");
    const couponField = document.getElementById("coupon-field");
    const applyBtn = document.getElementById("apply-btn");
    const makePurchaseBtn = document.getElementById("make-purchase");

    let totalPrice = 0;
    let serialNumber = 1;
    let discountPercentage = 0;
    let couponApplied = false;

    productList.forEach(product => {
        product.addEventListener("click", function () {
            const productName = this.querySelector(".card-title").innerText;
            const productPrice = parseFloat(this.querySelector(".price").innerText);
            totalPrice += productPrice;

            const listItem = document.createElement("li");
            listItem.innerText = serialNumber + ". " + productName;
            list.appendChild(listItem);

            price.innerText = "Total price: $" + totalPrice.toFixed(2);

            serialNumber++;

           
            if (totalPrice > 200) {
                makePurchaseBtn.removeAttribute("disabled");
            }
        });
    });

    applyBtn.addEventListener("click", function () {
        const couponCode = couponField.value;
        if (couponCode === "SELL200") {
            discountPercentage = 20;
            const discountAmount = (totalPrice * discountPercentage) / 100;
            const discountedTotalPrice = totalPrice - discountAmount;

            discountText.innerText = "Discount: " + discountPercentage + "%";
            totalPriceText.innerText = "Total: $" + discountedTotalPrice.toFixed(2);
            couponApplied = true;

            // applyBtn.classList.add("applied");
            applyBtn.disabled = true;

            // Enable the button if total price is above 200 and coupon is applied
            if (totalPrice > 200 && couponApplied) {
                makePurchaseBtn.removeAttribute("disabled");
                applyBtn.setAttribute("disabled");
            }
        } else {
            alert("Invalid coupon code");
        }
    });

    makePurchaseBtn.addEventListener("click", function () {

        totalPrice = 0;
        serialNumber = 1;
        discountPercentage = 0;
        couponApplied = false;

        list.innerHTML = "";
        price.innerText = "Total price:";
        discountText.innerText = "Discount:";
        totalPriceText.innerText = "Total:";
        couponField.value = "";

        applyBtn.disabled = false;
        makePurchaseBtn.disabled = true;

        my_modal_3.showModal();
    });
});


