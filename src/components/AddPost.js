import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddPost.css";

function AddPost(){
    const navigate=useNavigate();
    const params=useParams();
    const [data,setData] = useState({});

   
        useEffect(()=>{
            if(params.id > 0){
                fetch("http://localhost:4001/"+params.id,{
                    method:"GET"
                })
                .then((res)=>{
                    return res.json();
                })
                .then((res)=>{
                    setData(res )
                });
           }
        },[]);
    
  
    return(
        <>
        <div className="container">
        <div className="table-container">
            <table>
                <tr>
                    <td>Enter id</td>
                    <td>:</td>
                    <td><input value={data.id}
                     onChange={(e)=>{
                        setData({...data,id:e.target.value});
                    }} 
                    type="number"/></td>
                </tr>
                <tr>
                    <td>Enter Auther Name</td>
                    <td>:</td>
                    <td><input  value={data.author}
                    onChange={(e)=>{
                        setData({...data,author:e.target.value});
                    }} type="text"/></td>
                </tr>
                <tr>
                    <td>Enter Title</td>
                    <td>:</td>
                    <td><input value={data.title}
                     onChange={(e)=>{
                        setData({...data,title:e.target.value});
                    }}
                    type="text"/></td>
                </tr>
                <tr>
                    <td>Enter Content</td>
                    <td>:</td>
                    <td><input  value={data.content}
                    onChange={(e)=>{
                        setData({...data,content:e.target.value});
                    }}
                    type="text"/></td>
                </tr>
                <tr>
                    <td colSpan="3">
                        <button onClick={()=>{
                            if(params.id>0){
                                fetch("http://localhost:4001/update/"+params.id,{ 
                                method:"PUT",
                                body:JSON.stringify(data),
                                headers:{
                                    "Content-Type":"application/json"
                                }
                                }).then(()=>{
                                navigate("/post")
                            })
                            }else{
                                fetch("http://localhost:4001/add",{ 
                                    method:"POST",
                                    body:JSON.stringify(data),
                                    headers:{
                                        "Content-Type":"application/json"
                                    }
                                 }).then(()=>{
                                  navigate("/post")
                            })
                            }
                            
                        }}>
                            {params.id>0 && "Edit"}
                            {!(params.id>0) && "add"}
                            </button>
                    </td>
                </tr>
            </table>
            </div>
            </div>
        </>
    )

}
export default AddPost;



