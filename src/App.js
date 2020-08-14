import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Product from "./components/Product";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch("http://localhost:49341/v1/api/products/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await response.json();
    setProducts(data.data);
    console.log(data.data);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Produts App
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">A React Products/Orders - Consuming API</h1>
            <p className="lead">
              This is a simple example with ReactJS - APIs have been developed
              with .NET Core
            </p>
            <br />
            <hr /> <br />
            <div className="row text-center">
              {products.map((product) => (
                <Product
                  product_name={product.productName}
                  product_price={product.productPrice}
                  category={product.category.categoryName}
                  quantity_in_stock={product.quantityInStock}
                  created_by={product.user.userName}
                />
              ))}
            </div>
            <br />
            <hr />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
