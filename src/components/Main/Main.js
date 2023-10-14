import React, { useState } from 'react'
import './Main.css'
import { categories, products } from '../../data';
import arrowImage from '../../images/arrow.png';
import addIconImage from "../../images/addIcon.png";
import minusIconImage from "../../images/minusIcon.png";

function Main({selectedItems, addButtonClicked}) {
    
    const [ viewAll, setViewAll ] = useState(false); 
    const toggleViewWrap = () => {
        setViewAll(!viewAll)
    }

    return (
        <div  className='main-container'>
            <div className='category-container'>
                {categories.map(category => (
                    <>
                        <h1 className='category-heading' id={category.name}>{category.name}
                            <img className='arrow' src={arrowImage} alt="arrow"></img></h1>
                           {!viewAll ? <button onClick={toggleViewWrap} className='mobile-select-button'>View all</button> : <button onClick={toggleViewWrap} className='mobile-select-button close-button'> X </button>}
                        <div className={`items-container ${viewAll ? 'wrap' : ''}`}>

                            {products.map((product,index) => (
                                <>
                                    <div key={index} className='item' id={`item${index}`}>
                                        <img src={product.imgUrl} alt={product.name} className='item-image' />
                                      
                                        <img src={selectedItems[index] ? minusIconImage : addIconImage} alt="add/minus" className='add-icon' onClick={() =>addButtonClicked(index)} /> 

                                        <h2 className='item-price'>${product.price}</h2>
                                        <h3 className='item-name'>{product.name}</h3>
                                        <p className='item-weight'>{product.weight} {product.unit}</p>
                                    </div>
                                </>

                            ))}
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Main