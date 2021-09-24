import { Grocery } from "./Grocery";


const roundNumberToTwoDecimals = (number: number) => {
    return Math.round(number * 100) / 100;
}

const calculateTax = (amount: number) => {
    return roundNumberToTwoDecimals(0.18 * amount);
}

const calculateTotalPrice = (tax: number, amount: number) => {
    return roundNumberToTwoDecimals(amount + tax);
}


const calculatePriceAndQuantity = (groceries: Grocery[]) => {
    let numberOfArticles = 0;
    let totalPriceWithoutTax = 0;
    let tax = 0;
    let totalPrice = 0;

    groceries.forEach(grocery => {
        if (!(grocery.quantity < 0 || !Number.isInteger(grocery.quantity) || grocery.price < 0)) {

            numberOfArticles += grocery.quantity
            totalPriceWithoutTax += (grocery.quantity * grocery.price);
        } else {
            console.log(`some of the properties in ${grocery.name} object are not valid `);
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