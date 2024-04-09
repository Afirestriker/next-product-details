'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import ImageCarousel from "@/app/components/ImageCarousel";
import StarRating from "@/app/components/StarRating";
import DiscountPrice from "@/app/components/DiscountPrice";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const ProductInfo = ({ params }) => {
    const [product, setProduct] = useState({});

    const fetchProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products/${params.id}`);
        const data = await response.json();

        setProduct(data);
    }

    useEffect(() => {
        fetchProduct();
    }, []);

    if (
        typeof product == "undefined" ||
        (typeof product == "object" && !Object.keys(product).length)
    ) {
        return (
            <div className="alert alert-success" role="alert">
                Fetching Product Details! Please wait...
            </div>
        );
    }

    return (
        <div>
            <div className="d-flex">
                <Link href="/products" className="h3 text-primary me-1" title="View all products"><IoIosArrowDropleftCircle /></Link>
                <h2>{product.brand}</h2>
            </div>

            <p className="display-6">{product.category[0].toUpperCase()}{product.category.substring(1)}</p>

            <div>
                {/* image carousel */}
                <ImageCarousel title={product.title} images={product.images} />

                <h2 className="m-0">{product.title}</h2>

                {/* rating */}
                <StarRating value={product.rating} />

                {/* discount price */}
                <DiscountPrice discountPercentage={product.discountPercentage} price={product.price} />

                {/* actual price */}
                <p>
                    M.R.P &nbsp;
                    <strong>
                        <sup>&#8377;</sup>
                        <del>{product.price}</del>
                    </strong>
                </p>

                {/* description */}
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductInfo;
