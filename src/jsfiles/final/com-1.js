import React from "react";

export class ProductList extends React.Component{

    render() {
        return(
            <div>
                <Product/>
            </div>
        )
    }
}

class Product extends React.Component{
    render() {
        return(
            "Hello World from Product"
        )
    }
}