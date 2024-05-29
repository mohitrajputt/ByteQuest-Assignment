import { useValue } from "../../Context";
import style from "./Nav.module.css";

function Nav() {

    const { searchQuery, handleInputChange, itemCount, bookmarkCount } = useValue();

    return (
        <nav>
            <div className={style.logoContainer} >
                <h2>TANN TRIM</h2>
            </div>
            <div className={style.menuContainer} >
                <ul>
                    <li className={style.search} >
                        <label htmlFor="search" ></label>
                        <input type="checkbox" id="search" />
                        <input type="search" placeholder="Search" value={searchQuery} onChange={handleInputChange} />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </li>
                    <li>
                        <i className="fa-regular fa-user"></i>
                    </li>
                    <li>
                        {bookmarkCount ? <span className={style.counter} >{bookmarkCount}</span> : undefined}
                        <i className="fa-solid fa-bookmark"></i>
                    </li>
                    <li>
                        {itemCount ? <span className={style.counter}  >{itemCount}</span> : undefined}
                        <i className="fa-solid fa-cart-shopping"></i>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;