
function getInputValue(){
    const depositInput = document.getElementById('deposit-input');

    const depositAmount = depositInput.value;

    const depositAmountInt = parseFloat(depositAmount);

    depositInput.value = '';

    return depositAmountInt;
}

document.getElementById('deposit-button').addEventListener('click', function () {

/*     const depositInput = document.getElementById('deposit-input');

    const depositAmount = depositInput.value;

    const depositAmountInt = parseFloat(depositAmount); */

    const depositAmountInt = getInputValue();

    const depositTotal = document.getElementById('deposit-total');

    const depositTotalAmount = depositTotal.innerText;

    const depositTotalAmountInt = parseFloat(depositTotalAmount);

    depositTotal.innerText = depositTotalAmountInt + depositAmountInt;

    //UPDATE BALANCE

    const totalBalance = document.getElementById('balance-total');

    const totalBalanceText = totalBalance.innerText;

    const previousTotalBalance = parseFloat(totalBalanceText);

    totalBalance.innerText = previousTotalBalance + depositAmountInt;


})

// WITHDRAW HANDEL

document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawAmount = withdrawInput.value;

    const withdrawAmountText = parseFloat(withdrawAmount);

    const withdrawTotal = document.getElementById('withdraw-total');

    const withdrawTotalAmount = withdrawTotal.innerText;

    const withdrawTotalAmountText = parseFloat(withdrawTotalAmount);

    withdrawTotal.innerText = withdrawAmountText + withdrawTotalAmountText;

    const totalBalance = document.getElementById('balance-total');

    const totalBalanceText = totalBalance.innerText;

    const previousTotalBalance = parseFloat(totalBalanceText);

    totalBalance.innerText = previousTotalBalance - withdrawAmount;

    withdrawInput.value = '';
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
/* else if(isValidCommand(message, "post")){
    let announcement = message.content.substring(6);
    let announcementsChannel = client.channels.announcementsChannel.get('874498102139166730');
    if(announcementsChannel)
        announcementsChannel.send(announcement)
}

const isValidCommand = (message, cmdName) => message.content.toLowerCase().startWith(prefix + cmdName); */

/* module.exports ={
    name:"post",
    description: "make an annoucement to a channel",
    authorPermission:"MANAGE_SERVER",
    run: async(client, message, args) =>{
      const channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.id === args[0])
      if(!channel)return message.reply("Channel not found")
      const announcement = args.slice(1).join(" ")
      if(!announcement) return message.reply("please give an annoucement!")
      channel.send(announcement)
    }
  } */