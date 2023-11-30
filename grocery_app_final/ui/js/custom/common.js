// Define your api here
var productListApiUrl = 'http://127.0.0.1:5000/getProducts';
var uomListApiUrl = 'http://127.0.0.1:5000/getUOM';
var productSaveApiUrl = 'http://127.0.0.1:5000/insertProduct';
var productDeleteApiUrl = 'http://127.0.0.1:5000/deleteProduct';
var productEditApiUrl = 'http://127.0.0.1:5000/editProduct';
var orderListApiUrl = 'http://127.0.0.1:5000/getAllOrders';
var orderSaveApiUrl = 'http://127.0.0.1:5000/insertOrder';

// For product drop in order
var productsApiUrl = 'https://fakestoreapi.com/products';

function callApi(method, url, data) {
    $.ajax({
        method: method,
        url: url,
        data: data
    }).done(function( msg ) {
        window.location.reload();
    });
}
// function for order validation

function getValidate(formData)
{
    var regcustomerName = /^[A-Za-z\s]+$/;
    for(var i=0;i<formData.length;++i) {
        var element = formData[i];
        switch(element.name) {
            case 'customerName':
                if(element.value == '')
                {
                    alert("Customer Name can't be empty!");
                    return false;
                }
                else if(!regcustomerName.test(element.value))
                {
                    alert("Please enter a valid Customer Name");
                    return false;
                }
            case 'product':
                if(element.value == '')
                {
                    alert("Please select a Product");
                    return false;
                }
            case 'item_total':
                if(element.value == '' || element.value == 'NaN')
                {
                    alert("Total can't be empty");
                    return false;
                }  
            case 'qty':
                if(element.value == '0')
                {
                    alert("Specify the Quantity");
                    return false;
                }  
            case 'product_grand_total':
                if(element.value == '0.0' || element.value == 'NaN')
                {
                    alert("Grand total can't be empty");
                    return false;
                }  
        }
    }
    return true;
}
function calculateValue() {
    var total = 0;
    $(".product-item").each(function( index ) {
        var qty = parseFloat($(this).find('.product-qty').val());
        var price = parseFloat($(this).find('#product_price').val());
        price = price*qty;
        $(this).find('#item_total').val(price.toFixed(2));
        total += price;
    });
    $("#product_grand_total").val(total.toFixed(2));
}

function orderParser(order) {
    return {
        id : order.id,
        date : order.employee_name,
        orderNo : order.employee_name,
        customerName : order.employee_name,
        cost : parseInt(order.employee_salary)
    }
}

function productParser(product) {
    return {
        id : product.id,
        name : product.employee_name,
        unit : product.employee_name,
        price : product.employee_name
    }
}

function productDropParser(product) {
    return {
        id : product.id,
        name : product.title
    }
}

//To enable bootstrap tooltip globally
// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
// });