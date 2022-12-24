import { CartWidget } from '../CartWidget/CartWidget'
import './Menu.css'
export const Menu = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://i.postimg.cc/YSXZPv2n/la-Cava-Logo.png" alt="hobbiton" border="0"/></a>
    <h1>La Cava.com</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse menucitos" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-light fw-bolder" aria-current="page" href="#">¿Quines Somos?</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fw-bolder" href="#">Vinos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light fw-bolder" href="#">Whiskies</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-light fw-bolder" href="#">Cervezas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-light fw-bolder" href="#">Destilados</a>
        </li>
      </ul>
    </div>
    <CartWidget />
  </div>
</nav>    </div>
  )
}
