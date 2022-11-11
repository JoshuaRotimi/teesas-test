import { addCategory } from "../store/Categories";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const NewCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.value);
  const [categoryName, setCategoryName] = useState("");
  const lastId = categories[categories.length - 1];

  const newId = lastId !== undefined ? lastId.id + 1 : 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!categoryName) return;
    dispatch(addCategory({ name: categoryName, id: newId, lists: [] }));
    setCategoryName("");
  };

  return (
    <form
      className={
        "sticky top-10 bg-white z-50 rounded-md border border-gray-300 p-2"
      }
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className={"flex items-center space-x-3"}>
        <input
          type="text"
          placeholder={"New Category"}
          value={categoryName}
          className={"flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"}
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <button
          className={"rounded-full bg-blue-400 p-2 text-white"}
          type={"submit"}
        >
          Add Category
        </button>
      </div>
    </form>
  );
};

export default NewCategory;
