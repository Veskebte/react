import { useState } from 'react'
import Header from "./components/Header";
import Calon from "./components/Calon";

function App() {
  const [countSatu, setCountSatu] = useState(0)
  const [countDua, setCountDua] = useState(0)
  const [countTiga, setCountTiga] = useState(0)
  const [countTidakSah, setCountTidakSah] = useState(0)

  const pilihSatu = () => setCountSatu(countSatu + 1)
  const pilihDua = () => setCountDua(countDua + 1)
  const pilihTiga = () => setCountTiga(countTiga + 1)
  const pilihTidakSah = () => setCountTidakSah(countTidakSah + 1)

  const totalSuara = countSatu + countDua + countTiga + countTidakSah;
  const totalSah = countSatu + countDua + countTiga;
  
  const persentaseSah = totalSuara > 0 ? (totalSah / totalSuara * 100).toFixed(2) : 0;
  const persentaseTidakSah = totalSuara > 0 ? (countTidakSah / totalSuara * 100).toFixed(2) : 0;

  
  return (
    <>
      <Header />

      <div className="row">
        <Calon nama="Fitri Nandri" counter={countSatu} onClick={pilihSatu}/>
        <Calon nama="RD PS" counter={countDua} onClick={pilihDua}/>
        <Calon nama="Yudha Bahar" counter={countTiga} onClick={pilihTiga}/>
        <Calon nama="Suara Tidak Sah" counter={countTidakSah} onClick={pilihTidakSah}/>
      </div>

      <div className=" text-center">
        <h3>Total Suara : {totalSuara} suara</h3>
        <h3>Total Sah : {totalSah} suara | {persentaseSah}(%)</h3>
        <h3>Total tidak sah : {countTidakSah} suara | {persentaseTidakSah}% </h3>
      </div>
    </>
  );
}

export default App;
