
// function Home(){
//     return (
//     <>
       
//         <h1>Home</h1>
//     </>
//     )
// }

// export default Home;

import React from 'react';

function Home() {
    const welcomeMessage = "Welcome to our Blog posts!";

    return (
        <div style={{ 
            backgroundColor: "#f0f0f0", 
            padding: "20px",
            minHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
          
            <p style={{ fontSize: "24px", fontWeight: "bold",color: "#004d99" }}>{welcomeMessage}</p>
        </div>
    );
}

export default Home;


