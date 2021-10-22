import {useState, useEffect} from "react";

export default function Start() {
    const [seconds, setSeconds] = useState(30);
    const [play] = useState(false); // Button Play

    useEffect(() => {
        if (play === true) {
            if (seconds > 0) {
                setTimeout(() => setSeconds(seconds - 1), 1000);
            }
        }
    });
    return (
        <button type={"button"} id={"start_button"} onClick={Start}>
            {"start"}
            {/* {play(true) ? (
                <i className={"far fa-play-circle"} />
            ) : (
                <i className={"far fa-stop-circle"} />
            )} */}
        </button>
    );
}
