import Listsiswa from './Listsiswa';

function Siswa() {
    const nama = ['Joni', 'Budi', 'Siti']
    return (
        <div className="App">
            <Listsiswa judul={nama} />
        </div>
    )
  }
  
  export default Siswa;