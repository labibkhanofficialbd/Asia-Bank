
function getInputValue(inputId){
    const InputFeild = document.getElementById(inputId);

    const amountValue = InputFeild.value;

    const amountInt = parseFloat(amountValue);

    InputFeild.value = '';

    return amountInt;
}

function updateTotalFeild(totalId, amount){
    const totalElement = document.getElementById(totalId);

    const totalAmount = totalElement.innerText;

    const previousAmount = parseFloat(totalAmount);

    totalElement.innerText = previousAmount + amount;
}

function getBalance(){
    const totalBalanceText = totalBalance.innerText;

    const previousTotalBalance = parseFloat(totalBalanceText);

    return previousTotalBalance;
}

function updateBalance(amount, isAdd){
    const totalBalance = document.getElementById('balance-total');

    const previousTotalBalance = getBalance();

    if(isAdd == true){
        totalBalance.innerText = previousTotalBalance + amount;
    }
    else{
        totalBalance.innerText = previousTotalBalance - amount;
    }
}

// DEPOSIT HANDEL
document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmountInt = getInputValue('deposit-input');

    if(depositAmountInt > 0 ){
        updateTotalFeild('deposit-total', depositAmountInt)

        updateBalance(depositAmountInt, true)
    }
})

// WITHDRAW HANDEL
document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawAmount = getInputValue('withdraw-input');

    const balance = getBalance()

    if(withdrawAmount > 0 && withdrawAmount > balance){
        updateTotalFeild('withdraw-total', withdrawAmount);

        updateBalance(withdrawAmount, false)     
    }
})

document.getElementById('deposit-input').addEventListener('keyup', function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("deposit-button").click();
       }
})

document.getElementById('withdraw-input').addEventListener('keyup', function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("withdraw-button").click();
       }
})
