import { useEffect, useState } from "react"

const CustomItem = () =>{
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/manufacture`)
        .then(res => res.json())
        .then(data => setItems(data))
    },[]);
    return [items, setItems]
}

export default CustomItem;