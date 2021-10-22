import {useState, useEffect} from "react";

export default function Timer() {
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(30);
    const [displayMessage] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            clearInterval(interval);
            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
                // else {
                //     const minute = displayMessage ? 24 : 4;
                //     const second = 59;
                //     setSeconds(second);
                //     setMinutes(minute);
                //     setDisplayMessage(!displayMessage);
                // }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);
    }, [seconds]);

    return (
        <div className={"pomodoro"}>
            <div className={"message"}>{displayMessage}</div>
            <div className={"timer"}>
                {minutes < 10 ? `0${minutes}` : minutes}
                {":"}
                {seconds < 10 ? `0${seconds}` : seconds}
            </div>
        </div>
    );
}
