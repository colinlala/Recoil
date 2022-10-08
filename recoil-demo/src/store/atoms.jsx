import { atom } from "recoil";

export const cart = atom({
    key: "cart",
    default: [
        { id: "apple", price: 2, qty: 3 },
        { id: "pear", price: 1, qty: 4 },
    ],
});
