import './App.css';

import reynoldsLogo from './assets/Images/Reynolds-logos_white.png'

import Holidays from './assets/SVG/Holidays.svg'
import Products from './assets/SVG/Products.svg'
import Recipes from './assets/SVG/Recipes.svg'
import Story from './assets/SVG/Story.svg'
import Tips from './assets/SVG/Tips.svg'


import parchmentPaper from './assets/Images/12inParchmentRoll_packagingHero_1.16.19.png'
import bakingCups from './assets/Images/500x335_RK_BkngCps_DS1_ew.png'
import dessertBakeware from './assets/Images/500X335_RK_DssrtBkwr_DS1_ew.png'
import standardWrap from './assets/Images/584541_RW_Std_500x335_card.png'
import cutriteWaxPaper from './assets/Images/CutriteWaxPaper.png'
import heroCarton from './assets/Images/RK SCL_Hero Carton 500x335_2.png'

import { usePopper } from 'react-popper';

import {
  StyledAppContainer,
  LongEl,
  Tooltip,
  Button
} from "./App.styled";
import { useState } from "react";



function App() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark custom-blue">
        <div className='container-fluid'>
          <a className="navbar-brand" href="#">
            <img src={reynoldsLogo} alt="Company Logo" className="navbar-logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-fill w-100 text-white text-nowrap" >
              <MenuItem svg={Products} menuItemName="PRODUCTS" className="nav-link active"/>
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
 

const MenuItem = ({ svg, menuItemName }) => {

  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom",
    modifiers: [
      { name: "offset", options: { offset: [0, 15] } },
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
        className="nav-item ps-4 pe-4 "
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        <a className="nav-link" href="#" >
          <img src={svg} style={{}} />
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
      <div className='custom-social-links mb-2 bg-white'>
        <div><i className="bi bi-facebook ps-2 pb-3 custom-blue-icon  "></i></div>
        <div><i className="bi bi-twitter p-1 custom-blue-icon "></ i></div>
        <div><i className="bi bi-instagram p-1 custom-blue-icon  "></i></div>
        <div><i className="bi bi-youtube p-1 custom-blue-icon "></ i></div>
        <div><i className="bi bi-pinterest pe-3 custom-blue-icon  "></i></div>
      </div>
      <div className='custom-circle-search'>
        <i className="bi bi-search"></i>
      </div>
    </div>
  )
}

const PopoverProductMenu = ({ menuName }) => {
  return (
    <div className="custom-product-item-grid">
      {/* <div> */}
      <img src={parchmentPaper} alt='Parchment Paper' />
      {/* </div> */}
      {/* <div> */}
      <img src={bakingCups} alt='Parchment Paper' />
      {/* </div> */}
      {/* <div> */}
      <img src={dessertBakeware} alt='Parchment Paper' />
      {/* </div> */}
      {/* <div> */}
      <img src={standardWrap} alt='Parchment Paper' />
      {/* </div> */}
      {/* <div> */}
      <img src={cutriteWaxPaper} alt='Parchment Paper' />
      {/* </div> */}
      {/* <div> */}
      <img src={heroCarton} alt='Parchment Paper' />
      {/* </div> */}
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

const Example = () => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const [placement, setPlacememt] = useState("bottom")
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      { name: 'offset', options: { offset: [0, 10] } }
    ],
    // strategy: 'fixed'
  });

  const showTooltip = () => {
    popperElement.setAttribute('data-show', true);
  }

  const hideTooltip = () => {
    popperElement.removeAttribute('data-show')
  }

  return (
    <StyledAppContainer>
      <div>
        {/* <LongEl /> */}
        <Button
          ref={setReferenceElement}
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
        >I'm a mystery</Button>
        <Tooltip
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          <p>A tooltip with</p>
          <span
            ref={setArrowElement}
            style={styles.arrrow}
            {...attributes.arrow}
            className="arrow"
          >

          </span>
        </Tooltip>
        {/* <LongEl /> */}
      </div>
    </StyledAppContainer>
  );
};


// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: #BF4F74;
// `;


export default App;