import React from 'react';

const colorHex = {
    red: '#ff0000',
    yellow: '#ffff00',
    green: '#00ff00'
};

export default function Light({ color, on }) {
    const opacity = on ? '1' : '0.3';
    return (
        <div style={{
            padding: '4px'
        }}>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" height="20">
                <circle cx="50" cy="50" r="50" fill={colorHex[color]} opacity={opacity} />
            </svg>
        </div>
    )
}