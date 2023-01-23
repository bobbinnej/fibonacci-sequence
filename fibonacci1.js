//output the fibonacci sequence dependent on n

function fibonacci(n){
    const fibos=[0,1];
    for(let i=2; i<n; i++){
        fibos.push(fibos[i-2] + fibos[i-1]);
    }
    return fibos
}
console.log(fibonacci(5));


// we have one for loop which = to O(n)
// as the value of n increases the number of times line 5 executes and increases
// The Big O notation is linear
// Big O = O(n)