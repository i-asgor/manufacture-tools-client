import { useEffect, useState } from "react"

const CustomItem = () =>{
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://damp-taiga-65640.herokuapp.com/manufacture`)
        .then(res => res.json())
        .then(data => setItems(data))
    },[]);
    return [items, setItems]
}

export default CustomItem;