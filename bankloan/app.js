let loanamount=2000000;
let interestrate=0.;
let creditscore=950;
let isgovtemployee=true;
let discount=0;
let monthlyincome=55000;
let month="december";
if(loanamount>1000000 && creditscore>800){
    interestrate=7;
    if(isgovtemployee){
        interestrate-=0.5;
    }
}
else
    if(creditscore>=650 && creditscore<=800 && monthlyincome>50000){
        interestrate=9;
        if(isgovtemployee){
            interestrate-=0.5;
        }
    }
    else
        if(month=="december"){
            interestrate=9;
        }
        else{
            "interest will be more";
        }
        console.log(`applicable interest rate:${interestrate}%`);