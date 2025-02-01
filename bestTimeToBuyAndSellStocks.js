function solution(prices) {
    let currMin=prices[0];
    let profit = 0;
    for(let idx=1; idx<prices.length; idx++) {
        if(prices[idx] > currMin) {
            profit = Math.max(profit, prices[idx]-currMin);
        }
        else {
            currMin = prices[idx];
        }
    }
    return profit;
}

let prices = [7,6,4,3,1,8,6];
console.log(solution(prices));