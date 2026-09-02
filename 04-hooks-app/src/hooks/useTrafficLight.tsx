import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
    const [light, setLight] = useState<TrafficLightColor>('red');
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        if (countdown === 0) {
            setCountdown(5);
            return;
        };
        const intervalId = setInterval(() => {
            setCountdown(prev => prev - 1);
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, [countdown]);

    useEffect(() => {
        if (countdown !== 0) return;
        switch (light) {
            case 'red':
                setLight('green');
                break;
            case 'yellow':
                setLight('red');
                break;
            case 'green':
                setLight('yellow');
                break;
            default:
                break;
        }

    }, [countdown, light]);
    return {
        colors, light, countdown
    }
}
