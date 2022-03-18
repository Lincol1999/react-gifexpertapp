import React, { useState } from 'react'
import GifExpertApp from '../GifExpertApp';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }: any) => {


    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e: any) => {
        setInputValue(e.target.value)

    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {

            setCategories((cats: any) => [inputValue, ...cats]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propType = {
    setCategories: PropTypes.func.isRequired
}
