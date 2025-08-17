let category="lunch";
let item="biryani";
let quantity=2;
let price=0;
switch(category){
    case "breakfast":
        switch(item){
            case "idli":
                price=30;
                break;
            case "dosa":
                price=50;  
                break;
            case "paratha":
                price=40;
                break;
            default:
                console.log("item not available");     
        }
        break;
    case "lunch":
        switch(item){
            case "thali":
                price=120;
                break;
            case "fried rice":
                price=80;
                break;
            case "biryani":
                price=150;
                break;
            default:
                console.log("item not available");
        }
        break;
    case "dinner":
        switch(item){
            case "roti":
                price=30;
                break;
            case "dal":
                price=70;
                break;
            case "jeera rice":
                price=200;
                break;
            default:
                console.log("item not available");
        }
        break;
default:
    console.log("category not available");
}
let finalbill = price*quantity;
console.log(`finalbill:${finalbill}`);