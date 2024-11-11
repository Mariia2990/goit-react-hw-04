import css from './SearchBar.module.css'
import { useState } from 'react';
import { IoIosSearch } from "react-icons/io";

export default function SearchBar({onSubmit}) {
    const [searchQuery, setSearchQuery ]= useState('');

    const handleChangeInput = event => {
        setSearchQuery(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(searchQuery);
        setSearchQuery('');
    };

    return (
        <header className={css.header}>
            <form className={css.form} onSubmit={handleSubmit}>
                <IoIosSearch className={css.iconSearch} />
                <input className={css.searchInput}
                    type="text"
                    onChange= {handleChangeInput}
                    autoComplete="off"
                    autoFocus
                    value={searchQuery}
                    placeholder="Search images and photos" 
                />
                <button className={css.buttonSearch} type="submit">Search</button>
            </form>
        </header>

    )
}