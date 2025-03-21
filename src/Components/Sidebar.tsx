import "../App.css"
import { ottieniDati } from "./FunzioniFiltri";
import { oggetto } from "../Tipi";


type sidebarProps = {
    popolazioneFiltered: string[];
    data: oggetto[];
    setDatiPerGrafico: React.Dispatch<React.SetStateAction<string[][]>>
}

function Sidebar({ popolazioneFiltered, data, setDatiPerGrafico }: sidebarProps) {
    // console.log("popolazione Filtered")
    // console.log(popolazioneFiltered);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //e.preventDefault();
        const { value } = e.target;
        //setpopolazioneDati(ottieniDati(data, value));
        // alert(`${value}`);
        // console.log("popolazioneDati")
        // console.log(popolazioneFiltered);
        setDatiPerGrafico(ottieniDati(data, value));
               

    };




    return (


        <div className="sidebar">
            <ul>
                {
                    popolazioneFiltered.map(item => {
                        return (
                            <>
                                <li>
                                    <label>
                                        <input type="radio" name="country" onChange={handleChange} value={item} />
                                        {item}
                                    </label>
                                </li>

                            </>

                        )
                    })
                }
            </ul>
        </div>

    )
}

export default Sidebar;
