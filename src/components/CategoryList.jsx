import ListItem from "./ListItem";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addCategoryItem,
  deleteCategory,
  updateCategory,
} from "../store/Categories";

const CategoryList = ({ category }) => {
  const [addPick, setAddPick] = useState("");
  const dispatch = useDispatch();
  const [renameCat, setRenameCat] = useState(false);
  const [changeName, setChangeName] = useState("");

  const addItem = (e) => {
    e.preventDefault();
    if (!addPick) return;
    if (category.lists.length > 0 && category.lists.indexOf(addPick) !== -1)
      return;
    dispatch(addCategoryItem({ id: category.id, pick: addPick }));
    setAddPick("");
  };

  const handleDelete = () => {
    dispatch(deleteCategory({ id: category.id }));
  };

  const updateName = (e) => {
    e.preventDefault();
    if (!changeName) return;
    dispatch(updateCategory({ id: category.id, name: changeName }));
    setChangeName("");
    setRenameCat(!renameCat);
  };

  return (
    <div
      key={category.id}
      className={
        "rounded-md mx-auto p-3 max-w-[500px] space-y-4 my-10 flex flex-col justify-center " +
        "border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600"
      }
    >
      <div className={"flex justify-between"}>
        {renameCat ? (
          <form onSubmit={(e) => updateName(e)} action="">
            <input
              className={"flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"}
              type="text"
              onChange={(e) => setChangeName(e.target.value)}
              placeholder={"Edit Category"}
            />
            <button
              className={
                "rounded-sm bg-green-400 p-2 text-white hover:bg-green-500 transition-all"
              }
            >
              Save
            </button>
          </form>
        ) : (
          <h2 className={"text-xl font-semibold"}>
            Category Name: {category.name}
          </h2>
        )}
        <div className={"flex space-x-3"}>
          <button
            className={
              "rounded-sm bg-blue-400 p-2 text-white hover:bg-blue-500 transition-all"
            }
            onClick={() => setRenameCat(!renameCat)}
          >
            {!renameCat ? "Edit" : "Cancel"}
          </button>
          <button
            className={
              "rounded-sm bg-red-400 p-2 text-white hover:bg-red-500 transition-all"
            }
            onClick={() => handleDelete()}
          >
            Delete
          </button>
        </div>
      </div>
      <form
        onSubmit={(e) => addItem(e, category.id)}
        className={"bg-white rounded-md border border-gray-300 p-2"}
      >
        <div className={"flex items-center space-x-3"}>
          <input
            type="text"
            value={addPick}
            placeholder={"New Item"}
            className={"flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"}
            onChange={(e) => setAddPick(e.target.value)}
          />
          <button
            className={
              "rounded-sm bg-green-400 p-2 text-white hover:bg-green-500 transition-all"
            }
            type={"submit"}
          >
            Add Item
          </button>
        </div>
      </form>
      {category.lists.length > 0 &&
        category.lists.map((name) => (
          <ListItem key={name} id={category.id} itemName={name} />
        ))}
    </div>
  );
};

export default CategoryList;
