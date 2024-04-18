// import { Link } from "react-router-dom";

// function Header(){

//     return(
//     <>
   
//     <Link to="./">Home</Link> &nbsp;  
//     <Link to="./post">All Faculty</Link> &nbsp;  
//     <Link to="./add">Add Faculty </Link> &nbsp;    
     
//     </>)
// }
import { Link } from "react-router-dom";

function Header() {
    return (
        <div style={headerStyle}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/post" style={linkStyle}>All Posts</Link>
            <Link to="/add" style={linkStyle}>Add Post</Link>
        </div>
    );
}

const headerStyle = {
    backgroundColor: "#f0f0f0",
    padding: "10px",
    marginBottom: "5px",
};

const linkStyle = {
    marginRight: "10px",
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    fontWeight: "bold",
};

export default Header;
