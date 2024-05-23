"use client"
import React, { useEffect, useState } from 'react'
 import ImageCard from './ImageCard';
import ImageSearch from './ImageSearch';
export default function Home() {
  
  const [images, setImage] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {

      fetch(`https://pixabay.com/api/?key=43990700-496e7c183f7602c6d78859a40&q=${term}&image_type=photo`)
     .then(res => res.json())
     .then(data =>  {
     
            setImage(data.hits);
            setLoading(false); 
            console.log(data.hits)
          } 
            )
     .catch(err => console.log(err))
  },[term])
    return(
      <span className='flex flex-col overflow-hidden '>
      <ImageSearch searchText={(text) => setTerm(text)} />
      {
        !isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
      }
     {isLoading ?  <h1 className='text-6xl mx-auto mt-32 text-center'> </h1>  : <div className="container mx-auto">
      <div className="grid grid-cols-3 grid-rows-3 gap-y-96 max-lg:grid max-lg:grid-cols-2 max-lg:grid-rows-2 max-lg:gap-y-96   max-md:grid-cols-1 max-md:grid-rows-1 max-md:gap-y-96 items-center justify-center max-md:mx-14"> 
     {
      images.map(image =>(
       <ImageCard key={image.id} image={image} />
      ))
     }
     </div>
     </div>}
      </span>
    )
 
}
