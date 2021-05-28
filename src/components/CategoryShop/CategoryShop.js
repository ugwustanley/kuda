import React from 'react'
import './CategoryShop.scss'

const CategoryShop = () => {
    return (
        <select defaultValue="category">
        <option disabled value="category">Category</option>
        <option value="Hotels & Lodges">Hotels & Lodges</option>
        <option value="Automobiles">Automobiles</option>
        <option value="Real estate">Real estate</option>
        <option value="Mobile Phones & Tablets">Mobile Phones & Tablets</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture & Home appliances">Furniture & Home appliances</option>
        <option value="Health & Beauty">Health & Beauty</option>
        <option value="Fashion">Fashion</option>
        <option value="Arts, Books & Digital content">Arts, Books & Digital content</option>
        <option value="Transport & Logistics">Transport & Logistics</option>
        <option value="Services">Services</option>
        <option value="Shows & Entertainment">Shows & Entertainment</option>
        <option value="Babies & Kids">Babies & Kids</option>
        <option value="Animals & Pets">Animals & Pets</option>
        <option value="Agriculture & Food">Agriculture & Food</option>
     </select>
    )
}

export default CategoryShop
