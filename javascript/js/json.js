document.querySelector("#klik").addEventListener("click", tampil);

function tampil(params) {
    let url = "js/tblmenu.json";
    fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        let output = "<h1>DATA MENU</h1> <table><th>Menu</th><th>Harga</th><th>Menu</th>";
        data.forEach(element => {
            output += `<tr>
                <td>${element.menu}</td>
                <td>${element.harga}</td>
                <td>${element.rasa[0]}</td>
            </tr>`
        });
        output = "</table>";
        document.querySelector("#isi").innerHTML = "<h1>DATA MENU</h1>";
    })
}

// let tblmenu = [
// {
//     "idmenu": 1,
//     "idkategori": 1,
//     "menu": "Ayam Goreng",
//     "harga": 5000,
//     "warna": ["pedas", "manis"],
//     "stok": true,
//     "keterangan": null
// },
// {
//     "idmenu": 2,
//     "idkategori": 1,
//     "menu": "Ayam Bakar",
//     "harga": 5000,
//     "rasa": ["pedas", "manis"],
//     "stok": true,
//     "keterangan": null
// },
// {
//     "idmenu": 3,
//     "idkategori": 2,
//     "menu": "Es Teh",
//     "harga": 3000,
//     "rasa": ["tawar", "manis"],
//     "stok": true,
//     "keterangan": null
// }
// ];

// console.log(tblmenu[0].menu);