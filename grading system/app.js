let percentage=60;             //students percentage//
let isfinalyear=false;
let grade;
//else-if ladder for grade assignment//
if(percentage>=90){
    grade="A";
}else if(percentage>=80){
    grade="B";
}else if(percentage>=70){
    grade="C";
}else if(percentage>=60){
    grade="D";
}else if(percentage>=50){
    grade="E";
}
//fail case//
else{
    if(percentage>45 && isfinalyear){
        grade="Re-Evaluation eligible";
    }else{
        grade="fail";
    }
}
//final output//
console.log(`percentage:${percentage}%`);
console.log(`Grade:${grade}`);