function renderItemQuantity() {
   let totalItem = 0;
   cartArr.forEach(function (item) {
      var ele = document.getElementById(`addToCartBtn_${item.product.id}`);
      if (item.quantity != 0) {
         if (ele != null) {
            ele.innerHTML = `<i class="fa fa-shopping-cart"></i> Buy Now <span class = "num_item">${item.quantity}</span>`;
         }
         totalItem += item.quantity;
      }
      else {
         if (ele != null) {
            ele.innerHTML = '<i class="fa fa-shopping-cart"></i> Buy Now';
         }
      }
   })

   //Show SL trên Icon Cart
   if (totalItem === 0) {
      document.getElementById("numCartItem").style.display = "none";
   }
   else {
      document.getElementById("numCartItem").style.display = "block";
      document.getElementById("numCartItem").innerHTML = totalItem;
   }
}
