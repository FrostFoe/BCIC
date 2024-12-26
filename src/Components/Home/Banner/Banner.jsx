import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 4 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel relative w-full h-screen overflow-hidden">
      <div id="slide1" className={`carousel-item ${currentSlide === 1 ? 'block' : 'hidden'} relative w-full h-full`}>
        <img src="https://i.postimg.cc/Nj6fpWZ2/bc2.jpg" className="w-full h-full object-cover" alt="Slide 1" />
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <button onClick={() => setCurrentSlide(4)} className="btn btn-circle text-white bg-opacity-50">❮</button>
          <button onClick={() => setCurrentSlide(2)} className="btn btn-circle text-white bg-opacity-50">❯</button>
        </div>
      </div>

      <div id="slide2" className={`carousel-item ${currentSlide === 2 ? 'block' : 'hidden'} relative w-full h-full`}>
        <img src="https://i.postimg.cc/NGnMM81F/bc1.jpg" className="w-full h-full object-cover" alt="Slide 2" />
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <button onClick={() => setCurrentSlide(1)} className="btn btn-circle text-white bg-opacity-50">❮</button>
          <button onClick={() => setCurrentSlide(3)} className="btn btn-circle text-white bg-opacity-50">❯</button>
        </div>
      </div>

      <div id="slide3" className={`carousel-item ${currentSlide === 3 ? 'block' : 'hidden'} relative w-full h-full`}>
        <img src="https://i.postimg.cc/YSt2Vdwn/bc3.jpg" className="w-full h-full object-cover" alt="Slide 3" />
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <button onClick={() => setCurrentSlide(2)} className="btn btn-circle text-white bg-opacity-50">❮</button>
          <button onClick={() => setCurrentSlide(4)} className="btn btn-circle text-white bg-opacity-50">❯</button>
        </div>
      </div>

      <div id="slide4" className={`carousel-item ${currentSlide === 4 ? 'block' : 'hidden'} relative w-full h-full`}>
        <img src="https://i.postimg.cc/YSt2Vdwn/bc3.jpg" className="w-full h-full object-cover" alt="Slide 4" />
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <button onClick={() => setCurrentSlide(3)} className="btn btn-circle text-white bg-opacity-50">❮</button>
          <button onClick={() => setCurrentSlide(1)} className="btn btn-circle text-white bg-opacity-50">❯</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
