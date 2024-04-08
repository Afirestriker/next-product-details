import Image from "next/image";
import Link from "next/link";
import DiscountPrice from "@/app/components/DiscountPrice";

const CardProduct = (productInfo) => {
    const {id = '', title = '', description = '', discountPercentage = 0, price = 0, thumbnail = ''} = productInfo;
    const imageUrl = thumbnail.length ? thumbnail : '/noimage.svg';
    const content = description.length > 80 ? `${description.substring(0, 80)}...` : description;

    return (
        <>
            <div className="card mb-4" style={{width:'25rem', height:'28rem'}}>
                <Image
                    className="card-img-top"
                    src={imageUrl}
                    alt={title}
                    width={260}
                    height={200}
                    priority={true}
                />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{content}</p>
                    <div
                        style={{'bottom':'77px', 'position':'absolute'}}
                    >
                        <DiscountPrice discountPercentage={discountPercentage} price={price} />
                    </div>
                    <Link
                        href={`products/${id}`}
                        className="btn btn-primary"
                        style={{'bottom':'20px', 'position':'absolute'}}
                    >
                            Know More
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CardProduct;
