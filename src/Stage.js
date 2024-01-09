import React from 'react';
import StopLight from './StopLight';

const scenes = [
    [8000, 'green', 'red'],
    [2000, 'yellow', 'red'],
    [8000, 'red', 'green'],
    [2000, 'red', 'yellow']
];

export default function Stage() {
    const timeout = React.useRef();
    const [scene, setScene] = React.useState(0);
    const [time, northSouth, eastWest] = scenes[scene];
    const setNewScene = React.useCallback(() => {
        if (scene + 1 >= scenes.length) {
            setScene(0);
            return;
        }

        setScene(scene + 1);
    }, [scene, setScene]);

    React.useEffect(() => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            setNewScene();
        }, time);

        return () => {
            clearTimeout(timeout.current);
        };
    });

    return <>
        <div style={{ top: 0, left: '50%', position: 'absolute' }}>
            <StopLight light={northSouth} />
        </div>
        <div style={{ top: '50%', left: 0, position: 'absolute' }}>
            <StopLight light={eastWest} />
        </div>

        <div style={{ top: '50%', right: 0, position: 'absolute' }}>
            <StopLight light={eastWest} />
        </div>
        <div style={{ bottom: 0, left: '50%', position: 'absolute' }}>
            <StopLight light={northSouth} />
        </div>
    </>;
}