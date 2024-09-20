import React, { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    onSearch(event.target.value);
  };

  const handleClear = () => {
    setInputValue('');
    onSearch(''); // Notify parent component to clear search
  };

  return (
    <div className='contain'>
      <div className='contain-content'>
        <div className="search-container">
          <SearchIcon className="search-icon" />
          <input
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={handleChange}
          />
          {inputValue && (
            <CloseIcon 
              className="close-icon" 
              onClick={handleClear} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
