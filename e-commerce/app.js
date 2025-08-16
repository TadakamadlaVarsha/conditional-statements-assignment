let destination="otherstate";
let ordervalue=2500;
let priority=false;
let deliveryfee=0;
let ispremiumMember=false;
let isweekend=false;
if(destination==="samecity"){
  if(priority){
    if(ordervalue>2000){
        deliveryfee=0;
    }else{
        deliveryfee=50;
    }
  }else{
    deliveryfee=50;
  }
}
else
    if(destination==="samestate"){
        if(ordervalue>5000){
            deliveryfee=0;
        }else{
            deliveryfee=100;
        }
    }
    else
        if(destination==="otherstate"){
            if(ispremiumMember){
                if(isweekend){
                    deliveryfee=100;
                }else{
                    deliveryfee=200;
                }
            }else{
                deliveryfee=200;
            }
        }else{
            deliveryfee=200;
        }
        console.log(`deliveryfee:${deliveryfee}`)
