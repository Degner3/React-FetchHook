import { useEffect, useState } from "react";


export const UseFetch = (url) => {

    const [data, setData] = useState(null)
   
    
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [url]);
    


      return [data]

}
