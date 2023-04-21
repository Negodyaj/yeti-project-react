import './HomePage.scss';
import { HeroPart } from './components/HeroPart/HeroPart';

export const HomePage = () => {
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
          <div className="grid-item wide">
            <img src="./assets/grid-item1.png" alt="" />
            <a href="">СНОУБОРДЫ</a>
          </div>
          <div className="grid-item with-top-margin">
            <img src="./assets/grid-item2.png" alt="" />
            <a href="">КРЕПЛЕНИЯ</a>
          </div>
          <div className="grid-item with-top-margin">
            <img src="./assets/grid-item3.png" alt="" />
            <a href="">БОТИНКИ</a>
          </div>
          <div className="grid-item wide">
            <img src="./assets/grid-item4.png" alt="" />
            <a href="">ОДЕЖДА</a>
          </div>
          <div className="grid-item">
            <img src="./assets/grid-item5.png" alt="" />
            <a href="">МАСКИ</a>
          </div>
          <div className="grid-item">
            <img src="./assets/grid-item6.png" alt="" />
            <a href="">ШЛЕМЫ И ЗАЩИТА</a>
          </div>
          <div className="grid-item">
            <img src="./assets/grid-item7.png" alt="" />
            <a href="">АКСЕССУАРЫ</a>
          </div>
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
