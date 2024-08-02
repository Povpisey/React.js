
import React, {useState,useEffect} from 'react'

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async()=>{
            setLoading(true);
            const reponse = await fetch("https://fakestoreapi.com/products");
            if(componentMounted){
              setData(await reponse.clone().json());
              setFilter(await reponse.json());
              setLoading(false);
              console.log(filter)
            }
            return () => {
              componentMounted = false;
            }
        }

        getProducts();
    }, []);

    const Loading = ()=>{
      return (
        <>
            loading...
        </>
      )
    }

    const ShowProducts=()=>{
      return (
        <>
        <div className='buttons d-flex justify-content-center mb-3'>
        <button className='btn btn-outline-dark me-2'>All</button>
        <button className='btn btn-outline-dark me-2'>Men</button>
        <button className='btn btn-outline-dark me-2'>Women</button>
        <button className='btn btn-outline-dark me-2'>Kids</button>
      </div>
      {filter.map((Products)=> {
        return  (
          <>
             <div className='col-md-3 mb-4'>
             <div class="card h-100 text-center p-4" key={Products.id}>
                <img src={Products.image} class="card-img-top" alt={Products.title} height="250px"/>
                <div class="card-body">
                <h5 class="card-title mb-0">{Products.title.substring(0,12)}</h5>
                <p class="card-text fw-bold">${Products.price}</p>
                <a href="#" class="btn btn-outline-dark">Buy Now</a>
            </div>
</div>
             </div>
          </>
        )
      })
      }
        </>
      );
    }
  return (
    <div>
        <div className='container my-5 py-5'>
          <div className='row'></div>
          <div className='col-12 mb-5'>
            <h2 className='display-6 fw-bold text-center'>Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className='row justify-content-center'>
          {loading ? <Loading/>:<ShowProducts/>}
        </div>
    </div>
  );
}

export default Products;
