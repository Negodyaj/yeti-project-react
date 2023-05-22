import { CustomSelect } from '../../shared/CustomSelect/CustomSelect';
import { RootState } from '../../store/store';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import productImage from './assets/helmet.png';

export const ProductPage = () => {
  const params = useParams();
  const productId = +(params.productId ?? '');

  const options = [
    { value: 1, label: 'XS' },
    { value: 2, label: 'S' },
    { value: 3, label: 'M' },
    { value: 4, label: 'L' },
    { value: 5, label: 'XL' },
  ];

  const products = useSelector((state: RootState) => state.catalogPage.products);
  const currentProduct = products.find((product) => product.id === productId);

  return (
    <div className="container">
      {currentProduct ? (
        <>
          <h1>{currentProduct?.title}</h1>
          <img src={productImage} alt="" width={300} />
          <div>
            <div>Color: black</div>
            <div style={{ width: '300px' }}>
              Please choose the size:
              <br />
              <CustomSelect options={options} />
            </div>
          </div>
          <div>{currentProduct?.price}</div>
        </>
      ) : (
        <h1>Product {productId} does not exist =(</h1>
      )}
    </div>
  );
};
