import { CategoryCard } from "../../components";
import { categories } from "../../backend/db/categories";

const ShopByCategory = () => {
  return (
    <section className="category__wrapper">
      <h2 className="txt-center my-2">Featured Categories</h2>
      <div className="d-flex xy-center gap-2 wrap">
        {categories.map(({ _id, image, categoryName }) => (
          <CategoryCard
            key={_id}
            goToUrl={`/products`}
            imageUrl={image}
            categoryName={categoryName}
          />
        ))}
      </div>
    </section>
  );
};

export { ShopByCategory };
