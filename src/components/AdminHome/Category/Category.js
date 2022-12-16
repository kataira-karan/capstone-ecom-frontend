import { React, useState, useEffect } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { CiEdit } from "react-icons/ci";
import { GrAdd } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
const Category = () => {
  const [allCategories, setallCategories] = useState(null);
  const [newCategory, setnewCategory] = useState({ name: "" });
  const [isEditStateOn, setisEditStateOn] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [updateCategoryId, setupdateCategoryId] = useState();

  const [isAddNewCategoryFormActive, setisAddNewCategoryFormActive] =
    useState(false);

  const fetchAllCategory = async () => {
    const requestOptions = {
      crossDomain: true,
      mode: "cors",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    await fetch(
      "https://ecomcapstone20221214140957.azurewebsites.net/api/Product/GetCategoryData",
      requestOptions
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setallCategories(data.data);
      });
  };

  const deleteCategory = async (category) => {
    let confirm = window.confirm("Are you sure you want to delete?");

    if (confirm) {
      const requestOptions = {
        crossDomain: true,
        mode: "cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: category.id, name: category.name }),
      };

      console.log(category);
      await fetch(
        "https://ecomcapstone20221214140957.azurewebsites.net/api/Product/DeleteCategory",
        requestOptions
      )
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          console.log(data);
          window.location.reload();
        });
    } else {
      return;
    }
  };

  const editCategory = (category) => {
    console.log(category);
    setisAddNewCategoryFormActive(true);
    setisEdit(true);
    setnewCategory({ name: category.name });
    setupdateCategoryId({ id: category.id });
  };

  const displayAddNewCategoryFrom = () => {
    setisAddNewCategoryFormActive(true);
  };

  const addNewCategory = async (e, c) => {
    console.log(newCategory);
    e.preventDefault();
    const requestOptions = {
      crossDomain: true,
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCategory),
    };
    await fetch(
      "https://ecomcapstone20221214140957.azurewebsites.net/api/Product/AddCategory",
      requestOptions
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        window.location.reload();
        // setallProducts(data.data);
      });
  };

  const cancleAddNewCategory = () => {
    setnewCategory({ name: "" });
    setisAddNewCategoryFormActive(false);
  };

  const updateCategory = async () => {
    const requestOptions = {
      crossDomain: true,
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newCategory.name, id: updateCategoryId.id }),
    };
    await fetch(
      "https://ecomcapstone20221214140957.azurewebsites.net/api/Product/UpdateCategory",
      requestOptions
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // setallProducts(data.data);
        window.location.reload();
      });
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  return (
    <>
      {/* <Navigation></Navigation> */}
      <div className="admin-home-container">
        <AdminSidebar></AdminSidebar>

        <div className="admin-content">
          <table>
            <caption>
              Category
              <span
                className="add-product-button"
                onClick={displayAddNewCategoryFrom}
              >
                Add New category <GrAdd></GrAdd>
              </span>
            </caption>
            <thead>
              <tr></tr>
              <tr>
                <th scope="col">Category</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isAddNewCategoryFormActive ? (
                <tr>
                  <td>
                    {" "}
                    <input
                      type="text"
                      required
                      value={newCategory.name}
                      onChange={(e) =>
                        setnewCategory({ ...newCategory, name: e.target.value })
                      }
                    />{" "}
                  </td>
                  <td>
                    {isEdit ? (
                      <button className="admin-button" onClick={updateCategory}>
                        Update Category
                      </button>
                    ) : (
                      <button className="admin-button" onClick={addNewCategory}>
                        Add Category
                      </button>
                    )}
                    <button
                      className="admin-button"
                      onClick={cancleAddNewCategory}
                    >
                      Cancle
                    </button>
                  </td>
                </tr>
              ) : null}
              {allCategories
                ? allCategories.map((c) => {
                    return (
                      <tr key={Math.random()}>
                        <td data-label="category-name">
                          {isEditStateOn ? (
                            <input value={c.name}></input>
                          ) : (
                            c.name
                          )}
                        </td>
                        <td data-label="category-action">
                          {isEditStateOn ? (
                            <div>
                              {" "}
                              <button>Done</button> <button>Cancle</button>{" "}
                            </div>
                          ) : (
                            <div>
                              <CiEdit onClick={() => editCategory(c)}> </CiEdit>
                              <RiDeleteBin5Line
                                onClick={() => deleteCategory(c)}
                              ></RiDeleteBin5Line>{" "}
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })
                : "Loading"}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Category;
