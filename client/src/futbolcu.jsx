import React, {useEffect , useState} from "react";
import axios from 'axios';
import Profil from "./profil";
import Menu from "./menu";

const Futbolcu = ({  }) => {

    const [futbolcu , setFutbolcu ] = useState ([]);


    useEffect(() => {

        const fetchData = async() => {
            const {data} = await axios.get('http://localhost:3000/profil');
            setFutbolcu(data);
        
        }

        fetchData();

        return () => {}
    },[]);

    

    return(
        <div>
            <Menu />

        {futbolcu.map((futbolcu, index) =>
                <Profil adSoyad={futbolcu.adSoyad}
                    yas={futbolcu.yas}
                    uyruk={futbolcu.uyruk}
                    boy={futbolcu.boy}
                    kilo={futbolcu.kilo}
                    pozisyon={futbolcu.pozisyon}
                    ayak={futbolcu.ayak}
                    display={false}
                    id={futbolcu.id}
                    key={index} />
            )}
            

        </div>

    )
 };

export default Futbolcu;