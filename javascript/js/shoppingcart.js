let tblmenu = [
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
];

let tampil = tblmenu.map(function (kolom) {
    return `
    <div class="product-content">
        <div class="images">
            <img src="images/${kolom.gambar}" alt="" />
        </div>
        <div class="title">
            <h2>${kolom.menu}</h2>
        </div>
        <div class="price">
            <h2>${kolom.harga}</h2>
        </div>
    </div>

    <div class="btn-beli">
        <button data-idmenu=${kolom.idmenu}>Beli</button>
    </div>
    `;
});

let isi = document.querySelector(".product");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = []

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli.onclick = function() {
        // console.log(btnbeli[index].dataset["idmenu"]);
        // cart.push(btnbeli[index].dataset["idmenu"]);

        tblmenu.filter(function(a) {
            if (a.idmenu == btnbeli[index].dataset["idmenu"]) {
                cart.push(a);
                console.log(cart);
            }
        });
    };
};

console.log(cart);

