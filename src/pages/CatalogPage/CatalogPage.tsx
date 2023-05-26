import './CatalogPage.scss';
import { Controller, useForm } from 'react-hook-form';
import { CustomSelect } from '../../shared/CustomSelect/CustomSelect';
import { Navigation, Pagination } from 'swiper';
import { ProductCard } from '../../shared/ProductCard/ProductCard';
import { RootState } from '../../store/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import { baseUrl } from '../../shared/consts';
import { filter, getProducts } from './catalogPage.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

type FormData = {
  priceFrom: number;
  priceTo: number;
  category: {
    value: number;
    label: string;
  };
  size: {
    value: number;
    label: string;
  };
};

export const CatalogPage = () => {
  const state = useSelector((state: RootState) => state.catalogPage);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>();

  useEffect(() => {
    fetch(`${baseUrl}/products`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(getProducts(json));
      });
  }, []);

  const categoryOptions = [
    { value: 1, label: 'Snowboards' },
    { value: 2, label: 'Jackets' },
    { value: 3, label: 'Boots' },
  ];

  const sizeOptions = [
    { value: 1, label: 'XS' },
    { value: 2, label: 'S' },
    { value: 3, label: 'M' },
    { value: 4, label: 'L' },
    { value: 5, label: 'XL' },
  ];

  const onSubmit = (data: FormData) => {
    console.log(data);
    const payload = {
      priceFrom: data.priceFrom,
      priceTo: data.priceTo,
      category: data.category?.value,
      size: data.size?.label,
    };
    dispatch(filter(payload));
  };

  return (
    <div className="catalog-page container">
      <h1>Catalog</h1>
      <div className="page-content">
        <div className="filters-panel">
          <h2>Filters</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-label">Price</div>
            <div className="form-control">
              <div className="input-wrapper">
                From
                <input type="number" {...register('priceFrom')} />
              </div>
              <div className="input-wrapper">
                To
                <input type="number" {...register('priceTo')} />
              </div>
            </div>
            <div className="form-label">Category</div>
            <div className="form-control">
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <CustomSelect options={categoryOptions} placeholder="Select a category" field={field} />
                )}
              />
            </div>
            <div className="form-label">Size</div>
            <div className="form-control">
              <Controller
                name="size"
                control={control}
                render={({ field }) => (
                  <CustomSelect options={sizeOptions} placeholder="Select a size" field={field} />
                )}
              />
            </div>
            <button type="submit">Apply filters</button>
          </form>
        </div>
        <div className="products-grid">
          {state.filteredProducts.map((product) => (
            <ProductCard
              key={`product-${product.id}`}
              id={product.id}
              title={product.title}
              imageColor={product.imageColor}
              image={product.image}
              colors={product.colors}
              price={product.price}
            />
          ))}
        </div>
      </div>
      <h2>You also may like these products:</h2>
      <div className="carousel-wrapper">
        <Swiper
          spaceBetween={42}
          slidesPerView={5}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Pagination]}
        >
          {state.products.map((product) => (
            <SwiperSlide key={`product-${product.id}`}>
              <ProductCard
                id={product.id}
                title={product.title}
                imageColor={product.imageColor}
                colors={product.colors}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
