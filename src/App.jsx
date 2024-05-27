import React,{useState} from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'

function App() {

  let [cart,setCart] = useState(0)

  let data = [
    {
        title:"Fancy Product",
        price:"$40"
    },
    {
        title:"Special Item",
        price:"$50",
    },
    {
        title:"Sale Item",
        price:"$90",
    },
    {
        title:"Popular Item",
        price:"$35",
    },
    {
        title:"Sale Item",
        price:"$50",
    },
    {
        title:"Fancy Product",
        price:"$110",
    },
    {
        title:"Special Item",
        price:"$75",
    },
    {
        title:"Popular Item",
        price:"$30",
    }
]

  return <>
      <NavBar cart={cart}/>
      <Header/>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
                    data.map((e,i)=> {
                    return <Card cart={cart} setCart={setCart} data={e} key={i}/>
                    })
                    
                  }
                </div>
            </div>
        </section>
        <Footer/>
  </>
}

export default App