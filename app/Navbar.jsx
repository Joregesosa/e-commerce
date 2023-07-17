//Alvaro trabajando aquí
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
      <div className="logo"><img src="" alt="logo" /></div>
      <div className="navbar-item">
        <ul>
          <li>
            <Link href={"#"}>
              Productos
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              Novedades
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              Promociones
            </Link>
          </li>
        </ul>
      </div>
      <div className="search-section">
        <div className="lupa"><img src="" alt="lupa" /></div>
        <div className="user-logo"><img src="" alt="user" /></div>
        <div className="cart-logo"><img src="" alt="cart" /></div>
      </div>
    </nav>
  )
}
