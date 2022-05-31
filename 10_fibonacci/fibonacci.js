const fibonacci = function(num) {
    num = Number(num);
    if (num < 1) return "OOPS";

    let fib = [1,1];
    for (let i=1; i<num; i++) {
        fib.push((fib[i])+(fib[i-1]));
    }
    return fib[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
