let plan="silver";
let attends=25;
let paymentmethod="upi";
let cashback=300;
monthlyfee=2000;
if(plan==="gold"){
    if(attends>20){
        if(paymentmethod="upi"){
            cashback=500;
        }
    }
}
else
    if(plan==="silver"){
        if(attends>15){
            if(paymentmethod="upi"){
                cashback=300;
            }
        }
    }
    else
        if(plan==="bronze"){
          if(attends>10){
            if(paymentmethod="debit card"){
                cashback=100;
            }
          }
        }
        let finalpayable = monthlyfee - cashback;
        console.log(`final payable amount:${finalpayable}`);