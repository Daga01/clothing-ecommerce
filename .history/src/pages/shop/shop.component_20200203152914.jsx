import React from 'react';

const ShopPage = ({ collections }) => (
  <div className='shop-page'>
  {
    collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps}/>
    ))
  }
  </div>
);


export default ShopPage;