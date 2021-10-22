import Parametre from "./parametre";

const Display = ({seconds}) => (
    // return
    <div className={"timer"}>
        <Parametre value={Math.floor(seconds / 60)} />
        {":"}
        <Parametre value={seconds % 60} />
    </div>
);

export default Display;

// import de la function Parametre afin que l'affichage ce face correctement avec le "0",
// la fonction display permet d'afficher dans le premier component Parametre les minutes grâce à Math.floor
// la fonction display permet d'afficher dans le second component Parametre les secondes grâce au modulo
