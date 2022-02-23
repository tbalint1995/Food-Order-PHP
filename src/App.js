import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import MainComponent from './MainComponent';
import Login2 from './components/Login2';
import Register2 from './components/Register2';
import Shop from './components/Shop';
import Remember from './components/Remember';
import React, { Component } from "react";
import Config  from './components/Config';
import { useState,useEffect } from 'react';

const  {imagesPath, api_url, session_id}  = Config;


export default function App() {

  const [data, setdata] = useState({product_list:[], hot_deals: []})

  const getjson = async () => {
    const response = await fetch(api_url + '?case=get_data', {
      method: 'POST',
    
          headers: {
              'Content-Type': 'application/json',  // sent request (alt: 'application/x-www-form-urlencoded')
              'Accept': 'application/json',   // expected data sent back
              
          },
     
      body: JSON.stringify({session_id: session_id}),

      credentials: 'same-origin',

  });
    return response.json().then(response => {
      setdata(response);
    })
  }

  useEffect(() => {
    getjson()
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainComponent refreshData={getjson} data={ data } /> } >
        <Route index element={<Home refreshData={getjson} data={ data } /> }  />
          <Route path='home' element={<Home refreshData={getjson} data={data} />} />
          <Route path='login2' element={<Login2 />} />
          <Route path='register2' element={<Register2 />} />
          <Route path='remember' element={<Remember />} />
          <Route path='shop' element={<Shop refreshData={getjson} data={ data } />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
