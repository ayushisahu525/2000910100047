import React from 'react'

function Getlist() {
  return (
    <>
      const[train,  setTrain]= useState([]);

      useEffect(() => {
            try{
                const request="http://20.244.56.144:80/train/trains";
                const response = await fetch(request);
                const data = await response.json();
                setTrain(data);
                
            }
      },[]);
      }
  
    </>
  )
}

export default Getlist
