// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const apiURL = "http://localhost:4001";

// export default function AllPost(){
//     let params = useParams();
//     console.log('in allpost')
//     const navigate = useNavigate();
  
//     const [posts, setPost] = useState([]);
  
//     useEffect(() => {
//       console.log("in effect")
//       fetch(apiURL + "/")
//         .then((res) => {
//           return res.json();
//         })
//         .then((res) => {
//           console.log("asdf",res)
//           setPost(res);
//         });
//     }, []);
    
//   const user=posts.map((e)=>{
//     return (
//       <>
//         <table>
          
//           <tr>
//             <td>Id: {e.id}</td>
//           </tr>
//           <tr>
//             <td>Title: {e.title}</td>
//           </tr>
  
//           <tr>
//             <td>Author: {e.author}</td>
//           </tr>
//           <tr>
//             <td>Content: {e.content}</td>
//           </tr>
//           {/* <tr>
//             <td>
//               <button
//                 className="btn btn-danger"
//                 onClick={() => {
//                   fetch(
//                       apiURL +
//                       params.id,
//                     {
//                       method: "DELETE",
//                     }
//                   ).then((res) => {
//                     navigate("/");
//                   });
//                 }}
//               >
//                 {" "}
//                 Delete{" "}
//               </button>
//             </td>
  
//             <td>
//               <button
//                 className="btn btn-success"
//                 onClick={() => {
//                   navigate("/Faculties/add/" + params.id);
//                 }}
//               >
//                 Edit
//               </button>
//             </td>
//           </tr> */}
//         </table>
//       </>
//     )

//   })
//   return user;
//   }
  



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function AllPost(){
//     const [post,setPost]=useState([]);
//     useEffect(()=>{
//         fetch("http://localhost:4001/post")
//          .then((res)=>{
//             return res.json();
//           })
//           .then((res)=>{
//             setPost(res);
//           });
//     },[])

//     const user=post.map((e)=>{
//         return (
//         <>
//         <table>
//           <tr>
//             <td>
//               <Link to={"../"+e.id}>
//               <h4>{e.author}</h4>
//               <h4>{e.title}</h4>
//               </Link>
//         </td>
//         </tr>
//         </table>
//         </>)
//     })

//     return user;
// }

// export default AllPost;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function AllPost() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:4001/post")
//             .then(res => res.json())
//             .then(data => setPosts(data));
//     }, []);

//     return (
//         <div className="container">
//             <h1>All Posts</h1>
//             <div className="post-table" style={{ backgroundColor: "#f9f9f9", borderCollapse: "collapse", width: "100%", padding: "10px", marginTop: "20px" }}>
//                 {posts.map(post => (
//                     <div key={post.id} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
//                         <Link to={"../" + post.id} style={{ textDecoration: "none", color: "#333" }}>
//                             <h2 style={{ marginBottom: "5px", fontWeight: "bold", color: "#004d99" }}>{post.title}</h2>
//                             <p style={{ fontSize: "14px", color: "#666" }}>Author: {post.author}</p>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default AllPost;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4001/post")
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
            <div className="post-table" style={{ backgroundColor: "#f9f9f9", borderCollapse: "collapse", width: "70%", padding: "20px", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}>
                <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#004d99" }}>All Posts</h1>
                {posts.map(post => (
                    <div key={post.id} style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                        <Link to={"../" + post.id} style={{ textDecoration: "none", color: "#333" }}>
                            <h2 style={{ marginBottom: "5px", fontWeight: "bold", color: "#004d99" }}>{post.title}</h2>
                            <p style={{ fontSize: "14px", color: "#666" }}>Author: {post.author}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllPost;

