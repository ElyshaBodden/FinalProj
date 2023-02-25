
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>

                <nav className='nav nav-pills'>
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
                </div>
                
            </div>
        </header>
    )
}

export default Header