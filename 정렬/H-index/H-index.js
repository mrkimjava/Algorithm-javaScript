/**
 * 
 */

function solution(citations) {
    
    insertionSort(citations);

    var size = citations.length;
    for(let i = size-1; i >= 0; i--){
        if(citations[i] < size-i) 
            return size-i-1;
    }
    return size;
}

function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let left = i - 1;
        
        while(left >= 0 && arr[left] > current){
            
            arr[left + 1] = arr[left];
            left--;
            
        }
        arr[left + 1] = current;
    }
    
}