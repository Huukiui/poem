import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import './Memories.css';

const photos = [
  `${process.env.PUBLIC_URL}/images/img1.jpg`,
  `${process.env.PUBLIC_URL}/images/img2.jpg`,
  `${process.env.PUBLIC_URL}/images/img3.jpg`,
  `${process.env.PUBLIC_URL}/images/img4.jpg`,
  `${process.env.PUBLIC_URL}/images/img5.jpg`,
  `${process.env.PUBLIC_URL}/images/img6.jpg`,
  `${process.env.PUBLIC_URL}/images/img7.jpg`,
  `${process.env.PUBLIC_URL}/images/img8.jpg`,
  `${process.env.PUBLIC_URL}/images/img9.jpg`,
  `${process.env.PUBLIC_URL}/images/img10.jpg`,
  `${process.env.PUBLIC_URL}/images/img11.jpg`,
  `${process.env.PUBLIC_URL}/images/img12.jpg`,
  `${process.env.PUBLIC_URL}/images/img13.jpg`,
  `${process.env.PUBLIC_URL}/images/img14.jpg`,
  `${process.env.PUBLIC_URL}/images/img15.jpg`,
  `${process.env.PUBLIC_URL}/images/img16.jpg`,
  `${process.env.PUBLIC_URL}/images/img17.jpg`,
  `${process.env.PUBLIC_URL}/images/img18.jpg`,
  `${process.env.PUBLIC_URL}/images/img19.jpg`,
  `${process.env.PUBLIC_URL}/images/img20.jpg`,
  `${process.env.PUBLIC_URL}/images/img21.jpg`,
  `${process.env.PUBLIC_URL}/images/img22.jpg`,
  `${process.env.PUBLIC_URL}/images/img23.jpg`,
  `${process.env.PUBLIC_URL}/images/img24.jpg`,
  `${process.env.PUBLIC_URL}/images/img25.jpg`,
  `${process.env.PUBLIC_URL}/images/img26.jpg`,
  `${process.env.PUBLIC_URL}/images/img27.jpg`,
  `${process.env.PUBLIC_URL}/images/img28.jpg`
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
