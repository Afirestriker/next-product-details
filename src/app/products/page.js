'use client';

import { useState, useEffect } from "react";
import PaginationList from "../components/PaginationList";
import CardProduct from "../components/CardProduct";

const Products = () => {
    const [productData, setProductData] = useState([]);
    // const [totalProduct, setTotalProduct] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [productPerPage, setProductPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const fetchProducts = async () => {
        const response = await fetch(`https://dummyjson.com/products?limit=${productPerPage}&skip=${(currentPage * productPerPage) - productPerPage}`);
        const data = await response.json();

        data.products && setProductData(data.products);
        // data.total && setTotalProduct(parseInt(data.total))
        data.total && setTotalPages(Math.ceil(parseInt(data.total) / productPerPage));
    }

    useEffect(() => {
        fetchProducts();
    }, [currentPage]);

    if (!productData.length) {
        return (
            <div className="alert alert-info" role="alert">
                Fetching Products. Please Wait...
            </div>
        );
    }

    if (productData.length) {
        return (
            <>
                <h1>Product List</h1>
                <div>
                    <div className="d-flex flex-wrap justify-content-between">
                        {productData.map((product) => {
                            return <CardProduct key={product.id} {...product} />
                        })}
                    </div>
                </div>
                <PaginationList totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </>
        );
    }
};

export default Products;
