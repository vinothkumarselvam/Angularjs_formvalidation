app.controller("ProductController",['$scope',function($scope){

    $scope.products = [
        {
            "productimage": "images/oneplus.jpg",
            "item": "Samsumg A8",
            "desc": "Samsumg A8 about me in culpa qui officia deserunt mollit anim..",
            "price": 10000,
            "productId": "102",
            "catId": "1",
            "uom": "LB"
        },
        {
            "productimage": "images/oneplus.jpg",
            "item": "One plus 6t",
            "desc": "Oneplus about me in culpa qui officia deserunt mollit anim..",
            "price": 37000,
            "productId": "102",
            "catId": "1",
            "uom": "LB"
        },
        {
            "productimage": "images/oneplus.jpg",
            "item": "Redmi X2 02",
            "desc": "Oneplus about me in culpa qui officia deserunt mollit anim..",
            "price": 20000,
            "productId": "102",
            "catId": "1",
            "uom": "LB"
        },
        {
            "productimage": "images/oneplus.jpg",
            "item": "Oppo X2 02",
            "desc": "oppo about me in culpa qui officia deserunt mollit anim..",
            "price": 10000,
            "productId": "102",
            "catId": "1",
            "uom": "LB"
        },
        {
            "productimage": "images/oneplus.jpg",
            "item": "Redmi X2 02",
            "desc": "Oneplus about me in culpa qui officia deserunt mollit anim..",
            "price": 20000,
            "productId": "102",
            "catId": "1",
            "uom": "LB"
        },
        {
            "productimage": "images/oneplus.jpg",
            "item": "One plus 7",
            "desc": "Oneplus about me in culpa qui officia deserunt mollit anim..",
            "price": 25000,
            "productId": "102",
            "catId": "1",
            "uom": "LB"
        },
      
    ];


    $scope.cart = [];
    $scope.addToCart = function(ProductIndex){
        $scope.cart.push($scope.products[ProductIndex]); // Push the product using the index value to cart array.
        $scope.products[ProductIndex].disable = true;   
        console.log($scope.products);
    };

    // Remove the item in Cart.
    $scope.removeItem = function(itemIndex){
        $scope.cart[itemIndex].disable = false; 
        $scope.cart.splice(itemIndex,1)
    };


    // Total of Cart item

    $scope.getTotal = function(){
        var total = 0;
        angular.forEach($scope.cart,function(value){
            total = total + value.price;
        });
        return total;
    };

}]);