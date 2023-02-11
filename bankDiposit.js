document
  .getElementById("btn-diposit")
  .addEventListener("click", function () {
    const dipositField = document.getElementById('diposit-amount');
    const newDipositAmountString = dipositField.value ;
    const newDipositAmount = parseFloat(newDipositAmountString) ;
    
    // 
    const dipositTotallElement = document.getElementById('diposit-totall');
    const previusDipositTotallString = dipositTotallElement.innerText;
    const previusDipositTotall = parseFloat(previusDipositTotallString);
    // 
    const currentDipositTotall = previusDipositTotall + newDipositAmount;
    // 
    dipositTotallElement.innerText = currentDipositTotall;
    // totall 
    const currentTotallBalance = document.getElementById('current-totall');
    const previusBlanceTotallString = currentTotallBalance.innerText;
    const previusBlanceTotall = parseFloat(previusBlanceTotallString);
    // 
    const totallBalance = previusBlanceTotall + newDipositAmount;
    currentTotallBalance.innerText = totallBalance;
    // 

    // last step 
    dipositField.value = '';
  });


//   withdraw 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountString);
    // 
    const withdrawTotallElement = document.getElementById('withdraw-totall');
    const previusWithdrawTotallString = withdrawTotallElement.innerText;
    const previusWithdrawTotall = parseFloat(previusWithdrawTotallString);
    // 
    const currentWithdraw = previusWithdrawTotall + withdrawAmount;
    withdrawTotallElement.innerText = currentWithdraw;
    // 
    const balanceTotallElement = document.getElementById('current-totall');
    const previusBalanceTotallString = balanceTotallElement.innerText;
    const previusBalanceTotall = parseFloat(previusBalanceTotallString);

    // 
    const currentBlance = previusBalanceTotall - withdrawAmount;
    balanceTotallElement.innerText = currentBlance;



    // 
    withdrawField.value = '';
});