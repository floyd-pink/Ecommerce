import React, { useState,ChangeEvent } from 'react';
import { Search } from 'lucide-react';
import styles from '../Styles/SearchBar.module.css';
import { productbycategories,} from '../data/data';
import type { ProductType } from "../data/data";
import { useNavigate } from 'react-router-dom';

interface SearchBarProps {
  setResults :React.Dispatch<React.SetStateAction<ProductType[]>>;
}
const SearchBar:React.FC<SearchBarProps> = ({setResults}) => {
  const navigate=useNavigate();
  const [search, setSearch] = useState<string>("");
  const [category,setCategory]=useState<string>('all');
  
  const categories=Object.keys(productbycategories);
const handelSearch = () => {
  console.log(`Searching ${search} in ${category}`);
  let allProducts: ProductType[] = [];
  Object.values(productbycategories).forEach((products) => {
    allProducts = allProducts.concat(products);
  });

  let filteredProducts = allProducts;

  if (category !== 'all') {
    filteredProducts = filteredProducts.filter(
      (product) => product.category?.toLowerCase() === category.toLowerCase()
      
    );
  }

  if (search.trim() !== "") {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  setResults(filteredProducts);
  navigate('/');
};

  
  return (
    <>
    <div className={styles.searchContainer}>
      <select className={styles.searchSelect} value={category} onChange={(e)=>{setCategory(e.target.value)}}>
      <option value="all">All Department</option>
      {categories.map((cat)=>(
        <option key={cat} value={cat}>
          {cat.charAt(0).toUpperCase()+cat.slice(1)}
        </option>
      ))}
      </select>
      <input type="text" value={search} onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} placeholder='Search for products' className={styles.searchInput}/>
      <button className={styles.searchButton} onClick={handelSearch}>
       <Search size={20} color='black' />
      </button>
    </div>
           
    </>
  )
    
};

export default SearchBar;