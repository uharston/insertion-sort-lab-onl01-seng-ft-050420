// let array = [2, 3, 4, 5, 6, 7]
function findMinAndRemove(array){
    let min = array[0]
    let index; 
    array.forEach( (e, i) => {
        if( e < min ) {
            min = e 
            index = i 
        }
    })
    array.splice(index, 1)
    return min 

}

function selectionSort(array){
    let sorted = [] 
    while(array.length !== 0 ) {
        sorted.push(findMinAndRemove(array))
    }
    return sorted 
}
