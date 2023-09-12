// Main CSS File
import './App.css';

// Brand Logo
import reynoldsLogo from './assets/Images/Reynolds-logos_white.png'

// Navbar SVG Icons 
import Holidays from './assets/SVG/Holidays.svg'
import Products from './assets/SVG/Products.svg'
import Recipes from './assets/SVG/Recipes.svg'
import Story from './assets/SVG/Story.svg'
import Tips from './assets/SVG/Tips.svg'

import { MenuItem, SocialLinksAndSearch } from './Components/navBarComponents';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark sticky-top custom-blue p-0">
        <div className='container p-0'>
          <a className="navbar-brand" href="#">
            <img src={reynoldsLogo} alt="Company Logo" className="navbar-logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" style={{ textDecoration: "none" }}>
            <span>
              <i className='bi bi-x-square'></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-fill text-white text-wrap" >
              <MenuItem svg={Products} menuItemName="PRODUCTS" className="nav-link active" />
              <VerticalLine />
              <MenuItem svg={Recipes} menuItemName="RECIPES" />
              <VerticalLine />
              <MenuItem svg={Tips} menuItemName="TIPS & HOW-TOS" />
              <VerticalLine />
              <MenuItem svg={Holidays} menuItemName="HOLIDAYS & ENTERTAINING" />
              <VerticalLine />
              <MenuItem svg={Story} menuItemName="OUR STORY" />
            </ul>
            <SocialLinksAndSearch />
          </div>
        </div>
      </nav>
    </>
  );
}

const VerticalLine = () => {
  return (
    <div className="custom-vertical-line">
      <div className="vr"></div>
    </div>
  )
}

export default App;