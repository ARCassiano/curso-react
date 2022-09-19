import React from "react";
import products from "../data/products";

const component = () => {
    const lines = products.map(product => (
        <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.value}</td>
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {lines}
            </tbody>
        </table>
    );
};

export default component;