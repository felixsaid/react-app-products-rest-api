import React from "react";

const Product = ({
  product_name,
  category,
  quantity_in_stock,
  product_price,
  created_by,
}) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">{product_name}</h4>
          <p className="card-text">{category}</p>
          <p className="card-text">{quantity_in_stock}</p>
          <p className="card-text">Kes. {product_price}</p>
          <p className="card-text">{created_by}</p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
