import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors.js';
import { createStructuredSelector } from 'reselect';

import { CartIconContainer, ItemCount, ShoppingIconContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer className='shopping-icon'/>
        <ItemCount className='item-count'>{itemCount}</ItemCount>
    </CartIconContainer>
);

const mapDispachToProps = dispach => ({
    toggleCartHidden: () => dispach(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispachToProps)(CartIcon);