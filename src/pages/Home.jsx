import NewCategory from "../components/NewCategory";
import Category from "../components/Category";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Home = () => {
  const categories = useSelector((state) => state.category.value);
  let itemsList = [];
  categories.map((item) => itemsList.push(...item.lists));

  return (
    <div>
      <Header />
      <div className="max-w-4xl mx-auto">
        <div className={"flex space-x-3 my-5"}>
          <div
            className={
              "rounded-md shadow bg-blue-400 p-3 font-bold text-black-200"
            }
          >
            Total Categories: {categories.length}
          </div>
          <div
            className={
              "rounded-md shadow bg-blue-400 p-3 font-bold text-black-400"
            }
          >
            Total Items: {itemsList.length}
          </div>
        </div>

        <NewCategory />
        <div className="mt-5">
          <Category />
        </div>
      </div>
    </div>
  );
};

export default Home;
