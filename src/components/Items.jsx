import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import { STATUSES, fetchItems } from '../store/productSlice'


const Items = () => {

    const dispatch = useDispatch()
    const {data:items, status} = useSelector(state => state.product)

    // const [items,setItems] = useState([])

  useEffect(()=>{
    dispatch(fetchItems())

    // const fetchProducts = async () => {
    //       const res = await fetch('https://dummyjson.com/products');
    //       const {products} = await res.json();
    //       console.log(products);
    //       setItems(products);
    //   };
    //   fetchProducts()
  },[])
    
    const handleAdd = (item) => {
        dispatch(add(item))
    }

    if(status === STATUSES.LOADING){
        return <h1 className='text-3xl w-fit mx-auto mt-3'>Loading..!</h1>
    }

    if(status === STATUSES.ERROR){
        return <div className='flex flex-col'>
            <h1 className='text-3xl font-semibold mt-3 w-fit mx-auto text-red-500'>Something went wrong..!</h1>
            <img className='h-[100px] w-[100px]  mx-auto' src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHpxZWtnY2NkbTUxcGRoY24yaWp2ZTd6cnN0OXRvdzIyb28yejByZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/S1pFYJvJdO6DdlNsQ3/giphy.gif" alt="" />
        </div> 
    }

  return (
    <div className="grid grid-cols-5 p-5 ">
            {items.map((item) => (
                <div className="rounded-md w-[250px] border mt-2" key={item.id}>
                    <div className='w-[150px] h-[150px] p-4 m-auto'>
                    <img className='w-full h-full object-fill' src={item.images[0]} alt="" />
                    </div>
                    <div className='mx-2'>
                    <h4 className='truncate font-medium text-xl'>{item.title}</h4>
                    <div className='flex justify-between items-center'>
                    <h5 className='text-lg'>$ {item.price}</h5>
                    <button className='rounded-md px-2 py-1 my-2 bg-blue-600 text-white active:bg-blue-700' onClick={() => handleAdd(item)} >
                        Add to cart
                    </button>
                    </div>
                    </div>
                </div>
            ))}
        </div>
  )
}

export default Items