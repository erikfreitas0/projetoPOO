import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [quantidade, setQuantidade] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);
    const valor = 100;

    const addCart = () => {
        setQuantidade(prevQuantidade => prevQuantidade + 1);
        setValorTotal(prevValorTotal => prevValorTotal + valor);
    };

    return (
        <CartContext.Provider value={{ quantidade, valor, addCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
