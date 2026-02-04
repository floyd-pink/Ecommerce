import React, { useState, ChangeEvent } from 'react';
import { Search } from 'lucide-react';
import styles from '../Styles/SearchBar.module.css';
import { productbycategories,} from '../data/data';
import type { ProductType } from "../data/data";
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
  const navigate=useNavigate();
  const [search, setSearch] = useState<string>("");
  const [category,setCategory]=useState<string>('all');
  
  const categories=Object.keys(productbycategories);
const handelSearch = () => {
   if(search.trim()!=="")
   {
    navigate(`/search?q=${encodeURIComponent(search)}&category=${category}`);
   }
  console.log(`Searching ${search} in ${category}`);

 
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