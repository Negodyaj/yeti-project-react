import './CategoriesGridItem.scss';

export interface CategoriesGridItemProps {
  imageSrc: string;
  linkTitle: string;
  isWide: boolean;
  hasTopMargin: boolean;
}

export const CategoriesGridItem = (props: CategoriesGridItemProps) => {
  const { imageSrc, isWide, linkTitle, hasTopMargin } = props;
  const className = `grid-item ${isWide ? 'wide' : ''} ${hasTopMargin ? 'with-top-margin' : ''}`;

  const clickHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
  };

  return (
    <div className={className}>
      <img src={imageSrc} alt="" />
      <a href="/" onClick={(event) => clickHandler(event)}>
        {linkTitle}
      </a>
    </div>
  );
};
