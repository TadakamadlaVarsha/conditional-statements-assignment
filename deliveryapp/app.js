let orderamount=450;
let ispremiumMember=false;
let isweekday=true;
let ordertime=19;
let usedcoupon=false;
let issunday=true;
let ismorning=true;
let benefit="";
if(orderamount>1000 && ispremiumMember){
    benefit="free delivery + 15% off";
}
else if(orderamount>=500 && orderamount<=1000 && isweekday && ordertime >=18 && ordertime<=20 && !usedcoupon){
    benefit="$100 discount";
}
else if(orderamount<500 && issunday && ismorning){
    benefit="free delivery";
}
else{
    console.log("they have to pay full amount")
}
console.log(`benefit:${benefit}`);