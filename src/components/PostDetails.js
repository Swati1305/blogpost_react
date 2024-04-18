// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// function PostDetails(){
//     let params = useParams();
//     const navigate=useNavigate();

//     const[post,setPost]=useState({});

//     useEffect(()=>{
//         fetch("http://localhost:4001/"+params.id,{
//             method:"GET"
//         })
//         .then((res)=>{
//             return res.json();
//         })
//         .then((res)=>{
//             setPost(res )
//         });
//     },[]);

//    return(
//      <>
//         <table>
//             <tr>
//                 <td>Id</td>
//                 <td>{post.id}</td>
//             </tr>

//             <tr>
//                 <td>Author</td>
//                 <td>{post.author}</td>
//             </tr>

//             <tr>
//                 <td>Title</td>
//                 <td>{post.title }</td>
//             </tr>

//             <tr>
//                 <td>Content</td>
//                 <td>{post.content }</td>
//             </tr>

//             <tr>
//                 <td >
//                     <button onClick={()=>{
//                           fetch("http://localhost:4001/delete/"+params.id,{
//                             method:"DELETE"
//                           })
//                           .then((res)=>{
//                                 navigate("/post");
//                               return res.json();
//                           });
                          
//                     }}>Delete</button>
//                 </td> 
//                 <td>
//                     <button onClick={()=>{
//                         navigate("/update/"+params.id);
//                     }}>Edit</button>
//                 </td>
//             </tr>
            
//         </table>
      
//      </>)
//    }
// export default PostDetails;


import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PostDetails.css"; // Import CSS file

function PostDetails() {
    const params = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4001/${params.id}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, []);

    const handleDelete = () => {
        fetch(`http://localhost:4001/delete/${params.id}`, { method: "DELETE" })
            .then(res => res.json())
            .then(() => navigate("/post"));
    };

    return (
        <div className="post-details-container">
            <h2 className="post-details-title">Post Details</h2>
            <div className="container">
            <div className="table-container">
            <table className="post-details-table">

                <tbody>
                    <tr>
                        <td className="post-details-label">Id:</td>
                        <td>{post.id}</td>
                    </tr>
                    <tr>
                        <td className="post-details-label">Author:</td>
                        <td>{post.author}</td>
                    </tr>
                    <tr>
                        <td className="post-details-label">Title:</td>
                        <td>{post.title}</td>
                    </tr>
                    <tr>
                        <td className="post-details-label">Content:</td>
                        <td>{post.content}</td>
                    </tr>
                    <tr>
                        <td>
                            <button className="delete-button" onClick={handleDelete}>Delete</button>
                        </td>
                        <td>
                            <button className="edit-button" onClick={() => navigate(`/update/${params.id}`)}>Edit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
        </div>
    );
}

export default PostDetails;







