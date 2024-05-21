import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import './Memories.css';

const photos = [
  '/images/img1.jpg',
  '/images/img2.jpg',
  '/images/img3.jpg',
  '/images/img4.jpg',
  '/images/img5.jpg',
  '/images/img6.jpg',
  '/images/img7.jpg',
  '/images/img8.jpg',
  '/images/img9.jpg',
  '/images/img10.jpg',
  '/images/img11.jpg',
  '/images/img12.jpg',
  '/images/img13.jpg',
  '/images/img14.jpg',
  '/images/img15.jpg',
  '/images/img16.jpg',
  '/images/img17.jpg',
  '/images/img18.jpg',
  '/images/img19.jpg',
  '/images/img20.jpg',
  '/images/img21.jpg',
  '/images/img22.jpg',
  '/images/img23.jpg',
  '/images/img24.jpg',
  '/images/img25.jpg',
  '/images/img26.jpg',
  '/images/img27.jpg',
  '/images/img28.jpg',
];

const Memories = () => {
  return (
    <div className="memories">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry gutter="10px">
          {photos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Memory ${index + 1}`}
              style={{ width: '100%', display: 'block' }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Memories;
