import React from 'react';

const menu = () => {
    return (
        <>
        <div className = "menuContainer">
        <div className = "column-left">
            <div className = "menuTitle">
                Lunch Menu
            </div>
            <h2 className = "categoryLeft">
                Salads
            </h2>
            <h3 className = "menuItem">
                <span>Chicken Caesar Salad</span>
                <span>12.95</span>
            </h3>
            <p>romaine | croutons | parmesan crisps</p>
            <h3 className = "menuItem">
                <span>Greek Salad</span>
                <span>12.95</span>
            </h3>
            <p>spring mix | feta | olives | cucumbers</p>
            
            <h2 className= "categoryRight">
                Sandwiches and Burgers
            </h2>
            <h3 className = "menuItem">
                <span>BBQ Sliders</span>
                <span>9.95</span>
            </h3>
            <p>house made pulled pork | spicy pickles | southern slaw</p>
            <h3 className = "menuItem">
                <span>Deluxe Burger</span>
                <span>12.95</span>
            </h3>
            <p>angus beef | cheddar | neuskes bacon</p>
            <h3 className = "menuItem">
            <span>Turkey Burger</span>
            <span>14.95</span>
            </h3>
            <p> springer mt farms turkey | cranberry aoili | heirloom tomatoes</p>
            <h3 className = "menuItem">
            <span>Fried Bologna Panini</span>
            <span>279.43</span>
            </h3>
            <p>oscar meyer farms | lays potato crisps | dukes aioli</p>

            <h2 className = "categoryLeft">
                Drinks
            </h2>
            <h3 className = "menuItem">
                <span>Horchata</span>
                <span>5.75</span>
            </h3>
        </div>


        <div className = "column-right">
            <div className = "menuTitle">
                Dinner Menu
            </div>
            <h2 className = "categoryLeft">
                Salads
            </h2>
            <h3 className = "menuItem">
                <span>Chicken Caesar Salad</span>
                <span>12.95</span>
            </h3>
            <p>romaine | croutons | parmesan crisps</p>
            <h3 className = "menuItem">
                <span>Greek Salad</span>
                <span>12.95</span>
            </h3>
            <p>spring mix | feta | olives | cucumbers</p>
            
            <h2 className= "categoryRight">
                Entrees
            </h2>
            <h3 className = "menuItem">
                <span>Pork Chops</span>
                <span>19.95</span>
            </h3>
            <p>hillshire farms | parmesan risotto | carmelized apples</p>
            <h3 className = "menuItem">
                <span>Deluxe Burger</span>
                <span>14.95</span>
            </h3>
            <p>angus beef | cheddar | neuskes bacon</p>
            <h3 className = "menuItem">
            <span>Grouper</span>
            <span>24.95</span>
            </h3>
            <p> panko crusted | cauliflower mash | heirloom tomatoes</p>
            <h3 className = "menuItem">
            <span>Tomahawk Ribeye</span>
            <span>279.43</span>
            </h3>
            <p>64 oz | roasted fingerlings | sunburst squash</p>

            <h2 className = "categoryLeft">
                Drinks
            </h2>
            <h3 className = "menuItem">
                <span>Horchata</span>
                <span>5.75</span>
            </h3>

        </div>
        </div>
        </>
    )
};

export default menu;