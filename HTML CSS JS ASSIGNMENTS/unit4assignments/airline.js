function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
    var arr1 = input[1].trim().split(" ").map(Number);
    var arr2 = input[2].trim().split(" ").map(Number);
    add(n, arr1, arr2);
}
function add(n, arr1, arr2){
    for(var i=0; i<n; i++){
        if(arr1[i]>15 || arr2[i]>7){
            console.log("Stop");
        }
        else{
            console.log("Boarding");
        }
    }
}
    
runProgram(`4
12 14 15 6
8 5 7 4`);

