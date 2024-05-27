import React,{useState} from 'react'

function Card({cart,setCart,data}) {
 
    let [toggle, setToggle] = useState(true)

  return <>
        <div className="col mb-5">
                        <div className="card h-100">
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">{data.title}</h5>
                                    
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                    
                                    <span className="text-muted">{data.price}</span>
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                              {
                               toggle?<button className="btn btn-outline-dark mt-auto" href="#" 
                               onClick={()=>{
                                setToggle(cv=>!cv)
                                setCart(cart+1)
                                }}>Add to cart</button>:
                                    <button className="btn btn-dark mt-auto" href="#"onClick={()=>{
                                        setToggle(cv=>!cv)
                                        setCart(cart-1)
                                        }}>Remove</button>
                                    
                                    }
                                    </div>
                                    
                            </div>
                        </div>
                    </div>
  </>
}

export default Card