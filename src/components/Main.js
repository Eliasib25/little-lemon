import React from "react";
import '../App.css';

function Main({children}) {
    return (
        <main style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            {children}
        </main>
    );
}

export default Main;