export const HeroPart = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <h1>
          ТЕХНОЛОГИЧНАЯ
          <br />
          ОДЕЖДА ДЛЯ ЗИМНЕГО
          <br />
          СПОРТА
        </h1>
        <div className="hero-section-bottom">
          <div className="hero-section-label">
            НОВАЯ СНОУБОРДИЧЕСКАЯ
            <br />
            КОЛЛЕКЦИЯ
          </div>
          <a href="">ЗА ПОКУПКАМИ</a>
        </div>
      </div>
      <div className="background-container">
        <picture>
          <source
            media="(max-width: 900px)"
            srcSet="./assets/main-background-mobile.png"
          />
          <img
            src="./assets/main-background.png"
            alt="it's a Hero"
            className="hero-image"
          />
        </picture>
        <div className="back-gradient"></div>
      </div>
    </section>
  );
};
