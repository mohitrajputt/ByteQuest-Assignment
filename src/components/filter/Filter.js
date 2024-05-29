import { useValue } from "../../Context";
import style from "./Filter.module.css";

function Filter() {

    const {handleFilterClick} = useValue();
    const category = ["men's clothing", 'jewelery', 'electronics', "women's clothing"];

    return(
        <div className={style.filterSection} >
            <ul>
                {category.map((item,i) => (
                    <li key={i} onClick={()=> handleFilterClick(item)} >{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Filter;