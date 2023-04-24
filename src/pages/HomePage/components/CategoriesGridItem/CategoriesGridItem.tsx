import "./CategoriesGridItem.scss";

interface CategoriesGridItemProps {
  imageSrc: string;
  linkTitle: string;
  isWide: boolean;
  hasTopMargin: boolean;
}

export const CategoriesGridItem = (props: CategoriesGridItemProps) => {
  const { imageSrc, isWide, linkTitle, hasTopMargin } = props;
  const className = `grid-item ${isWide ? 'wide' : ''} ${hasTopMargin ? 'with-top-margin' : ''}`;
  
  return (
    <div className={className}>
      <img src={imageSrc} alt="" />
      <a href="">{linkTitle}</a>
    </div>
  );
};
