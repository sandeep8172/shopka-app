import "./Sidebar.css"
const Sidebar = () => {
    return (
        <div className="sidebar_wrapper">
            <div className="top_list">
                <h2><i className="fa-solid fa-caret-down"></i>Departments</h2>
                <ul>
                    <li className="categoies"> <i className="fa-solid fa-chevron-right "></i>All Categories</li>
                    <li className="ecommerce">Ecommerce patterns</li>
                    <li><i className="fa-solid fa-chevron-down "></i> Electronics</li>
                    <li className="cellPhone"><i className="fa-solid fa-chevron-down "></i>Cell Phones & Smartphones</li>
                    <li className="dropdown_text">Cell Phone Accessories</li>
                    <li className="dropdown_text">Cell Phone Gatgets</li>
                    <li className="dropdown_text">Applications</li>
                    <li className="dropdown_text">Smart Watches</li>
                    <li className="show_more">Show More <i className="fa-solid fa-chevron-down "></i></li>
                    <li><i className="fa-solid fa-chevron-right"></i>Business & Industrial</li>
                    <li><i className="fa-solid fa-chevron-right"></i>Computers</li>
                    <li><i className="fa-solid fa-chevron-right"></i>Consumer Electronics</li>
                    <li><i className="fa-solid fa-chevron-right"></i>Home & Garden</li>
                    <li><i className="fa-solid fa-chevron-right"></i>Collectibles</li>
                    <li className="expand">Expand</li>
                </ul>
            </div>
            <p className="collap">Collapsed filter <i className="fa-solid fa-chevron-down "></i></p>
            <div className="middle_list">
                <p className="expend">Expanded filters <i className="fa-solid fa-chevron-up"></i></p>
                <p className="dropdown_text_middle"><input type={"checkbox"} /> Recommended</p>
                <p className="dropdown_text_middle"><input type={"checkbox"} /> Recently Added</p>
                <p className="dropdown_text_middle"><input type={"checkbox"} /> Expiring Soon</p>
                <p className="dropdown_text_middle"><input type={"checkbox"} /> Most Rated</p>
                <p className="dropdown_text_middle"><input type={"checkbox"} /> price: Low <i className="fa-solid fa-arrow-right-long"></i> High</p>
                <p className="dropdown_text_middle"><input type={"checkbox"} /> price: High <i className="fa-solid fa-arrow-right-long"></i> Low</p>
            </div>
            <div className="bottom_list">
                <p className="year">Year Of Manufacturing<i className="fa-solid fa-chevron-up"></i></p>
                <p className="dropdown_text_bottom"><input type={"checkbox"} /> 1954</p>
                <p className="dropdown_text_bottom"><input type={"checkbox"} /> 1955</p>
                <p className="dropdown_text_bottom"><input type={"checkbox"} /> 1956</p>
                <p className="dropdown_text_bottom"><input type={"checkbox"} /> 1957</p>
                <p className="dropdown_text_bottom"><input type={"checkbox"} /> 1958</p>
                <p className="dropdown_text_bottom"><input type={"checkbox"} /> 1959 </p>
                <p className="dropdown_text_bottom"><input type={"checkbox"} /> 1960 </p>
                <p className="dropdown_text_bottom"><input type={"checkbox"} /> 1961 </p>
                <p className="dropdown_text_bottom"><input type={"checkbox"} /> 1962-2020 </p>
            </div>
        </div>
    )
}

export default Sidebar;