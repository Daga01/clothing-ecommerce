import React from 'react';
import { connecr } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopItems } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
  {
    collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps}/>
    ))
  }
  </div>
);

const mapStateToProps =  createStructuredSelector({
  collections: selectShopItems
})
export default ShopPage;