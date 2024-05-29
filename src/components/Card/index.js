import React, { forwardRef } from 'react';
import './index.css'; // Your CSS styles

const Card = forwardRef(({ title, children }, ref) => (
    <div className="card" ref={ref}>
        <h2>{title}</h2>
        <div className="card-content">
            {children}
        </div>
    </div>
));

export default Card;
   