import express, { Application, Request, Response } from 'express';
import * as calculate from './calculate';

const app: Application = express();

app.listen(3000, () => {
    console.log("sever is up");
});

const processGroceryList = (groceries: Array<any>) => {
    const output = calculate.calculatePriceAndQuantity(groceries);

    app.get('/', (req: Request, res: Response) => {
        res.send(output);
    })
    console.log(output);
}

const groceries = [{
    name: 'Milk',
    quantity: 2,
    price: 5.99
},
{
    name: 'Beer',
    quantity: 6,
    price: 11
},
{
    name: 'Watermelon',
    quantity: 1,
    price: 38.80
}];
processGroceryList(groceries);
