const Parametre = ({value}) => (
    // return
    <span>{String(value).padStart(2, "0")}</span>
);

export default Parametre;

// permet d'afficher un "0" si le nombre demandé se compose d'un seul chiffre //
