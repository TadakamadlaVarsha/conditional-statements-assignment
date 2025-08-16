let size="large";
let addons="extra shot";
let amount=0;
switch(size){
    case "small":
        amount=100;
        switch(addons){
            case "extra shot":
                amount +=30;
                break;
            case "flavoured syrup":
                amount +=20;
                break;
            case "whipped cream":
                amount +=25;
                break;
            case "none":
                break;
                default:
                    console.log("invalid add-on");
        }
        break;
    case "medium":
        amount=150;
        switch(addons){
            case "extra shot":
                amount +=30;
                break;
            case "flavoured syrup":
                amount +=20;
                break;
            case "whipped cream":
                amount +=25;
                break;
            case "none":
                break;
                default:
                    console.log("invalid add-on");
        }
        break;
    case "large":
        amount=200;
        switch(addons){
            case "extra shot":
                amount +=30;
                break;
            case "flavoured syrup":
                amount +=20;
                break;
            case "whipped cream":
                amount +=25;
                break;
            case "none":
                break;
                default:
                    console.log("invalid add-on");
        }
        break;
    case "extra-large":
        amount=250;
        switch(addons){
            case "extra shot":
                amount +=30;
                break;
            case "flavoured syrup":
                amount +=20;
                break;
            case "whipped cream":
                amount +=25;
                break;
            case "none":
                break;
                default:
                    console.log("invalid add-on");
        }
        break;
        default:
            console.log("error");
}
console.log(`amount:${amount}`);