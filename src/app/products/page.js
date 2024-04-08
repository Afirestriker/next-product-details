import CardProduct from "../components/CardProduct";

const Products = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data?.products;

    if (!products.length) {
        return (
            <>
                <div className="alert alert-danger" role="alert">
                    Products Not Found! Please try again later.
                </div>
            </>
        );
    }

    return (
        <>
            <section className="m-3">
                <div>
                    <h1 className="">Product List</h1>
                    <div className="d-flex flex-wrap justify-content-between">
                        {products.map((product) => {
                            return (
                                <CardProduct key={product.id} {...product} />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Products;
