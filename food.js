class FOOD{
constructor(){

}

display(){

    
   
}

getFooodStock(){
    foodstockref = database.ref('foods')
    foodstockref.on("value",function(data){
        foodstock = data.val();
    })
    
}

updateFoodStock(count){
    database.ref('/').update({
        foodstock:count
    })

}

deductFood(x){
    if(x<=0){
        x=0;
      }
      else{
        x=x-1;
      }
    
      database.ref('/').update({
        foods:x
    
      })

}

}