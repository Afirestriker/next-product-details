
const calculateFinalPrice = (originalPrice, discountPercentage) => {
    if (
        originalPrice < 0 ||
        discountPercentage < 0 ||
        discountPercentage > 100
    ) {
        throw new Error(
            "Invalid input: Prices and discount percentage must be non-negative numbers, and discount percentage cannot exceed 100%."
        );
    }

    const discountAmount = originalPrice * (discountPercentage / 100);

    const finalPrice = originalPrice - discountAmount;

    return finalPrice.toFixed(2);
}

const DiscountPrice = ({discountPercentage, price}) => {
    return (
        <>
            <h5 className="my-3">
                <strong className="text-danger">
                    - {discountPercentage ?? 0} &#37;
                </strong>
                &nbsp;&nbsp;
                <strong>
                    <sup>&#8377;</sup>
                    {calculateFinalPrice(price, discountPercentage ?? 0)}
                </strong>
            </h5>
        </>
    );
};

export default DiscountPrice;
