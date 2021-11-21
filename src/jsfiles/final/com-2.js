import React from "react"
import {products} from '../seed'

export class ProductList extends React.Component {

    render() {
        const productsFromSeed = products[0]
        return (
            <Product id={productsFromSeed.id}
                     title={productsFromSeed.title}
                     description={productsFromSeed.description}
                     url={productsFromSeed.url}
                     votes={productsFromSeed.votes}
                     submitterAvatar={productsFromSeed.submitterAvatarUrl}
                     productImage={productsFromSeed.productImageUrl}

            />


        )
    }
}

class Product extends React.Component {
    render() {
        return (
            <div>
                <div id={this.props.id}></div>
                <div>Title: {this.props.title}</div>
                <div>Description: {this.props.description}</div>
                <div>URL: {this.props.url}</div>
                <div>Votes: {this.props.votes}</div>
                <div>SubmitterAvatar: {this.props.submitterAvatarUrl}</div>
                <div>ProductImage: {this.props.productImage}</div>
                <br/><br/>
            </div>
        )
    }
}