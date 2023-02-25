import { Link } from 'react-router-dom'
import BREEDS from './data.js'

const Breeds = () => {
    return (
        <main>
      
        <div className="pg-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h1>Dog Breeds</h1>
              </div>
              <div className="col-lg-5">
                <nav>
                  <ol className="breadcrumb justify-content-end">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Dog Breeds</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
  
        <div className="container content">
          <div className="row products-row">
            {BREEDS.map( (breed) => {
              return (
                <div className="col-lg-4" key={breed.id}>
                  
                  <div className="card">
                    <div className="img-wrap">
                      <img src={breed.image} alt="" />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{breed.name}</h5>
                      <p className="card-text">{breed.details}</p>
                    </div>
                  </div>
  
                </div>
              )
            } )}
          </div>
        </div>
  
      </main>
    )
  }
export default Breeds