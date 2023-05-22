import './ProductCard.scss';
import { Link } from 'react-router-dom';
import React from 'react';

interface ProductCardProps {
  id: number;
  title: string;
  imageColor: string;
  image?: string;
  colors: string[];
  price: number;
}

export const ProductCard = (props: ProductCardProps) => {
  const { id, colors, imageColor, price, title, image } = props;
  return (
    <div className="product-card">
      {image ? (
        <img src={image} alt="" />
      ) : (
        <div className="product-image" style={{ backgroundColor: imageColor }}></div>
      )}
      <Link to={`/product/${id}`} className="product-title">{title}</Link>
      <div className="available-colors">
        {colors.map((color) => (
          <div key={`color-${color}`} className="product-color" style={{ backgroundColor: color }}></div>
        ))}
      </div>
      <div className="product-price">{price} руб.</div>
    </div>
  );
};
