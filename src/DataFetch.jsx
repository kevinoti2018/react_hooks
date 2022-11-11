import React,{useState,useEffect} from 'react'

const DataFetch = () => {
     const [x, setX] = useState(0)
     const [y, setY] = useState(0)

     const logMouse =  (e)=>{
        setX (e.clientX)
        setY(e.clientY)
     }
     useEffect(() => {
       window. addEventListener('mousemove',logMouse)
     
     }, [])
     
  return (
    <div>
      value of x- {x} value of y- {y}
    </div>
  )
}

export default DataFetch