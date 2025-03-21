import data from "./File/population_data.json";
import { useState, useEffect } from 'react';
import './App.css'
import MyHeader from './Components/MyHeader';
import SearchBox from './Components/SearchBox';
import Sidebar from "./Components/Sidebar";
import ChartComponent from "./Components/ChartComponent";
import { filtro } from "./Components/FunzioniFiltri"
import ErrorBoundary from "./Components/ErrorBoundary";

function App() {

  const [search, setSearch] = useState<string>("");
  const [datiPerGrafico, setDatiPerGrafico] = useState<string[][]>([]);
  const [popolazioneFiltered, setPopolazioneFiltered] = useState<string[]>([]);
  //const [tipoGrafico, setTipoGrafico] = useState<boolean>(false); //false grafico a barre, true grafico linea
  // const [soloNomi, setSoloNomi] = useState([]); // array completo con solo i nomi dei paesi


  const onlyNames: string[] = filtro(data);
  useEffect(() => {
    setPopolazioneFiltered(onlyNames);

  }, []);

  return (
    <div className="contenitorePrincipale">

      <div className="contenitoreSearchSide">
        <SearchBox
          search={search}
          setSearch={setSearch}
          onlyNames={onlyNames}
          popolazioneFiltered={popolazioneFiltered}
          setPopolazioneFiltered={setPopolazioneFiltered}>
        </SearchBox>

        <Sidebar

          popolazioneFiltered={popolazioneFiltered}
          data={data}
          setDatiPerGrafico={setDatiPerGrafico}>

        </Sidebar>
      </div>


      <div className="contenitoreGrafico">
        <MyHeader></MyHeader>

        <ErrorBoundary>
          
        <ChartComponent
          datiPerGrafico={datiPerGrafico}
        ></ChartComponent>

        </ErrorBoundary>


      </div>
    </div >
  )
}

export default App
