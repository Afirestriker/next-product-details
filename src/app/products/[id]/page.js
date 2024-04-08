import Link from "next/link";
import ImageCarousel from "@/app/components/ImageCarousel";
import StarRating from "@/app/components/StarRating";
import DiscountPrice from "@/app/components/DiscountPrice";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const ProductInfo = async ({ params }) => {
    const productId = params.id;
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await response.json();

    if (
        typeof data == "undefined" ||
        (typeof data == "object" && !Object.keys(data).length)
    ) {
        return (
            <>
                <div className="alert alert-danger" role="alert">
                    Product Details Not Found! Please try again later.
                </div>
            </>
        );
    }

    return (
        <div className="m-3">
            <div className="d-flex">
                <Link href="/products" className="h3 text-primary" title="View all products"><IoIosArrowDropleftCircle /></Link>
                <h2>{data.brand}</h2>
            </div>
            <p className="display-6">{data.category[0].toUpperCase()}{data.category.substring(1)}</p>
            <div>
                <ImageCarousel title={data.title} images={data.images} />

                <div>
                    <h2>{data.title}</h2>

                    {/* rating */}
                    <StarRating value={data.rating} />

                    {/* discount price */}
                    <DiscountPrice discountPercentage={data.discountPercentage} price={data.price} />

                    {/* actual price */}
                    <p>
                        M.R.P &nbsp;
                        <strong>
                            <sup>&#8377;</sup>
                            <del>{data.price}</del>
                        </strong>
                    </p>

                    {/* description */}
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
