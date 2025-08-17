let temperature=25;         // current temperature in °C
let category ;  
let isRaining=true;    
// else-if ladder for categorization

if(temperature >40){
    category="Extremely Hot";
}else if(temperature >=30){
    category="Hot";
}else if(temperature >=20){
    category="Warm";
}else if(temperature >=10){
    category="Cool";
}else{
    category="Cold";
}
// Append "and Rainy" if raining//
if(isRaining){
    category += " and Rainy";
}
//final output//
console.log(`temperature:${temperature}C`);
console.log(`weather:${category}`);