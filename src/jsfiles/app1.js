import React from "react";
import {products} from "./seed";

export class ProductList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            prods: []
        };
        this.handleProductUpVote = this.handleProductUpVote.bind(this)
    }
    componentDidMount() {
        this.setState(
            {prods:products}
        )
    }

    handleProductUpVote(productId){
        const nextProducts = this.state.prods.map( (temp) => {
            if(temp.id == productId){
                return Object.assign({},temp, {votes: temp.votes+1})
            }else{
                return temp
            }
        })
        this.setState(
            {prods: nextProducts}
        )
    }

    render() {
        const sortedProducts =  this.state.prods.sort( (a,b) => b.votes - a.votes)
        const productComponents = (sortedProducts).map((prod) => (
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