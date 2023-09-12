// Product Images for Popper Element
import parchmentPaper from '../assets/Images/12inParchmentRoll_packagingHero_1.16.19.png'
import otherProducts from '../assets/Images/500x335_RK_BkngCps_DS1_ew.png'
import dessertBakeware from '../assets/Images/500X335_RK_DssrtBkwr_DS1_ew.png'
import standardWrap from '../assets/Images/584541_RW_Std_500x335_card.png'
import cutriteWaxPaper from '../assets/Images/CutriteWaxPaper.png'
import cookingBag from '../assets/Images/RK SCL_Hero Carton 500x335_2.png'

export const PopoverProductMenu = ({ }) => {
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

export const ProductItem = ({ src, productName, productDescription }) => {
    return (
        <div className='text-wrap text-center'>
            <img src={src} alt='Parchment Paper' />
            <h4 className='fw-bold' style={{ color: "#001489" }}>{productName}</h4>
            <p>{productDescription}</p>
        </div>
    )
}