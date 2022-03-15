function hasTargetSum(array, target) {
  // Write your algorithm here

  for(let i =0; i<array.length; i++){
    let comp = target - array[i];
    for(let j=1; j<array.length; j++){
      if(array[j] === comp){
        
        return true;
      }
    }
    return false;
  }

  /*
  let compliment;
  array.forEach(element => {
     compliment = target- element;
    let foundNum = array.find((e)=>{
        return e === compliment;
     })
      console.log(`found num: ${foundNum}`)
     if(foundNum +element === target){
       return true;
     }
     else if(foundNum === undefined){
       return false;
     }
     else{
       return undefined;
     }
  });
  */

}
  //filterd array for compliment number
   /*
 let foundNum = array.find((e)=>{
  return e+ compliment=== target;
 })




if(addedNum ===target){
  return true;e+ compliment === target
}
else{
  return false;
}
}
*/
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  for each {
    in a for each{
      that loops through the array for each item of the array
    }
  }
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
