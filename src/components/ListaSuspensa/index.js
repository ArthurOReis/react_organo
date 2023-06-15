import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option> //Para cada item em 'itens', retornar item dentro da tag 'option' e também uma 'key', com item sendo seu valor
                })};
            </select>
        </div>
    );
};

export default ListaSuspensa;