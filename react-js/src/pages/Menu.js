import {useState} from 'react';
import Tabel from './Tabel';

function Menu() {
  const titel = "Daftar Menu Restoran"
    const [menus, setMenu] = useState (
      [    
        {
          idmenu: 1, 
          idkategori:1, 
          menu:"Ayam Goreng", 
          gambar:"ayam.jpg", 
          harga:5000
        },
        {
          idmenu: 2, 
          idkategori:1, 
          menu:"Ayam Bakar", 
          gambar:"ayam.jpg", 
          harga:5000
        },
        {
          idmenu: 3, 
          idkategori:2, 
          menu:"Es Teh", 
          gambar:"esteh.jpg", 
          harga:5000
        }
      ]
    )
    return (
      <div className="App">
        <Tabel menu = {menus} titel={titel}/>
      </div>
    )
  }
  
  export default Menu;