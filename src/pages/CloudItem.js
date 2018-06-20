import React from 'react';
import randomColor from 'randomcolor';

const CloudItem = (props) => (
    <div { ...props } className="tag-item-wrapper">
        <div style={{
              fontFamily: 'sans-serif',
              fontSize: 50,

              padding: 10,
              opacity: 0.6
            }}>
            { props.text }
        </div>
        <div style={{
              fontFamily: 'sans-serif',
              fontSize: 20,
            
              padding: 4,
            }}
            className="tag-item-tooltip">
            { props.text }
        </div>
    </div>
);

export default CloudItem;
