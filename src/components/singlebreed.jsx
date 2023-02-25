import { Link, useNavigate , useParams, useLocation } from 'react-router-dom'
import BREEDS from './data.js'

const SingleBreed = () => {
       
  const navigate = useNavigate();
  const { breedId } = useParams();
  const { pathname } = useLocation();

  // get breed
  const singleBreed = BREEDS.find(breed => breed.id == parseInt(breedId))
  

  const { id, name, image, details } = singleBreed


  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>{name}</h1>
              {/* <p>{pathname}</p> */}
            </div>
            <div className="col-lg-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item"><Link to="./home.jsx">Home</Link></li>
                  <li className="breadcrumb-item"><Link to="./breeds.jsx">Dog Breeds</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">{name}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-5">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h2>{name}</h2>
            <p>{details} {details} {details} {details} {details} </p>

            <br />
            <button className="btn btn-outline-primary btn-sm" onClick={() => navigate(-1)}>BACK</button> &nbsp; 
            <button className="btn btn-outline-primary btn-sm" onClick={() => navigate('/products')}>NAVIGATE TO BREEDS</button> &nbsp;
            <Link to="./breeds.jsx" className="btn btn-primary btn-sm">BREEDS</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SingleBreed