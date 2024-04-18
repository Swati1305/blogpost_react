import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import App from './App';
import { createRoot } from 'react-dom';
import AllPost from './components/AllPost';
import axios from 'axios';
import AddPost from './components/AddPost';
import PostDetails from './components/PostDetails';
import Layout from './components/Layout';
import Home from './components/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/><Route/>
          <Route path="/post" element={<AllPost/>}></Route>
          <Route path="/:id" element={<PostDetails/>}></Route>
          <Route path="/add" element={<AddPost/>}></Route>
          <Route path="/update/:id" element={<AddPost/>}></Route>

  
      {/* <Route index element={<Home />} /> */}
      {/* <Route path="/App" element={<Faculty />} />
      
      <Route path="/" element={<AllPost />} />
      {/* <Route path="/Faculties/:id" element={<FacDetails />} />
      <Route path="/Faculties/add/:id" element={<FacAdd />} /> */}
    </Route>
  </Routes>
</BrowserRouter>
</>
);

