import './App.css';

import reynoldsLogo from './assets/Images/Reynolds-logos_white.png'

import Holidays from './assets/SVG/Holidays.svg'
import Products from './assets/SVG/Products.svg'
import Recipes from './assets/SVG/Recipes.svg'
import Story from './assets/SVG/Story.svg'
import Tips from './assets/SVG/Tips.svg'


import parchmentPaper from './assets/Images/12inParchmentRoll_packagingHero_1.16.19.png'
import otherProducts from './assets/Images/500x335_RK_BkngCps_DS1_ew.png'
import dessertBakeware from './assets/Images/500X335_RK_DssrtBkwr_DS1_ew.png'
import standardWrap from './assets/Images/584541_RW_Std_500x335_card.png'
import cutriteWaxPaper from './assets/Images/CutriteWaxPaper.png'
import cookingBag from './assets/Images/RK SCL_Hero Carton 500x335_2.png'

import { usePopper } from 'react-popper';

import { useState } from "react";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top custom-blue">
        <div className='container'>
          <a className="navbar-brand" href="#">
            <img src={reynoldsLogo} alt="Company Logo" className="navbar-logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span>
              <i className='bi bi-list'></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-fill text-white text-nowrap" >
              <MenuItem svg={Products} menuItemName="PRODUCTS" className="nav-link active" />
              {/* <VerticalLine /> */}
              <MenuItem svg={Recipes} menuItemName="RECIPES" />
              {/* <VerticalLine /> */}
              <MenuItem svg={Tips} menuItemName="TIPS & HOW-TOS" />
              {/* <VerticalLine /> */}
              <MenuItem svg={Holidays} menuItemName="HOLIDAYS & ENTERTAINING" />
              {/* <VerticalLine /> */}
              <MenuItem svg={Story} menuItemName="OUR STORY" />
            </ul>
            <SocialLinksAndSearch />
          </div>
        </div>
      </nav>
    </>
  );
}


const MenuItem = ({ svg, menuItemName }) => {

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom",
    // strategy: "absolute",
    modifiers: [
      { name: "offset", options: { offset: [0, 30] } },
      { name: "arrow", options: { element: arrowElement } }
    ]
  })

  const showTooltip = () => {
    popperElement.setAttribute("data-show", true)
  }

  const hideTooltip = () => {
    popperElement.removeAttribute("data-show", true)
  }

  return (
    <>
      <li
        ref={setReferenceElement}
        className="nav-item ps-4 pe-4"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        <a className="nav-link" href="#" >
          <img src={svg}
          />
          <h4 className='text-wrap fw-bold'>{menuItemName}</h4>
        </a>
      </li>
      <div
        ref={setPopperElement}
        className="custom-tooltip"
        style={styles.popper}
        {...attributes.popper}
      >
        {
          menuItemName === 'PRODUCTS' && <PopoverProductMenu menuName={menuItemName} />
          // "lokesh"
        }
        <span
          ref={setArrowElement}
          style={styles.arrow}
          {...attributes.arrow}
          className='arrow'
        />
      </div>
    </>
  )
}

const SocialLinksAndSearch = () => {
  return (
    <div className='text-white custom-serach-social-links'>
      <div className='custom-social-links mb-2 '>
        <div><i className="bi bi-facebook ps-2 pb-3 custom-blue-icon  "></i></div>
        <div><i className="bi bi-twitter p-1 custom-blue-icon "></ i></div>
        <div><i className="bi bi-instagram p-1 custom-blue-icon  "></i></div>
        <div><i className="bi bi-youtube p-1 custom-blue-icon "></ i></div>
        <div><i className="bi bi-pinterest pe-3 custom-blue-icon  "></i></div>
      </div>
      <div className='custom-circle-search'>
        <i className="bi bi-search "></i>
      </div>
    </div>
  )
}

const PopoverProductMenu = ({ menuName }) => {
  return (
    <div className="custom-grid">
      <ProductItem src={standardWrap} productName="ALUMINIUM FOIL" productDescription="Perfect for grilling, baking and more." />
      <ProductItem src={parchmentPaper} productName="PARCHMENT PAPER" productDescription="Oven-safe, non-stick performance for baking & roasting." />
      <ProductItem src={dessertBakeware} productName="DISPOSEABLE BAKEWARE" productDescription="Great for any meal, with no cleanup." />
      <ProductItem src={cookingBag} productName="COOKING BAGS & LINERS" productDescription="Fast & easy cleanup with no soaking or scrubbing" />
      <ProductItem src={cutriteWaxPaper} productName="WAX & FREEZER PAPER" productDescription="Protects surfaces & keeps food fresh longer." />
      <ProductItem src={otherProducts} productName="OTHER PRODUCTS" productDescription="Butcher Paper, Plastic Warp, and Baking Cups." />

    </div>
  )
}

const ProductItem = ({ src, productName, productDescription }) => {
  return (
    <div className='text-wrap text-center'>
      <img src={src} alt='Parchment Paper' />
      <h4 className='fw-bold' style={{ color: "#001489" }}>{productName}</h4>
      <p>{productDescription}</p>
    </div>
  )
}

const VerticalLine = () => {
  return (
    <div className="d-flex" style={{ height: "2em", justifyContent: "center", alignItems: "center" }}>
      <div className="vr"></div>
    </div>
  )
}

export default App;