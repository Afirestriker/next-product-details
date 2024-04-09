'use client';

import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const ImageCarousel = (props) => {
    return (
        <Carousel
            useKeyboardArrows={true}
        >
            {props.images.map((image, indx) => {
                return (
                    <div key={indx}>
                        <Image src={image} alt={props.title} width={600} height={500} objectFit='contain' />
                    </div>
                );
            })}
        </Carousel>
    );
};

export default ImageCarousel;
