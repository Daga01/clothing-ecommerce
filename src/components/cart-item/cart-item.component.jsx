import React from 'react';
import { CartItemContainer, CartItemImg, CartItemDetailsContainer, CartItemText } from './cart-item.styles';

const CartItem =({item: { imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <CartItemImg src={imageUrl}  alt='item'/>
        <CartItemDetailsContainer>
            <CartItemText>{name}</CartItemText>
            <CartItemText>{quantity} x ${price}</CartItemText>
        </CartItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;