import { createContext, useContext, useState } from "react";

const context = createContext();

function useValue() {
    const value = useContext(context);
    return value;
}

function Customcontext({children}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [itemCount, setItemCount] = useState(0);
    const [bookmarkCount, setBookmarkCount] = useState(0);
    const [activeFilters, setActiveFilters] = useState([]);

     // Function to handle search input change
     const handleInputChange = (event) => {
        setSearchQuery(event.target.value)
    }

    // Function to handle category filter
    const handleFilterClick = (filter) => {
        if (activeFilters.includes(filter)) {
            const filters = activeFilters.filter((el) => el!== filter)
            setActiveFilters(filters)
        }
        else {
            setActiveFilters([...activeFilters, filter])
        }
        console.log(activeFilters);
    }

    return (
        <context.Provider value={{handleInputChange,searchQuery, itemCount, setItemCount, bookmarkCount, setBookmarkCount, handleFilterClick, activeFilters}} >
            {children}
        </context.Provider>
    )
}

export {useValue};
export default Customcontext;