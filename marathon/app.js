let completiontime=4;
let category="";
let age=17;

// Categorizing based on completion time

if(completiontime<2){
    category="elite";
}else if(completiontime>=2){
    category="advanced";
}else if(completiontime>=3){
    category="intermediate";
}else if(completiontime>=4){
    category="beginner";
}else if(completiontime>5){
    category="novice";
}

// Add Youth badge if under 18//

if(age<18){
    category += " + youth badge";
}
//final output//

console.log(`Completion Time:${completiontime}`);
console.log(`Age:${age}`);
console.log(`Category:${category}`);