var social = 0.105;
var income = 0.20;
var incomeOver = 0.23;
var incomeMinus = -0.20;
var socialTax, subtotal, incomeTax, monthNet, incomeOverSubtotal, subtotalOver, incomeTaxOver, monthDependSum, incomeTaxOverMinus;

function salaryNet() {
  monthGross = Number(document.getElementById("month_gross").value);
  monthMinimum = Number(document.getElementById("month_minimum").value);
  monthDependents = Number(document.getElementById("month_dependents").value);
if (monthGross <= 1667) {
    socialTax = monthGross * social;
    monthDependSum = monthDependents * 250;
    subtotal = monthGross - socialTax - monthMinimum - monthDependSum;
    incomeTax = subtotal * income;
    monthNet = monthGross - socialTax - incomeTax;
    
    document.getElementById("month_net").value = monthNet.toFixed(2);
  } else {
    socialTax = monthGross * social;
    monthDependSum = monthDependents * 250;
    incomeOverSubtotal = monthGross - 1667;
    subtotalOver = 1667 - socialTax - monthMinimum - monthDependSum;
    incomeTax = subtotalOver * income;
    incomeTaxOver = incomeOverSubtotal * incomeOver;
    monthNet = monthGross - socialTax - incomeTax - incomeTaxOver;

    document.getElementById("month_net").value = monthNet.toFixed(2);
    }
    if (subtotal <= 0) {
      socialTax = monthGross * social;
      monthNet = monthGross - socialTax;
    
      document.getElementById("month_net").value = monthNet.toFixed(2);
    }
    if (subtotalOver <= -1) {
      socialTax = monthGross * social;
    monthDependSum = monthDependents * 250;
    incomeOverSubtotal = monthGross - 1667;
    subtotalOver = 1667 - socialTax - monthMinimum - monthDependSum;
    incomeTax = subtotalOver * incomeMinus;
    incomeTaxOver = incomeOverSubtotal * incomeOver;
    incomeTaxOverMinus = incomeTaxOver - incomeTax;
    monthNet = monthGross - socialTax - incomeTaxOverMinus;
    
      document.getElementById("month_net").value = monthNet.toFixed(2);
    }
}

function reset(){
    document.getElementById("month_gross").value = " ";
    document.getElementById("month_minimum").value = " ";
    document.getElementById("month_dependents").value = " ";
    document.getElementById("month_net").value = " ";
  }