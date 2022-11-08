import  { useEffect , useState} from "react";

import Menu from "./menu";

import axios from 'axios';

const AddFutbolcu = ({ }) =>{

    const [adSoyad , setAdSoyad] =useState('0');
    const [yas , setYas] =useState('0');
    const [uyruk , setUyruk] =useState('0');
    const [boy , setBoy] =useState("0");
    const [kilo , setKilo] =useState('0');
    const [pozisyon , setPozisyon] =useState("0");
    const [ayak , setAyak] =useState("0");
    

    const [displayResult, setDisplayResult] = useState(true);

    const futbolcuEkle = () => {

        axios.post('http://localhost:3000/add-futbolcu', {
            adSoyad: adSoyad,
            yas: yas,
            uyruk: uyruk,
            boy : boy,
            kilo : kilo,
            pozisyon : pozisyon,
            ayak : ayak,
           

          })
          .then(function (response) {
            console.log(response);
            setDisplayResult(false);
          })    
          .catch(function (error) {
            console.log(error);
          });
    }


    return(
       <div>
        <Menu />
        { (displayResult) ?
            <div >
                <div className="col-sm-4">

                    <label>Ad Soyad: </label>
                    <input className="form-control" type={'text'}
                        onChange={(e) => {
                            setAdSoyad(e.target.value);
                        }} />
                </div>

                <div className="col-sm-4">
                    <label>Yas: </label>
                    <input className="form-control" type={'text'}
                        onChange={(e) => {
                            setYas(e.target.value);
                        }} />
                </div>

                <div className="col-sm-4">
                    <label>Uyruk: </label>
                    <input  className="form-control" type={'text'}
                        onChange={(e) => {
                            setUyruk(e.target.value);
                        }} />
                </div>

                <div className="col-sm-4">
                    <label>Boy: </label>
                    <input className="form-control" type={'text'}
                        onChange={(e) => {
                            setBoy(e.target.value);
                        }} />
                </div>

                <div className="col-sm-4">
                    <label>Kilo: </label>
                    <input className="form-control" type={'text'}
                        onChange={(e) => {
                            setKilo(e.target.value);
                        }} />
                </div>

                <div className="col-sm-4">
                    <label>Pozisyon: </label>
                    <input className="form-control" type={'text'}
                        onChange={(e) => {
                            setPozisyon(e.target.value);
                        }} />
                </div>

                <div className="col-sm-4">
                    <label>Ayak: </label>
                    <input className="form-control" type={'text'}
                        onChange={(e) => {
                            setAyak(e.target.value);
                        }} />
                </div>

                <div className="col-sm-4">
                <button onClick={futbolcuEkle}>Futbolcu Ekle</button>
            </div> 
            </div>
             : <div>Start up added successfully</div> }
        

        </div>
    )
};

export default AddFutbolcu;     