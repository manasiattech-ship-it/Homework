function orderFood(){
    let myOder = new Promise(function(resolve, reject){
    
        console.log('order is on the way>?🫨')

        let orderStatus = true

            
        if(orderStatus){
            
            setTimeout(function(){
                resolve("order at the door~~!!😊 ") 
            }, 2000);


        }
        else{
                        
            setTimeout(function(){                
                reject("order lost!❌")  
            }, 3000);

            console.error('false~!~~')

        }

    }) 
    .then(function(orderStatus){
        console.log(orderStatus)
        console.log("Make a payment!💳") 
        
        paymentDone = false
        return new Promise(function(res, rej){  
                if(paymentDone){   
                    res("Ho gaya, khana lo✌️") 
                }
                else{   
                    rej("Credit card did not work~!")

                }
            })}
            ).then(function(msg){
                console.log(msg) 

                console.log("food eating") 
            })
            .catch(function(msg){ 
                console.log(msg)  
                if(msg==="order lost!❌"){
                    console.error("complain") 
                }
                else{ 
                    console.error("Hungry!!!")
                }
            })  
    .catch(function(orderStatus){ 
        console.error(orderStatus) 
    })
    .finally(function () {
    console.log("Process End!");
    })
}
orderFood()