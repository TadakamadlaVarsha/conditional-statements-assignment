let plan="talktime";
let validitydays=0;
let isspecialweek=false;
switch(plan){
    case "talktime":
        validitydays=28;
        break;
    case "data pack":
        validitydays=14;
        break;
    case "combo pack":
        validitydays=35;
        break;
    case "unlimited plan":
        validitydays=60;
        break;
    default:
        console.log("invalid recharge plan");
}
if(validitydays!==null){
    if(isspecialweek){
        validitydays +=2;
    }
}
console.log(`remaining validity:${validitydays} days`);
console.log(`plan:${plan}`);