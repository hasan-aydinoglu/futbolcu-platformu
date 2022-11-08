import React from "react";

const Profil = ({  display, adSoyad, yas, uyruk, boy , kilo ,
     ayak , pozisyon 
      }) => {

    return (
        <div className="div-bottom-border">

            {(display) ? <Menu /> : <></>}

          
            <div className="row">
              
                <div className="col-sm-4">


                    <p>Ad Soyad: {adSoyad}</p>
                    <p>Yas: {yas}</p>
                    <p>Uyruk: {uyruk}</p>
                    <p>Boy: {boy}</p>
                    <p>Kilo: {kilo}</p>
                    <p>Pozisyon: {pozisyon}</p>
                    <p>Kullandigi Ayak: {ayak}</p>

                </div>




            </div>
        </div>

    )
};


export default Profil;