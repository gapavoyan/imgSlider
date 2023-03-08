import { useState } from 'react'
import './App.css'
import urlPhoto from './dataUrl';


function Slider() {
    const[index,setIndex] = useState(2)
    function prevSlide() {
        const firstSlide = index === 0;
        const newIndex = firstSlide?urlPhoto.length-1:index - 1;
        setIndex(newIndex)
    }
    function nextSlide() {
        const lastSlide = index === urlPhoto.length - 1;
        const newIndex = lastSlide?0:index + 1
        setIndex(newIndex)
    }
    return (
        <div className='container'>
            <div className="imgContainer"style={{backgroundImage:`url(${urlPhoto[index].link})`}}></div>
            <div className='prev'><i class="fa-solid fa-chevron-left" onClick={prevSlide}></i></div>
            <div className='next'><i class="fa-solid fa-chevron-right" onClick={nextSlide}></i></div>
       </div>
    )
}
export default Slider