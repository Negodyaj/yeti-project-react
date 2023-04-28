import './HomePage.scss';
import { CategoriesGridItem, CategoriesGridItemProps } from './components/CategoriesGridItem/CategoriesGridItem';
import { HeroPart } from './components/HeroPart/HeroPart';
import Snowboard from './assets/grid-item1.png';
import GridItem2 from './assets/grid-item2.png';
import GridItem3 from './assets/grid-item3.png';
import GridItem4 from './assets/grid-item4.png';
import GridItem5 from './assets/grid-item5.png';
import GridItem6 from './assets/grid-item6.png';
import GridItem7 from './assets/grid-item7.png';
import { useEffect, useState } from 'react';

export const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [categories, setCategories] = useState<CategoriesGridItemProps[]>([]);
  
  useEffect(() => {
    // we need to get data from API
    // we are calling our backend and getting some data
    const backendResponse: CategoriesGridItemProps[] = [
      {
        imageSrc: Snowboard,
        linkTitle: "СНОУБОРДЫ",
        isWide: true,
        hasTopMargin: false,
      }, {
        imageSrc: GridItem2,
        linkTitle: "КРЕПЛЕНИЯ",
        isWide: false,
        hasTopMargin: true,
      }, {
        imageSrc: GridItem3,
        linkTitle: "БОТИНКИ",
        isWide: false,
        hasTopMargin: true,
      }, {
        imageSrc: GridItem4,
        linkTitle: "ОДЕЖДА",
        isWide: true,
        hasTopMargin: false,
      }, {
        imageSrc: GridItem5,
        linkTitle: "МАСКИ",
        isWide: false,
        hasTopMargin: false,
      }, {
        imageSrc: GridItem6,
        linkTitle: "ШЛЕМЫ И ЗАЩИТА",
        isWide: false,
        hasTopMargin: false,
      }, {
        imageSrc: GridItem7,
        linkTitle: "АКСЕССУАРЫ",
        isWide: false,
        hasTopMargin: false,
      }, 
    ];
    console.log('useEffect');
    setCategories(backendResponse);
  }, []);

  const slideWidth = 355;

  const leftMargin = -slideWidth * currentSlide + 'px';

  const doLeftSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(e);
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  const doRightSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentSlide < 5) {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <>
      <HeroPart />
      <section className="about-section">
        <div className="container">
          <h2 className="common-section-header">О НАС</h2>
        </div>
      </section>
      <section className="catalog-section">
        <div className="container">
          <h2 className="common-section-header">КАТАЛОГ</h2>
        </div>
        <div className="categories-grid">
          {
            categories.map(category =>
              <CategoriesGridItem
                key={`category-${category.linkTitle}`}
                imageSrc={category.imageSrc}
                linkTitle={category.linkTitle}
                isWide={category.isWide}
                hasTopMargin={category.hasTopMargin} />
            )
          }
        </div>
      </section>
      <section>
        <div className="carousel-container">
          <div className="carousel-controls">
            <button onClick={(e) => doLeftSlide(e)}>left</button>
            <button onClick={(e) => doRightSlide(e)}>right</button>
          </div>
          <div className="carousel-wrapper">
            <div className="carousel-item" style={{marginLeft: leftMargin}}>1</div>
            <div className="carousel-item">2</div>
            <div className="carousel-item">3</div>
            <div className="carousel-item">4</div>
            <div className="carousel-item">5</div>
            <div className="carousel-item">6</div>
            <div className="carousel-item">7</div>
            <div className="carousel-item">8</div>
          </div>
        </div>
      </section>
    </>
  );
};
