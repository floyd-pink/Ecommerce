import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "../Styles/SearchProduct.module.css";
import Footer from "../components/Footer";
import type { ProductType } from "../data/data";
import { productbycategories } from "../data/data";

const SearchProduct: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const query = searchParams.get("q");
  const category = searchParams.get("category") || "all";

  if (!query) {
    navigate("/");
    return null;
  }

  // Get products only from selected category
  let filteredResults: ProductType[] = [];

  if (category === "all") {
    filteredResults = Object.values(productbycategories).flat();
  } else {
    filteredResults = productbycategories[category] || [];
  }

  // Filter by search term
  filteredResults = filteredResults.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className={styles.main}>
        <header className={styles.request}>
          <p>
            Showing results for: <strong>{query}</strong>{" "}
            {category !== "all" && <span>in {category}</span>}
          </p>
        </header>
        <div className={styles.itemsGroup}>
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <div className={styles.item} key={item.id}>
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <h4>${item.price}</h4>
                <h4 className={styles.categoryLabel}>{item.brand}</h4>
              </div>
            ))
          ) : (
            <p>No products found for "{query}" in {category}</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchProduct;
