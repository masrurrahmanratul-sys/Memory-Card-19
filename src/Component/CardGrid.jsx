import Card from './Card';

import "../CSS/CardGrid.css";

function CardGrid({ cards, onCardClick }) {
    if (cards.length === 0) {
        return <p>No cards available.</p>;
    }

    return (
        <div className="card-grid">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    image={card.image}
                    onCardClick={onCardClick}
                />
            ))}
        </div>
    );
}

export default CardGrid;