import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCategoryItem, updateCategoryItem } from "../store/Categories";

const ListItem = ({ itemName, id }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [changeItemName, setChangeItemName] = useState("");
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCategoryItem({ id, name: itemName }));
  };

  const submitName = (e) => {
    e.preventDefault();
    if (!changeItemName) return;
    dispatch(
      updateCategoryItem({ id, name: itemName, newItem: changeItemName })
    );
    setChangeItemName("");
    setShowEdit(!showEdit);
  };

  return (
    <div className={"flex flex-col border border-gray-200 p-2"}>
      <div className={"flex justify-between items-center"}>
        <p className={"text-lg font-light"}>{itemName}</p>
        <div className={"flex items-center space-x-3"}>
          <button
            className={
              "rounded-sm bg-blue-400 p-2 text-white hover:bg-blue-500"
            }
            onClick={() => setShowEdit(!showEdit)}
          >
            Edit
          </button>
          <button
            className={"rounded-sm bg-red-400 p-2 text-white hover:bg-red-500"}
            onClick={() => handleDelete()}
          >
            Delete
          </button>
        </div>
      </div>
      {showEdit && (
        <form
          className={
            "flex bg-white my-3 rounded-md border space-x-3 border-gray-300 p-2"
          }
          onSubmit={(e) => submitName(e)}
        >
          <input
            className={"flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"}
            type="text"
            placeholder={"Edit Item"}
            onChange={(e) => setChangeItemName(e.target.value)}
          />
          <div className={"flex space-x-3"}>
            <button
              type={"submit"}
              className={
                "rounded-sm bg-blue-400 p-2 text-white hover:bg-blue-500"
              }
            >
              Save
            </button>
            <button
              className={
                "rounded-sm bg-red-400 p-2 text-white hover:bg-red-500"
              }
              onClick={() => setShowEdit(!showEdit)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ListItem;
