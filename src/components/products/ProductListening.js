import { useState, useEffect } from "react";
import axios from "axios";
import style from "./ProductListening.module.css";
import { useValue } from "../../Context";

function ProductListening() {
    const { searchQuery, setItemCount, itemCount, bookmarkCount, setBookmarkCount, activeFilters } = useValue();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let filteredData;

    filteredData = products.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));
    filteredData = products.filter(item => item.category.toLowerCase().includes(activeFilters));

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className={style.productSection} >
            {filteredData.map((product, index) => (
                <div className={style.productContainer} key={index} >
                    <div className={style.bookmark} >
                        <i className="fa-regular fa-bookmark" onClick={() => setBookmarkCount(bookmarkCount + 1)} ></i>
                    </div>
                    <div className={style.productView} >
                        <img src={product.image} />
                    </div>
                    <div className={style.productDetails} >
                        <p className={style.title} >{product.title}</p>
                        <p className={style.price} >
                            <span>&#x20b9; {(product.price).toFixed(0) * 80}</span>
                            <span>{((product.price) * 80).toFixed(0) * 2}</span>
                            <span>(50% off)</span>
                        </p>
                    </div>
                    <div className={style.shop} >
                        <i className="fa-solid fa-cart-plus" onClick={() => setItemCount(itemCount + 1)} ></i>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductListening;