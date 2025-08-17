let type="reference";
let overduedays=4;
let fineperday=0;
let isstudent=false;
switch(type){
    case "fiction":
        fineperday=3;
        break;
    case "non-fiction":
        fineperday=4;
        break;
    case "reference":
        fineperday=5;
        break;
    case "magazine":
        fineperday=2;
        break;
    default:
        console.log("invalid book type");
}
let totalfine = fineperday*overduedays;
if(isstudent){
    totalfine = totalfine*0.5;
}
console.log(`type:${type}`);
console.log(`final fine:${totalfine}`);