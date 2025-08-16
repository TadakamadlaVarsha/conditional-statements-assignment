let age=65;
let discountpercent=0;
let issunday=false;
let isweekday=true;
let isfestivalweek=false;
let currentmonth="november";
let hasstudentid=false;
ticketprice=1000;
if (age>60){
    if(isweekday){
      if(!isfestivalweek){
        discountpercent=0.30;
      } else{
        if(issunday){
            discountpercent=0.10;
        }
      }
    }else{
        if(issunday){
            discountpercent=0.10;
        }
    }
}
       else if(age<25){
            if(hasstudentid){
                if(currentmonth!= "december"){
                    discountpercentage=0.20;
                }else{
                    if(issunday){
                        discountpercent=0.10;
                    }
                }
            }else{
                if(issunday){
                    discountpercent=0.10;
                }
            }
        }else{
            if(issunday){
                discountpercent=0.10;
            }
        }

       let finalprice =ticketprice*(1-discountpercent);
       console.log(`final ticket price: ${finalprice}`)