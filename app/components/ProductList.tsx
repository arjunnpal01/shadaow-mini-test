"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ textAlign: "center", margin: "2rem" }}>Loading products...</div>;

  return (
    <section style={{ padding: "2rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>Featured Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #eee", borderRadius: "8px", padding: "1rem", background: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <Image src={product.image} alt={product.title} width={220} height={180} style={{ objectFit: "contain", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>{product.title}</h3>
            <p style={{ fontWeight: "bold", color: "#222" }}>${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
