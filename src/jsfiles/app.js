import React from "react";
import {products} from './seed.js'

export class ProductList extends React.Component {

    handleProductUpVote= (productId) => {
        console.log(productId + ' was upvoted. ');
    }

    render() {
        const productComponents = (products).map((prod) => (
                <Product key={'product-' + prod.id}
                         id={prod.id}
                         title={prod.title}
                         votes={prod.votes}
                         description={prod.description}
                         url={prod.url}
                         submitterAvatarUrl={prod.submitterAvatarUrl}
                         productImageUrl={prod.productImageUrl}
                         onVote={this.handleProductUpVote}
                />
            )
        )
        return productComponents;

    }

}

class Product extends React.Component {



    // Note: "this" will not be bound to the props automatically when we use normal functions
    //Hence we should use arrow functions to bind "this" automatically
    handleUpVote = ()=>{
       this.props.onVote(this.props.id)
    }

    /*
    * Alternatively we can use the following to bind "this" to props
    * constructor(props){
    *   super(props)
    *   this.myFunction = this.myFunction.bind(this)
    * }
    */

    render() {
        return (
            <div>
                <img src={this.props.productImageUrl} width="300" />
                <div>Votes: {this.props.votes}</div>
                <a onClick={this.handleUpVote}> Upvote the Product</a>
                <div>URL: {this.props.url}</div>
                <div>Title: {this.props.title}</div>
                <div>Description: {this.props.description}</div>
                <img src={this.props.submitterAvatarUrl} width="300"/><br/><br/>
            </div>
        )
    }
}