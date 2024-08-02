import React from 'react';
import './categories.css';
import logo from '../../assets/logo.jpg';
import logo2 from '../../assets/image.jpg';
import img3 from '../../assets/img3.jpg';
import img1 from '../../assets/image1.jpg';
import img4 from '../../assets/img4.jpg';
import img2 from '../../assets/img2.jpg';
import img5 from '../../assets/img5.jpg';
import img6 from '../../assets/categories.png';
import img7 from '../../assets/img7.png';
import img8 from '../../assets/download.jpeg';

function Categories() {
  const images = [
    { src: logo, alt: 'Logo', content: 'Reading Comprehension' },
    { src: logo2, alt: 'Logo 2', content: 'Spelling Correction' },
    { src: img3, alt: 'Image 3', content: 'Slight Words' },
    { src: img1, alt: 'Image 1', content: 'Physical Activity' },
    { src: img4, alt: 'Image 4', content: 'Science Facts' },
    { src: img2, alt: 'Image 2', content: 'Vocabulary Booster' },
    { src: img5, alt: 'Image 5', content: 'Maths Puzzle' },
    { src: img6, alt: 'Image 2', content: 'Logic Puzzles' },
    { src: img7, alt: 'Image 2', content: 'Fairy Tale' },
    { src: img8, alt: 'Image 2', content: 'Memory Challenge' },
  ];

  return (
    <section id="category" className="py-16 main">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12 text-gray-800 text-centert">Categories</h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {images.map((img, index) => (
            <div key={index} className="category-item">
              <img src={img.src} alt={img.alt} className="rounded-lg shadow-xl" />
              <div className="category-overlay">
                <span>{img.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
