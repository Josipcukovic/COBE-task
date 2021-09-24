import express, { Application, Request, Response } from 'express';
import * as calculate from './calculate';
import { Grocery } from './Grocery';

const app: Application = express();

app.listen(3000, () => {
    console.log("sever is up");
});


const processGroceryList = (groceries: Grocery[]) => {
    const output = calculate.calculatePriceAndQuantity(groceries);

    app.get('/', (req: Request, res: Response) => {
        res.send(output);
    })
    console.log(output);
}

const groceries: Grocery[] = [
    new Grocery('Milk', 2, 5.99),
    new Grocery('Beer', 6, 11),
    new Grocery('Watermelon', 1, 38.80)
];
processGroceryList(groceries);
