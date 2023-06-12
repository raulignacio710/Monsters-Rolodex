import './card.styles.css';

const Card = ({monster: {id,name,email}}) => (
    <div key={id}>
        <div className="monster-card">
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>   
    </div>
);

export default Card;