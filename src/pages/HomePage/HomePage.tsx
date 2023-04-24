import './HomePage.scss';
import { CategoriesGridItem } from './components/CategoriesGridItem/CategoriesGridItem';
import { HeroPart } from './components/HeroPart/HeroPart';
import Snowboard from './assets/grid-item1.png';
import GridItem2 from './assets/grid-item2.png';
import GridItem3 from './assets/grid-item3.png';
import GridItem4 from './assets/grid-item4.png';
import GridItem5 from './assets/grid-item5.png';
import GridItem6 from './assets/grid-item6.png';
import GridItem7 from './assets/grid-item7.png';

export const HomePage = () => {
  const categories = [
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
      <h2>Old version: </h2>
      <section className="catalog-section">
        <div className="container">
          <h2 className="common-section-header">КАТАЛОГ</h2>
        </div>
        <div className="categories-grid">
          <CategoriesGridItem imageSrc={Snowboard} linkTitle="СНОУБОРДЫ" isWide={true} hasTopMargin={false} />
          <CategoriesGridItem imageSrc={GridItem2} linkTitle="КРЕПЛЕНИЯ" isWide={false} hasTopMargin={true} />
          <CategoriesGridItem imageSrc={GridItem3} linkTitle="БОТИНКИ" isWide={false} hasTopMargin={true} />
          <CategoriesGridItem imageSrc={GridItem4} linkTitle="ОДЕЖДА" isWide={true} hasTopMargin={false} />
          <CategoriesGridItem imageSrc={GridItem5} linkTitle="МАСКИ" isWide={false} hasTopMargin={false} />
          <CategoriesGridItem imageSrc={GridItem6} linkTitle="ШЛЕМЫ И ЗАЩИТА" isWide={false} hasTopMargin={false} />
          <CategoriesGridItem imageSrc={GridItem7} linkTitle="АКСЕССУАРЫ" isWide={false} hasTopMargin={false} />
        </div>
      </section>
      <section>
        <div className="carousel-container">
          <div className="carousel-controls">
            <button>left</button>
            <button>right</button>
          </div>
          <div className="carousel-wrapper">
            <div className="carousel-item">1</div>
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
