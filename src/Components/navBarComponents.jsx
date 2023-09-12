import { usePopper } from 'react-popper';
import { useState } from "react";

import { PopoverProductMenu } from './popperComponents';

export const MenuItem = ({ svg, menuItemName }) => {
    // Setting up the Popper Tooltip Element - using react-popper library
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom",
        strategy: "absolute",
        modifiers: [
            { name: "offset", options: { offset: [0, 30] } },
            { name: "arrow", options: { element: arrowElement } }
        ]
    })

    // Functions for showing popper element on hovering Menu Items
    const showTooltip = () => {
        popperElement.setAttribute("data-show", true)
    }

    const hideTooltip = () => {
        popperElement.removeAttribute("data-show", true)
    }

    return (
        <>
            {/* Reference Element */}
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
                    {
                        menuItemName === 'PRODUCTS' && <i class="bi bi-chevron-down chevron"></i>
                    }
                    {
                        menuItemName === "HOLIDAYS & ENTERTAINING" && <i class="bi bi-chevron-down chevron"></i>
                    }
                    {
                        menuItemName === "OUR STORY" && <i class="bi bi-chevron-down chevron"></i>
                    }
                </a>
            </li>
            {/* Popper Element */}
            <div
                ref={setPopperElement}
                className="custom-tooltip"
                style={styles.popper}
                {...attributes.popper}
            >
                {
                    menuItemName === 'PRODUCTS' && <PopoverProductMenu menuName={menuItemName} />
                }
                {
                    menuItemName === 'PRODUCTS' &&
                    <span
                        ref={setArrowElement}
                        style={styles.arrow}
                        {...attributes.arrow}
                        className='arrow'
                    />
                }
            </div>
        </>
    )
}


export const SocialLinksAndSearch = () => {
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


