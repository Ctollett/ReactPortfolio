import React from 'react';
import PropTypes from 'prop-types';
import './index.css'; // Ensure this CSS file is created

const ImageGrid = ({ images }) => {
    const getGridItemClass = (index) => {
        // Modulus operator returns a repeating pattern index (0 to 4)
        const patternIndex = index % 5; 
        return `grid-item grid-item-${patternIndex + 1}`;
    };

    return (
        <div className="image-grid">
            {images.map((image, index) => (
                <div key={index} className={getGridItemClass(index)}>
                    <img src={image.url} alt={`Image ${index + 1}`} />
                </div>
            ))}
        </div>
    );
};


export default ImageGrid;  




