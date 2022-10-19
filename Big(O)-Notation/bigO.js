/*
BigO-natation 
The Big-O notation measures the worst-case complexity of an algorithm
O(1) is holly

*/

//Comparing execution time
function addUpto1(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

t1 = performance.now();
console.log(addUpto1(10000000));
t2 = performance.now();

console.log(`1 took ${(t2 - t1) / 1000} seconds`);

function addUpto2(n) {
    return (n * (n + 1)) / 2;
}

t3 = performance.now();
console.log(addUpto2(10000000));
t4 = performance.now();

console.log(`2 took ${(t4 - t3) / 1000} seconds`);

/*
addUpto1 takes more executution time compared to addUpto2

Counting the number of operarions can also tell which function will take little time
Poerations grow proportionally to N(ninput size)
*/

/*O(1);
does not change with respect to input space
*/

//Examples
function someFunction(n) {
    for (var i = 0; i < n * 1000; i++) {
        for (var j = 0; j < n * 20; j++) {
            console.log(i + j);
        }
    }
}
/*
O(n2)
There are two nested loops.Ignore the constants in front of n

*/

function someFunction(n) {
    for (var i = 0; i < 1000; i++) {
        console.log("hi");
    }
}

/*O(1)
Constant complexity. The function runs from 0 to 1000. This does 
not depend on n.
 */

function someFunction(n) {
    for (var i = 0; i < n; i * 2) {
        console.log(n);
    }
}

/*
O(log2n)
Logarithmic complexity. For a given n, this will operate only log2n
times because i is incremented by multiplying by 2 rather than 
adding 1 as in the other examples.
*/