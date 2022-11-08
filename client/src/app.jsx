import React from "react";
import Futbolcu from "./futbolcu";
import AddFutbolcu from "./addFutbolcu";

const App = ({ pageName }) => {

    const pageToShow = () => {
    
        if (pageName === 'futbolcu') return <Futbolcu />;
        if (pageName === 'addFutbolcu') return <AddFutbolcu />;
        
    
        return <div>Not Found</div>;
    };

    return (
        <div>

            {pageToShow()}

        </div>
    )

};

export default App;