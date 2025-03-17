document.addEventListener("DOMContentLoaded", function () {
    function setupOrderButton(buttonId, paperTypeId, quantityId) {
        let orderButton = document.getElementById(buttonId);

        if (orderButton) {
            orderButton.addEventListener("click", function (event) {
                event.preventDefault();

                let paperType = document.getElementById(paperTypeId);
                let quantity = document.getElementById(quantityId);
                let isValid = true;

                paperType.style.border = "";
                quantity.style.border = "";

                if (paperType.value.trim() === "") {
                    alert("Please select a product.");
                    paperType.style.border = "2px solid red";
                    isValid = false;
                }

                if (quantity.value.trim() === "" || isNaN(quantity.value) || parseInt(quantity.value) <= 0) {
                    alert("Please enter a valid quantity.");
                    quantity.style.border = "2px solid red";
                    isValid = false;
                }

                if (!isValid) return;

                alert("Press Ok");

                setTimeout(function () {
                    window.location.href = "../Printify/order confirmed.html";
                }, 1000);
            });
        } else {
            console.error("Error: " + buttonId + " not found!");
        }
    }

    setupOrderButton("orderButton", "paperType", "quantity");
    setupOrderButton("orderButton2", "supplyType", "supplyQuantity");
});
