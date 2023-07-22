import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


const request="http://20.244.56.144:80/train/trains";
function Getlist() {
      const[train,  setTrain]= useState([]);


      useEffect(() => {
        const fetchData = async() => {
          const response = await fetch(request);
          const data = await response.json();
          setTrain(data);
        }
        fetchData();
      
        })


        return (
          <div>
          
          </div>
        )
      }
        
export default Getlist


