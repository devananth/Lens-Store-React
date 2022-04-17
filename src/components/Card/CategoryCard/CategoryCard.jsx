import { Link } from "react-router-dom";
import { useFilter } from "../../../contexts";
import { FILTER_ACTIONS } from "../../../Utils/constants";
import "./category-card.css";

const CategoryCard = ({ goToUrl, imageUrl, categoryName }) => {
  const { filterDispatch } = useFilter();

  const categoryHandler = () => {
    filterDispatch({
      type: FILTER_ACTIONS.CATEGORY,
      payload: categoryName,
    });
  };

  return (
    <Link to={goToUrl} className="category__card" onClick={categoryHandler}>
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
