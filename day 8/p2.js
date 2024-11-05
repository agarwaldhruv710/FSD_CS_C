async function orderfood(name,time) 
{
    return new Promise((resolve,reject)=>
    {
        if(name=="Burger")reject("Burger not available");
        setTimeout(() =>{
            resolve("order for "+ name+" has prepared");
        },time)
     
      });
}
    
async function resturant() {
    console.log("order food");
    let pizza=await orderfood("pizza",2000);
    console.log(pizza)
    try{
        let Burger=await orderfood("Burger",3000);
        console.log(Burger)
    }catch(error){
        console.log(error)
    }
    
   
    let noodels=await orderfood("noodels",4000);
    console.log(noodels)
    console.log("All order prepared")
}
resturant();