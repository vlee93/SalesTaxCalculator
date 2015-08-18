var $ = function (id) {
    return document.getElementById(id);
}
// This makes the variable $ equal to document.getElementByID so it is a shortcut when writing the javascript program

function calculate_click()
{
	var Subtotal = parseFloat($("subtotal").value);
	var TaxRate = parseFloat($("taxRate").value);
	if (isNaN(Subtotal))
		{
		alert("Invalid character please try again");
		$("subtotal").value = "";
		}
	else if (isNaN(TaxRate))
	{
		alert("Invalid character please try again");
		$("taxRate").value = "";
	}
	else if (Subtotal < 0)
		{
		alert("The Subtotal value you entered is a negative number. Please try again.")
		$("subtotal").value = "";
		}
	else if (TaxRate < 0)
		{
		alert("The Tax Rate value you entered is a negative number. Please try again.")
		$("taxRate").value = "";
		}
	else
		{
			var SalesTax = (Subtotal * TaxRate)/100;
			var Total = (SalesTax + Subtotal).toFixed(2);
			$("salesTax").value = SalesTax;
			$("total").value = Total;
		}

}

window.onload = function () {
	 $("calculate").onclick = calculate_click;
	 $("subtotal").focus;
	}
// The purpose of this function is to start the calculate_click function only when the "Calculate" button is clicked.