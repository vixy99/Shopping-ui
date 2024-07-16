import { useSelector, useDispatch } from 'react-redux';
import { Increment, Decrement,Delete } from './store/ShoppingChartReducer'

function App() {
  const dispatch = useDispatch();
  const { total, items } = useSelector((state)=>state.products);

  const Plus = (index) => {
    dispatch(Increment(index))
  }  
  const Minus = (index) => {
    dispatch(Decrement(index))
  }  
  const Remove = (index) => {
    dispatch(Delete(index))
  }  
  return (
    <>
      <div className="flex text-2xl font-bold py-7 bg-gray-300 bg-opacity-30 mb-6 w-full justify-center">
          Shopping Chart
      </div>
      <div className="flex flex-row">
        <div className="basis-8/12 shadow-gray-400 px-3 py-4 shadow-md ml-7 rounded-md mb-8">
          <div className='font-bold text-lg'>
            Cart ({items.length} item)
          </div>
            {items.map((product, index) => {
              const { name, image, type, color, size, qty, notes, price } = product;
              return(
              <div key={index}>
                <div className='flex flex-row'> 
                  <div className='basis-3/12 mt-1'>
                    <img className="rounded-xl" src={require(`./img/${image}`)} alt='product'/>
                  </div>
                  <div className='basis-9/12 ml-4'>
                    <div className='flex flex-row'>
                      <div className='flex-1'>
                        <div className='text-base font-bold'>{name}</div>
                        <div className='text-xs mt-2'>{type} : {color}</div>
                        <div className='text-xs mt-4'>COLOR : {color}</div>
                        <div className='text-base mt-2'>SIZE : {size}</div>
                      </div>
                      <div>
                          <div className='flex flex-row border-2 rounded-md h-9'>
                              <button className={`border-r-2 w-10 flex justify-center items-center ${qty === 0 ? 'hidden' : ''}`} onClick={()=>Minus(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                  <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                </svg>
                              </button>
                              <div className='w-10 flex justify-center items-center'>
                                {qty}
                              </div>
                              <button className='border-l-2 w-10 flex justify-center items-center' onClick={()=>Plus(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                  <path fillRule="evenodd" d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z" clipRule="evenodd" />
                                </svg>
                              </button>
                          </div>
                          <div className='text-center text-xs'>{notes && `(${notes})`}</div>
                      </div>
                    </div>
                    <div className='flex flex-row mt-4'>
                      <div className='flex-1'>
                        <div className='flex flex-row'>
                          <button className='flex flex-row items-center' onClick={()=>Remove(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4">
                              <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clipRule="evenodd" />
                            </svg>
                              Remove Item
                          </button>
                          <div className='flex flex-row ml-2 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4">
                              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                            </svg>
                            Move To Wishlist
                          </div>
                        </div>
                      </div>
                      <div>${price}</div>
                    </div>
                  </div>
                </div>
                {index !== items.length-1 && (<div className='border-b-2 my-4'></div>)}
              </div>
            )})}
        </div>
        <div className="basis-4/12 flex-initial w-32 ml-5 mr-7">
            <div className="shadow-gray-400 shadow-md rounded-md px-3 py-4">
              <div className='font-bold text-base mb-2'>
                  The total amount of
              </div>
              <div className='flex-row flex text-sm mt-2'>
                <div className='flex-1'>Temporary amount</div>
                <div>${total}</div>
              </div>
              <div className='flex-row flex text-sm mt-2'>
                <div className='flex-1'>Shipping</div>
                <div>Gratis</div>
              </div>
              <div className='border-b-2 mt-2'></div>
              <div className='flex-row flex text-sm mt-2 font-bold'>
                <div className='flex-1'>The total amount of</div>
              </div>
              <div className='flex-row flex text-sm mt-2 font-bold'>
                <div className='flex-1'>(including VAT)</div>
                <div>${total}</div>
              </div>
              <div className='flex flex-row bg-blue-500 justify-center py-3 text-sm mt-5 rounded-md text-white'>
                GO TO CHECKOUT
              </div>
            </div>
            <div className="shadow-gray-400 shadow-md mt-2 rounded-md px-3 py-2">
              <input placeholder='Add a discount code (optional)' className='text-xs w-full h-10'/>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
