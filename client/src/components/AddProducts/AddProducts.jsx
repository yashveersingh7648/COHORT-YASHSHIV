"use client";

import React, { useState } from "react";
import styles from "./AddProducts.module.css";

const AddProducts = ({ onFormChange }) => {
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    category: "",
    photos: [],
    quality: "",
    price: "",
    banner: "",
  });

  const [allProducts, setAllProducts] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProduct((prev) => ({ ...prev, banner: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePhotosChange = async (e) => {
    const files = Array.from(e.target.files);
    const base64s = await Promise.all(
      files.map(
        (file) =>
          new Promise((res) => {
            const reader = new FileReader();
            reader.onload = () => res(reader.result);
            reader.readAsDataURL(file);
          })
      )
    );
    setProduct((prev) => ({ ...prev, photos: [...prev.photos, ...base64s] }));
  };

  const validate = () => {
    const newErrors = {};
    if (!product.name.trim()) newErrors.name = "Product name is required.";
    if (!product.category) newErrors.category = "Category is required.";
    if (product.photos.length < 5) newErrors.photos = "Upload at least 5 images.";
    if (!product.quality.trim()) newErrors.quality = "Quality is required.";
    if (!product.price.trim()) newErrors.price = "Price is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newProduct = { ...product, id: Date.now() };
    const updated = [...allProducts, newProduct];
    setAllProducts(updated);
    onFormChange(updated); // update parent

    setProduct({
      id: 0,
      name: "",
      category: "",
      photos: [],
      quality: "",
      price: "",
      banner: "",
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Product</h2>

      <div className={styles.formGroup}>
        <label>Upload Banner</label>
        <input type="file" onChange={handleBannerChange} />
      </div>

      {product.banner && (
        <img src={product.banner} alt="Banner" className={styles.previewImage} />
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Product Name</label>
          <input name="name" value={product.name} onChange={handleChange} className={styles.input} />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Category</label>
          <select name="category" value={product.category} onChange={handleChange} className={styles.input}>
            <option value="">Select</option>
            <option value="clothing">Clothing</option>
            <option value="electronics">Electronics</option>
          </select>
          {errors.category && <p className={styles.error}>{errors.category}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Upload Photos (Min 5)</label>
          <input type="file" multiple onChange={handlePhotosChange} />
          {errors.photos && <p className={styles.error}>{errors.photos}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Quality</label>
          <input name="quality" value={product.quality} onChange={handleChange} className={styles.input} />
          {errors.quality && <p className={styles.error}>{errors.quality}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Price</label>
          <input name="price" value={product.price} onChange={handleChange} className={styles.input} />
          {errors.price && <p className={styles.error}>{errors.price}</p>}
        </div>

        <button type="submit" className={styles.submitButton}>Add Product</button>
      </form>

      <h3 className={styles.title}>Uploaded Products</h3>
      <div className={styles.productsGrid}>
        {allProducts.map((p) => (
          <div key={p.id} className={styles.productCard}>
            {p.banner && <img src={p.banner} className={styles.previewImage} alt="Banner" />}
            <h3>{p.name}</h3>
            <p><strong>Category:</strong> {p.category}</p>
            <p><strong>Quality:</strong> {p.quality}</p>
            <p><strong>Price:</strong> ₹{p.price}</p>
            <div className={styles.imageSlider}>
              {p.photos.map((photo, i) => (
                <img key={i} src={photo} className={styles.sliderImage} alt={`Photo ${i}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddProducts;
