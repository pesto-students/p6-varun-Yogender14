//Javascript program to sort an array of 0, 1 and 2
 
// Sort the input array, the array is assumed to have values in {0, 1, 2}


function sort(Arr){
    let low,high, mid, temp;
    low=0;
    mid=0;
    temp=0;
    high=arr.length-1;
    
    while(mid<=high){
if(arr[mid]==0){
    temp=arr[low];
    arr[low]=arr[mid];
    arr[mid]=temp;
    low++;
    mid++;
    }
else if(arr[mid]==1){
    mid++;
}
else{
    temp=arr[mid];
    arr[mid]=arr[high];
    arr[high]=temp;
    high--;

}

    }
    return  print(arr);
}

function print(arr){

    const next=[]
    for(let i=0;i<arr.length-1;i++){
      next.push(arr[i]);
    }
    return console.log(next);
}


     
let arr= [0, 2, 1, 2, 0];
 sort(arr);  // output -- [ 0, 0, 1, 2]
   