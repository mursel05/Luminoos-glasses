import React from "react";
import { useState } from "react";
import supabase from "../supabase";

const ProductsSingle = ({ product }) => {
  const [image, setImage] = useState(product ? product.image : "");
  const [imageError, setImageError] = useState("error none");
  const [name, setName] = useState(product ? product.name : "");
  const [nameError, setNameError] = useState("error none");
  const [price, setPrice] = useState(product ? product.price : "");
  const [priceError, setPriceError] = useState("error none");
  const [genderEn, setGenderEn] = useState(product ? product.genderEn : "");
  const [genderEnError, setGenderEnError] = useState("error none");
  const [colorEn, setColorEn] = useState(product ? product.colorEn : "");
  const [colorEnError, setColorEnError] = useState("error none");
  const [typeAz, setTypeAz] = useState(product ? product.typeAz : "");
  const [typeAzError, setTypeAzError] = useState("error none");
  const [colorAz, setColorAz] = useState(product ? product.colorAz : "");
  const [colorAzError, setColorAzError] = useState("error none");
  const [genderAz, setGenderAz] = useState(product ? product.genderAz : "");
  const [genderAzError, setGenderAzError] = useState("error none");
  const [brand, setBrand] = useState(product ? product.brand : "");
  const [brandError, setBrandError] = useState("error none");
  const [typeEn, setTypeEn] = useState(product ? product.typeEn : "");
  const [typeEnError, setTypeEnError] = useState("error none");
  const [hot, setHot] = useState(product ? product.hot : false);
  const [discount, setDiscount] = useState(product ? product.discount : false);
  const [bestSeller, setBestSeller] = useState(
    product ? product.bestSeller : false
  );
  async function update() {
    const { error } = await supabase
      .from("Products")
      .update({
        image,
        discount,
        bestSeller,
        hot,
        name,
        brand,
        typeEn,
        price,
        genderEn,
        colorEn,
        typeAz,
        colorAz,
        genderAz,
      })
      .eq("id", product.id);
    window.location.reload();
  }
  async function remove() {
    const { error } = await supabase
      .from("Products")
      .delete()
      .eq("id", product.id);
    window.location.reload();
  }
  async function create() {
    const { error } = await supabase.from("Products").insert({
      image,
      discount,
      bestSeller,
      hot,
      name,
      brand,
      typeEn,
      price,
      genderEn,
      colorEn,
      typeAz,
      colorAz,
      genderAz,
    });
    window.location.reload();
  }
  return (
    <div className="product-edit">
      <div className="product-row">
        <div className="error-input">
          <span>Id</span>
          <span className="id">{product && product.id}</span>
        </div>
        <div className="error-input">
          <label htmlFor="image">Image</label>
          <input
            id="image"
            className="image"
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          <span className={imageError}>Should not be empty!</span>
        </div>
        <div className="error-input">
          <label htmlFor="typeEn">TypeEn</label>
          <input
            id="typeEn"
            className="typeEn"
            type="text"
            onChange={(e) => setTypeEn(e.target.value)}
            value={typeEn}
          />
          <span className={typeEnError}>Should not be empty!</span>
        </div>
        <div className="error-input">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <span className={nameError}>Should not be empty!</span>
        </div>
        <div className="error-input">
          <label htmlFor="brand">Brand</label>
          <input
            id="brand"
            type="text"
            onChange={(e) => setBrand(e.target.value)}
            value={brand}
          />
          <span className={brandError}>Should not be empty!</span>
        </div>
        <div className="error-input">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          <span className={priceError}>Should not be empty!</span>
        </div>
        <div className="error-input">
          <label htmlFor="genderEn">GenderEn</label>
          <input
            id="genderEn"
            type="text"
            onChange={(e) => setGenderEn(e.target.value)}
            value={genderEn}
          />
          <span className={genderEnError}>Should not be empty!</span>
        </div>
        <div className="error-input">
          <label htmlFor="colorEn">ColorEn</label>
          <input
            id="colorEn"
            type="text"
            onChange={(e) => setColorEn(e.target.value)}
            value={colorEn}
          />
          <span className={colorEnError}>Should not be empty!</span>
        </div>
        <div className="error-input">
          <label htmlFor="typeAz">TypeAz</label>
          <input
            id="typeAz"
            type="text"
            onChange={(e) => setTypeAz(e.target.value)}
            value={typeAz}
          />
          <span className={typeAzError}>Should not be empty!</span>
        </div>
        <div className="error-input">
          <label htmlFor="colorAz">ColorAz</label>
          <input
            id="colorAz"
            type="text"
            onChange={(e) => setColorAz(e.target.value)}
            value={colorAz}
          />
          <span className={colorAzError}>Should not be empty!</span>
        </div>
        <div className="error-input">
          <label htmlFor="genderAz">GenderAz</label>
          <input
            id="genderAz"
            type="text"
            onChange={(e) => setGenderAz(e.target.value)}
            value={genderAz}
          />
          <span className={genderAzError}>Should not be empty!</span>
        </div>
        <div className="labels">
          <div className="error-input">
            <label htmlFor="hot">Hot</label>
            <input
              id="hot"
              type="checkBox"
              onChange={() => setHot(!hot)}
              checked={hot}
            />
          </div>
          <div className="error-input">
            <label htmlFor="discount">Discount</label>
            <input
              id="discount"
              type="checkBox"
              onChange={() => setDiscount(!discount)}
              checked={discount}
            />
          </div>
          <div className="error-input">
            <label htmlFor="bestSeller">BestSeller</label>
            <input
              id="bestSeller"
              type="checkBox"
              onChange={() => setBestSeller(!bestSeller)}
              checked={bestSeller}
            />
          </div>
        </div>
      </div>
      {product ? (
        <div className="edit">
          <button
            onClick={() => {
              if (
                image === product.image &&
                name === product.name &&
                typeEn === product.typeEn &&
                brand === product.brand &&
                discount === product.typeEn &&
                bestSeller === product.typeEn &&
                hot === product.typeEn &&
                price === product.typeEn &&
                genderEn === product.typeEn &&
                colorEn === product.typeEn &&
                typeAz === product.typeEn &&
                colorAz === product.typeEn &&
                genderAz === product.typeEn
              ) {
              } else if (
                image &&
                name &&
                typeEn &&
                brand &&
                price &&
                genderEn &&
                colorEn &&
                typeAz &&
                colorAz &&
                genderAz
              ) {
                update();
              } else {
                !image && setImageError("error");
                !typeEn && setTypeEnError("error");
                !name && setNameError("error");
                !brand && setBrandError("error");
                !price && setPriceError("error");
                !genderEn && setGenderEnError("error");
                !colorEn && setColorEnError("error");
                !typeAz && setTypeAzError("error");
                !colorAz && setColorAzError("error");
                !genderAz && setGenderAzError("error");
              }
            }}
          >
            Update
          </button>
          <button onClick={remove} className="delete">
            Delete
          </button>
        </div>
      ) : (
        <div className="edit">
          <button
            onClick={() => {
              if (
                image &&
                name &&
                typeEn &&
                brand &&
                price &&
                genderEn &&
                colorEn &&
                typeAz &&
                colorAz &&
                genderAz
              ) {
                create();
              } else {
                !image && setImageError("error");
                !typeEn && setTypeEnError("error");
                !name && setNameError("error");
                !brand && setBrandError("error");
                !price && setPriceError("error");
                !genderEn && setGenderEnError("error");
                !colorEn && setColorEnError("error");
                !typeAz && setTypeAzError("error");
                !colorAz && setColorAzError("error");
                !genderAz && setGenderAzError("error");
              }
            }}
          >
            Create
          </button>
        </div>
      )}
    </div>
  );
};
export default ProductsSingle;
