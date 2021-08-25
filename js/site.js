// Get the values from website
function getValues(){
    let loanAmount = document.getElementById("LoanAmount").value;
    let MonthlyPayments = document.getElementById("MonthlyPayments").value;
    let InterestRate = document.getElementById("InterestRate").value;

    let totalMonthlyPayment, InterestPayment, principalPayment, remainingBalance = calculateMoney(loanAmount, MonthlyPayments, InterestRate);
    
}

//Calculate scores
function calculateMoney(loanAmount, MonthlyPayments, InterestRate){

    totalMonthlyPayment = ((loanAmount) * (InterestRate /1200) / (1 - (1 + InterestRate / 1200)**(-MonthlyPayments)))
    InterestPayment = 




}