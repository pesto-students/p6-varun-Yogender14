function spiral(matrix){


    if(matrix.length===0){
        return null;
    
    }else{  
    let top,left,bottom,right;
    top=0;
    left=0;
    bottom=matrix.length-1;
    right=matrix[0].length-1;

    const result=[];
    const size =matrix.length*matrix[0].length;
    while(result.length<size){
        for(let i=left; i<=right &&result.length<size; i++){
            result.push(matrix[top][i]) }
            top++;
        
        for(let i=top;i<=bottom&&result.length<size;i++){
            result.push(matrix[i][right]);}
            right --;
            for(let i=right; i>=left&&result.length<size;i--){
                result.push(matrix[bottom][i]);}
                bottom --;
            
                for(let i=bottom; i>=top&&result.length<size;i--){
                    result.push(matrix[i][left]); 
                }
                left ++;

            }
            return result;

        }
}
     const arr=[ [ 1, 2, 3 ],[ 4, 5, 6 ],[ 7, 8, 9 ] ];
     
     console.log(spiral(arr)); //  [1, 2, 3, 6, 9,8, 7, 4, 5]
    

