// syntax : app.directive('',callback function)
// Angular understand like this application-logo
// Directive always return in object.
app.directive('applicationLogo',function(){
    return {
            restrict : "EA",            // Restrict is used to return html/attribute/Both. E stand for Element and A stand for Attribute
            template : function (element,attribute) 
            {
                //alert(" Size: "+attribute.size+" \n Shape: "+attribute.shape);
                return "<img src='images/logo-"+attribute.size+".png' />";

            } // Print the directive content  
        } 
});

/*
EXample: 
    template : "<img src='images/logo.png' />"

Example 2:
    template : function () {
                return "<img src='images/logo.png' />";

            }

*/