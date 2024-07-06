import React, { useEffect, useState } from 'react'
import './banner.css'
import bgImg from '../images/transformers_banner.jpg'

function Banner() {
  const [movies, setMovies] = useState([])

  const fetchdata = () =>{
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=8d42d1c5')
    .then(res => res.json())
    .then(data => setMovies(data))
    .catch(e=>console.log(e.message));
  }

  useEffect(()=>{
    fetchdata()
  }, [])

  return (
    <>
    <div className="banner">
      <div className="movie">
        <img src="" alt="Background image" className="bgImg active" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="content">
                <img src="" alt="Movie Title" className="movie-title" />
                <h4><span>year</span>
                  <span><i>age</i></span>
                  <span>length</span>
                  <span>category</span>
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illo voluptatem, cumque ratione nihil molestiae! In error qui impedit. Magnam, animi sapiente. Tenetur amet optio dolor nemo ratione tempore libero?                  
                </p>
                <div className="buton">button</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Banner
