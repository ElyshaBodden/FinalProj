import {Link, NavLink} from 'react-router-dom'

const Footer = () => {
    return (
      <footer className='footer'>
        <div className='container'>
  
          <nav className='d-flex justify-content-center'>
              <NavLink to='home' 
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >Home</NavLink>
              <NavLink to='about'
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >About</NavLink>
              <NavLink to='breeds'
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >Breeds</NavLink>
              <NavLink to='posts'
                className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}
              >Posts</NavLink>
          </nav>
          <div className="copyrights">
            &copy; 2023 <Link to="/"> dogs, Dogs, DOGS</Link> - All Rights Def Not Reserved But What Do I Know.
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer