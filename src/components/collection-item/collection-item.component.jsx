import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import {
  CollectionItemContainer,
  Image,
  AddButton,
  CollectionFooter,
  Name,
  Price
} from './collection-item.styles';


const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
  <CollectionItemContainer>
    <Image className='image' imageUrl={ imageUrl }/>
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>${price}</Price>
    </CollectionFooter>
    <AddButton onClick={() => addItem(item)} inverted>ADD TO CART</AddButton>
  </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
  addItem: item =>dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);