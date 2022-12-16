import { React, useState, useEffect } from "react";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import "../AdminHomeStyle.css";
import "./ProductsStyle.css";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrAdd } from "react-icons/gr";
const Products = () => {
  const [allProducts, setallProducts] = useState([]);
  const [allCategories, setallCategories] = useState([]);
  const [isEdit, setisEdit] = useState(false);
  const [newProduct, setnewProduct] = useState({
    name: "",
    price: 0,
    category: "",
    quantity: 0,
    description: "",
    imageUrl: "",
  });
  const [isAddProductFormActive, setisAddProductFormActive] = useState(false);

  const fetchAllProducts = async () => {
    const requestOptions = {
      crossDomain: true,
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ searchtext: "", category: "" }),
    };
    await fetch(
      "https://ecomcapstone20221214140957.azurewebsites.net/api/Product/GetProductData",
      requestOptions
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setallProducts(data.data);
      });
  };

  const deleteProduct = async (product) => {
    console.log(product);
    let confirm = window.confirm("Are you sure you want to delete?");

    if (confirm) {
      const requestOptions = {
        crossDomain: true,
        mode: "cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: product.id, name: product.name }),
      };
      await fetch(
        "https://ecomcapstone20221214140957.azurewebsites.net/api/Product/DeleteProduct",
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
    } else {
      return;
    }
  };

  const getAllCategories = async () => {
    console.log("Getting category");
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
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setallCategories(data.data);
        // setallProducts(data.data);
      });
  };

  const addProduct = async (e) => {
    console.log(newProduct);
    e.preventDefault();
    const requestOptions = {
      crossDomain: true,
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    };
    await fetch(
      "https://ecomcapstone20221214140957.azurewebsites.net/api/Product/AddProduct",
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

  const cancelAddProduct = async (e) => {
    setnewProduct({
      name: "",
      price: 0,
      category: "",
      quantity: 0,
      description: "",
      imageUrl: "",
    });

    setisAddProductFormActive(false);
  };

  const editProduct = (p) => {
    console.log("Editing");
    setnewProduct({
      id: p.id,
      name: p.name,
      price: p.price,
      category: p.category,
      quantity: p.quantity,
      description: p.description,
      imageUrl: p.imageUrl ? p.imageUrl : "",
    });
    setisAddProductFormActive(true);
    setisEdit(true);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    console.log(newProduct);
    const requestOptions = {
      crossDomain: true,
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    };
    await fetch(
      "https://ecomcapstone20221214140957.azurewebsites.net/api/Product/UpdateProduct",
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

  const displayAddProductForm = () => {
    setisAddProductFormActive(true);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <>
      {/* <Navigation></Navigation> */}
      <div className="admin-home-container">
        <AdminSidebar></AdminSidebar>

        <div className="admin-content">
          <table>
            <caption>
              Products
              <span
                className="add-product-button"
                onClick={displayAddProductForm}
              >
                {" "}
                Add New Product <GrAdd></GrAdd>{" "}
              </span>
            </caption>
            <thead>
              <tr></tr>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">description</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Quantity</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {isAddProductFormActive ? (
                <tr>
                  <td>
                    {" "}
                    <input
                      placeholder="Image Url"
                      value={newProduct.imageUrl}
                      onChange={(e) =>
                        setnewProduct({
                          ...newProduct,
                          imageUrl: e.target.value,
                        })
                      }
                    />{" "}
                  </td>
                  <td>
                    {" "}
                    <input
                      type="text"
                      required
                      value={newProduct.name}
                      onChange={(e) =>
                        setnewProduct({ ...newProduct, name: e.target.value })
                      }
                    />{" "}
                  </td>
                  <td>
                    <input
                      required
                      type="text"
                      value={newProduct.description}
                      onChange={(e) =>
                        setnewProduct({
                          ...newProduct,
                          description: e.target.value,
                        })
                      }
                    />
                  </td>

                  <td>
                    <input
                      required
                      type="number"
                      value={newProduct.price}
                      onChange={(e) =>
                        setnewProduct({ ...newProduct, price: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <select
                      name="cars"
                      id="cars"
                      onChange={(e) =>
                        setnewProduct({
                          ...newProduct,
                          category: e.target.value,
                        })
                      }
                    >
                      {allCategories.map((category) => {
                        return (
                          <option value={category.id} key={category.id}>
                            {category.name}
                          </option>
                        );
                      })}
                    </select>
                  </td>

                  <td>
                    <input
                      required
                      type="number"
                      value={newProduct.quantity}
                      onChange={(e) =>
                        setnewProduct({
                          ...newProduct,
                          quantity: e.target.value,
                        })
                      }
                    />
                  </td>

                  <td>
                    {/* <input
                      type="text"
                      placeholder="Image Url"
                      value={newProduct.imageUrl}
                      onChange={(e) =>
                        setnewProduct({
                          ...newProduct,
                          imageUrl: e.target.value,
                        })
                      }
                    /> */}
                    {isEdit ? (
                      <button
                        className="admin-button"
                        onClick={(e) => updateProduct(e)}
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        className="admin-button"
                        onClick={(e) => addProduct(e)}
                      >
                        Add
                      </button>
                    )}

                    <button
                      className="admin-button"
                      onClick={(e) => cancelAddProduct(e)}
                    >
                      Cancle
                    </button>
                  </td>
                </tr>
              ) : null}

              {allProducts
                ? allProducts.map((p) => {
                    return (
                      <tr key={Math.random()}>
                        <td data-label="id">{p.id}</td>
                        <td data-label="name">{p.name}</td>
                        <td data-label="description">{p.description}</td>
                        <td data-label="price">{p.price}</td>
                        <td data-label="category">{p.category}</td>
                        <td data-label="quantity">{p.quantity}</td>
                        <td data-label="action">
                          <CiEdit onClick={() => editProduct(p)}> </CiEdit>
                          <RiDeleteBin5Line
                            onClick={() => deleteProduct(p)}
                          ></RiDeleteBin5Line>
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

export default Products;
