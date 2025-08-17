let yearsOfExperience=17;       // employee experience in years
let joiningmonth="july";
let bonus;

// Bonus based on years of experience
if(yearsOfExperience>15){
    bonus=50000;
}else if(yearsOfExperience>=10){
    bonus=30000;
}else if(yearsOfExperience>=5){
    bonus=20000;
}else if(yearsOfExperience>=2){
    bonus=10000;
}else{
    bonus=5000;
}
// Extra bonus for December joining//
if(joiningmonth==="December"){
    bonus +=2000;
}
//final output//
console.log(`Experience:${yearsOfExperience}`);
console.log(`joiningmonth:${joiningmonth}`);
console.log(`Total bonus:${bonus}`);