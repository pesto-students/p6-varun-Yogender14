 function maxProfit (prices) {

    let maxProfit = 0;
    let minPrice = Number.MAX_VALUE;

    for (let i = 0; i < prices.length; i++) {

        if (minPrice > prices[i]) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }

    }

    return maxProfit;

};

const prices_1 = [7,1,5,3,6,4];
console.log(maxProfit(prices_1));

const prices_2 =[7,6,4,3,1];
console.log(maxProfit(prices_2));