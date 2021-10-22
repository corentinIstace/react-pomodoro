import Display from "./components/display-param";

function App() {
    const seconds = 1500;
    return (
        <>
            <div id={"timer_container"}>
                <Display seconds={seconds} />
            </div>
            <div id={"buttons_container"}>
                <button type={"button"} id={"less_button"}>
                    <i className={"far fa-minus-square"} />
                </button>
                {/* <Start Start={Start} /> */}
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
                <button type={"button"} id={"add_button"}>
                    <i className={"far fa-plus-square"} />
                </button>
            </div>
        </>
    );
}
export default App;
