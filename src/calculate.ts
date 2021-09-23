const roundNumberToTwoDecimals = (number: number) => {
    return Math.round(number * 100) / 100;
}

const calculateTax = (amount: number) => {
    return roundNumberToTwoDecimals(0.18 * amount);
}

const calculateTotalPrice = (tax: number, amount: number) => {
    return roundNumberToTwoDecimals(amount + tax);
}

const calculatePriceAndQuantity = (groceries: Array<any>) => {
    let numberOfArticles = 0;
    let totalPriceWithoutTax = 0;
    let tax = 0;
    let totalPrice = 0;

    groceries.forEach(item => {
        if (!(item.quantity < 0 || !Number.isInteger(item.quantity) || item.price < 0)) {

            numberOfArticles += item.quantity
            totalPriceWithoutTax += (item.quantity * item.price);
        } else {
            console.log("some of properties are not valid");
        }

    })
    tax = calculateTax(totalPriceWithoutTax);
    totalPrice = calculateTotalPrice(tax, totalPriceWithoutTax);

    return {
        numberOfArticles,
        taxes: tax,
        totalPrice
    };

}

export {
    calculateTax,
    calculateTotalPrice,
    calculatePriceAndQuantity,
    roundNumberToTwoDecimals
};