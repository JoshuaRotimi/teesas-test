import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";

const Category = () => {
  const categories = useSelector((state) => state.category.value);

  return (
    <div className={""}>
      {categories?.map((item) => (
        <CategoryList key={item.id} category={item} />
      ))}
    </div>
  );
};

export default Category;
