import { Link } from "react-router-dom";
import "./category-card.css";

const CategoryCard = ({ goToUrl, imageUrl, categoryName }) => {
  return (
    <Link to={goToUrl} className="category__card">
      <img
        src={imageUrl}
        className="img-responsive"
        alt={categoryName || "camera"}
        loading="lazy"
      />

      <span className="categogry__name txt-center txt-bold txt-2xl">
        {categoryName}
      </span>
    </Link>
  );
};

export { CategoryCard };
