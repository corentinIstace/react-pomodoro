import React from "react";
function app() {
    return (
        <>
            <div id={"timer_container"}>
                <h1>{"timer"}</h1>
            </div>
            <div id={"buttons_container"}>
                <button type={"button"} id={"less_button"}>
                    <i className={"far fa-minus-square"} />
                </button>
                <button type={"button"} id={"start_button"}>
                    {"start"}
                    <i className={"far fa-play-circle"} />
                </button>
                <button type={"button"} id={"breack_button"}>
                    {"breack"}
                    <i className={"far fa-pause-circle"} />
                </button>
                <button type={"button"} id={"restart_button"}>
                    {"restart"}
                    <i className={"fas fa-undo-alt"} />
                </button>
                <button type={"button"} id={"reset_button"}>
                    {"reset"}
                    <i className={"far fa-stop-circle"} />
                </button>
                <button type={"button"} id={"more_button"}>
                    <i className={"far fa-plus-square"} />
                </button>
            </div>
        </>
    );
}
export default app;
