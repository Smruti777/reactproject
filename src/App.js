import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import { useState } from 'react';

function App() {

  const [product, setProduct] = useState([
    {
      url: 'https://images.woodenstreet.de/image/cache/data%2Ffabric-sofa%2Fberlin-velvet-sofa%2Findigo-blue%2Fupdated%2F1-1-1-750x650.jpg',
      name: 'Mate Blue Sofa',
      category: 'Sofa',
      seller: 'Gourav Ldt',
      price: 10000
    },
    {
      url: 'https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/product_2022100612471665060450_25611.jpg',
      name: 'King Size Bed',
      category: 'Bed',
      seller: 'Amit Ltd',
      price: 25999
    },
    {
      url: 'https://housing.com/news/wp-content/uploads/2022/11/living-room-furniture-design-compressed-1.jpg',
      name: 'Living Room Furniture',
      category: 'Furniture',
      seller: 'Jena Ltd',
      price: 11999
    },
    {
      url: 'https://i0.wp.com/ebhubaneswar.com/wp-content/uploads/2022/05/Untitled-design-45.jpg?resize=800%2C400&ssl=1',
      name: 'Classic Sofa Set',
      category: 'Sofa',
      seller: 'Lenka Ltd',
      price: 24999
    },
    {
      url: 'https://media.designcafe.com/wp-content/uploads/2021/12/27144355/design-cafe-modular-furniture-benefits.jpg',
      name: 'Design Wardrobe',
      category: 'Wardrobe',
      seller: 'BC private Ltd',
      price: 19999
    },
    {
      url: 'https://cb2.scene7.com/is/image/CB2/020323_super_furniture_2_M?wid=690&qlt=65',
      name: 'Modern Dinning',
      category: 'Dinning Table',
      seller: 'MC Ltd',
      price: 15999
    },
    {
      url: 'https://www.wearegurgaon.com/wp-content/uploads/2023/03/ifur-gurgaon.jpg',
      name: 'Living Room Sofa Set',
      category: 'Sofa',
      seller: 'Amit Ltd',
      price: 14999
    },
    {
      url: 'https://images.woodenstreet.de/image/cache/data%2Fbed-with-storage%2Fadolph-bed-with-side-storage%2Frevised%2Frevised%2Fhoney%2Fupdated%2Fhoney%2F1-810x702.jpg',
      name: 'Honey Bed',
      category: 'Bed',
      seller: 'Anu ptv. Ltd',
      price: 18999
    },
    {
      url: 'https://m.media-amazon.com/images/I/51d8lZ1CgQL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
      name: 'King Swing',
      category: 'Swing',
      seller: 'Jena Saheb pvt Ltd',
      price: 9999
    },
    {
      url: 'https://ii2.pepperfry.com/media/catalog/product/r/o/800x880/rope-hanging-wooden-swing-in-brown-colour-by-ad-planet-rope-hanging-wooden-swing-in-brown-colour-by--jrsolv.jpg',
      name: 'Comfort Swing',
      category: 'Swing',
      seller: 'Adhyasis Ltd',
      price: 11999
    },
    {
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/2008-04-13_Expandable_table_expanding.jpg',
      name: 'Japanese Dinning',
      category: 'Dinning',
      seller: 'King Jong Ltd',
      price: 8999
    },
    {
      url: 'https://media.designcafe.com/wp-content/uploads/2021/11/22175621/folding-furniture-design-ideas-for-home.jpg',
      name: 'Folding Furniture',
      category: 'Furniture',
      seller: 'Asu Ltd',
      price: 19999
    },
    {
      url: 'https://media.designcafe.com/wp-content/uploads/2021/11/22171109/sleep-chill-repeat-with-this-folding-bed-furniture-cum-sofa.jpg',
      name: 'Future Bedroom Set',
      category: 'Bed',
      seller: 'Suman pvt Ltd',
      price: 16099
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTFDrgLvXO_yHOR9ChmaqR9HSVy-cTuW_iEC1iAsZ2zLYlBJpI1u-Nf8Oca4pCpca_LDs&usqp=CAU',
      name: 'Multi-Purpose Furniture',
      category: 'Furniture',
      seller: 'Sriya pvt Ltd',
      price: 12999
    },
    {
      url: 'https://ik.imagekit.io/durian1985/Durian/durian/product/800x800/product_2022100615091665068946_856.jpg',
      name: 'Recliner Chair',
      category: 'Chair',
      seller: 'Pinku pvt Ltd',
      price: 4999
    },
    {
      url: 'https://4.imimg.com/data4/LW/GS/MY-6804265/recliner-couch.jpg',
      name: 'Family Recliner Sofa',
      category: 'Sofa',
      seller: 'ECE pvt Ltd',
      price: 10999
    },
    {
      url: 'https://images.woodenstreet.de/image/data/study-tables-mdf/anvita-engineered-wood-study-table-with-drawers-and-open-shelvesac/flowery-wenge-frosty-white-finish/1.jpg',
      name: 'Engineering Study Table',
      category: 'Study Table',
      seller: 'Avinash Ltd',
      price: 11990
    },
    {
      url: 'https://images.woodenstreet.de/image/cache/data%2Fchina-furniture%2Fcarolina-lounge-chair-brown%2Fbrown%2FCream%2F1-810x702.jpg',
      name: 'Lounge Extra-Comfort Chair',
      category: 'Chair',
      seller: 'Anushka Ltd',
      price: 5000
    },
    {
      url: 'https://www.royaloakindia.com/_next/image?url=https%3A%2F%2Fmedia.royaloakindia.com%2Fmedia%2Fcatalog%2Fproduct%2Fr%2Fo%2Froyaloak-venice-italian-marble-6-seater-dining-table-set-1.jpg&w=1920&q=50',
      name: 'Royal Dinning Table Set',
      category: 'Dinning Table',
      seller: 'Royal LTD',
      price: 14000
    },
    {
      url: 'https://image.made-in-china.com/202f0j00cKhiHSBRyNky/113-New-Design-Luxury-Walk-in-Closet-Wardrobe-Design-Modular-Furniture-Laminate-Solid-Wood-Panel-Bedroom-Modern-Wardrobe.jpg',
      name: 'Luxuary Wardrobe',
      category: 'Wardrobe',
      seller: 'Mohanty Ltd',
      price: 12000
    },
    {
      url: 'https://wallmantra.com/cdn/shop/products/2919_jpg_800x.webp?v=1687640618',
      name: 'Wooden Mandir',
      category: 'Mandir',
      seller: 'Sharma Ltd',
      price: 10000
    },
  ])

  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const removeFromCart = (data) => {
    cart.pop(data)
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          <CartList cart={cart} ></CartList> :
          <ProductList product={product} addToCart={addToCart} ></ProductList>
      }
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

      <Footer count={cart.length}
        handleShow={handleShow} ></Footer>
    </div>
    
  );
}

export default App;