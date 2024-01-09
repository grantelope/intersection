import Light from './Light';
import React from 'react';

export default function StopLight({ light }) {
    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#111',
            width: '50px'
        }}>
            <Light color="red" on={light === 'red'} />
            <Light color="yellow" on={light === 'yellow'} />
            <Light color="green" on={light === 'green'} />
        </div>
    )
}