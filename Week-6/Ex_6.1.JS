// Assignment 6 
// Question -- 6.1




function sum_cont_Subarray(a , size){

     let maxsum= 0;
     let max_ending= 0;
     for(let i=0; i<size;i++){
        max_ending=max_ending+ a[i];
        if(maxsum<max_ending){
            maxsum=max_ending;
        }
        if( max_ending<0){
            max_ending=0
        }
     }
     return maxsum;

}

const arr =[-2, 1, -3, 4, -1, 2, 1, -5, 4];
 const final_Sum=sum_cont_Subarray(arr, arr.length);
 console.log(` Sum : ${final_Sum}`);