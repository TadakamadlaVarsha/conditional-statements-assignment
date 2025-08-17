let category="standard";
let isweekends=true;
let price=0;
//assigning the price based on category//

switch(category){
    case "standard":
        price=150;
        break;
    case "premium":
        price=250;
        break;
    case "vip":
        price=400;
        break;
    case "balcony":
        price=600;
        break;
    default:
        console.log("invalid category");
        break;
}
//apply extra charge if it is weekend//

if(isweekends){
    price = price + (price*0.2);
}
//final output//

 console.log(`category:${category}`);
console.log(`final ticket price:${price}`);  
