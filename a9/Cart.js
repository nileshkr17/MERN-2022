function Cart(id,productName,productPrice,productDesc,productDateOfPurchase,productImage){
    this.id = id;
    this.productName = productName;
    this.productPrice = productPrice;
    this.productDesc = productDesc;
    this.productDateOfPurchase = productDateOfPurchase;
    this.productImage = productImage;
} 
exports.Cart = Cart;