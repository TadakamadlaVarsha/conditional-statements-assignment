let amount=15000;
let discount=0;
let isBirthday=true;
if(amount>20000){
    discount=25;
}else if(amount>=15000 && amount<=19999){
    discount=20;
}else if(amount>=10000 && amount<=14999){
    discount=15;
}else if(amount>=5000 && amount<=9999){
    discount=10;
}else{
    discount=0;
}
if(isBirthday){
    discount +=5;
}
let discountamount = (amount*discount)/100;
let finalprice= amount - discountamount;
console.log(`purchase amount:${amount}`);
console.log(`discount:${discount}`);
console.log(`finalprice:${finalprice}`);
