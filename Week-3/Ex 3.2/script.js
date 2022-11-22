

 // Function  Sum Of Two Numbers
 
 const  sum =function add( a ,b=0){
 
    return a +b;
 }


//Memoize Function 
const memoize = function(addToMemoize){
let cache = {};
return  function(...args) {
    let n = addProperty(addToMemoize,args) ;

     if( !cache[n]){
       
        cache[n]=addToMemoize(...args);
     }else{
        console.log( "\n" + "output from cache ");
         
     }
     return cache[n];
}
}
// create Property Name From the Arguments passed to the Function 
const addProperty= function( addToMemoize , args){
    let check =[];
    check=check.concat(addToMemoize.name,args);
    return  check.join('|')
}

//Function Calling 

 const  memoizeAdd = memoize(sum);
 console.log(memoizeAdd(100 ,100)); 
 console.log(memoizeAdd(100));
 console.log(memoizeAdd( 100,200));
 console.log(memoizeAdd(100 ,100));

 



