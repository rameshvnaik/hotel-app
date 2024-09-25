import React, { useRef } from 'react'
import './MenuBar.scss'


const MenuBar = () => {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    };

    const categories = [
        { name: "Biryani", icon: "🍛" },
        { name: "Pizza", icon: "🍕" },
        { name: "Burger", icon: "🍔" },
        { name: "North Indian", icon: "🍲" },
        { name: "Icecream", icon: "🍨" },
        { name: "Roll", icon: "🌯" },
        { name: "Chinese", icon: "🥢" },
        { name: "South Indian", icon: "🍛" },
        { name: "Cake", icon: "🍰" },
        { name: "Kebabs", icon: "🍢" },
        { name: "Pasta", icon: "🍝" },
        { name: "Noodles", icon: "🍜" },
        { name: "Pastry", icon: "🍩" },
        { name: "Dosa", icon: "🥞" },
        { name: "Shawarma", icon: "🥙" },
        { name: "Momos", icon: "🥟" },
        { name: "Paratha", icon: "🍪" },
        { name: "Salad", icon: "🥗" },
        { name: "Idly", icon: "🍚" },
        { name: "Pav Bhaji", icon: "🍞" },
    ];

    return (
        <div >
            <div className='menubar-header'>
                <div>        <h3>What you want to TRY?</h3>
                </div>
                <div className='button-section'>
                    <button className="button" onClick={scrollLeft}>
                        &lt;
                    </button>
                    <button className="button" onClick={scrollRight}>
                        &gt;
                    </button>
                </div>

            </div>
            <div expand="lg" className="category-bar-container">



                <div className="category-bar-wrapper">
                    <div className="category-bar" ref={scrollRef}>
                        {categories.map((category, index) => (
                            <div key={index} className="category-item">
                                <span className="category-icon">{category.icon}</span>
                                <span className="category-name">{category.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MenuBar