import './ProductCard.scss';
import React from 'react';

interface ProductCardProps {
  title: string;
  imageColor: string;
  colors: string[];
  price: number;
}

export const ProductCard = (props: ProductCardProps) => {
  const { colors, imageColor, price, title } = props;
  return (
    <div className="product-card">
      <div className="product-image" style={{ backgroundColor: imageColor }}></div>
      <div className="product-title">{title}</div>
      <div className="available-colors">
        {colors.map((color) => (
          <div key={`color-${color}`} className="product-color" style={{ backgroundColor: color }}></div>
        ))}
      </div>
      <div className="product-price">{price} руб.</div>
    </div>
  );
};
