import { useEffect, useState } from 'react'
import Products from './Components/Products'

import './App.css'

function App() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
            .then(res=>res.json())
            .then(json=>json.products).then(dat=>setData(dat))
            setLoading(false);
  },[])
  console.log(data)

  if(loading)
  return(<><p>data is loaidng...</p></>);

  return (
    <div className="products">
     {data.map((da)=> (<Products title={da.title} image={da.thumbnail} brand={da.brand} />))}
    </div>
  )
}

export default App
