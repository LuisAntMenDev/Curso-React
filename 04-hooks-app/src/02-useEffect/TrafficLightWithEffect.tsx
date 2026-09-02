import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse'
}

type TrafficLightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {

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

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">
                <h1 className="text-white text-3xl font-thin">Semáforo con useEffect</h1>
                <h2 className="text-white text-xl">Countdown: {countdown}</h2>
                <div className="bg-gray-700 w-64 h-2 rounded-full">
                    <div className="bg-blue-500 transition-all h-2 rounded-full duration-1000 ease-linear" style={{ width: `${countdown / 5 * 100}%` }}></div>
                </div>
                <div className={`w-32 h-32 ${light === 'red' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'yellow' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'green' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
            </div>
        </div>
    );
};
