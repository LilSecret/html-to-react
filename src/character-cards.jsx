import { Component } from "react";
import data from "./data";

const { cards } = data;

class CharacterCard extends Component {
  render() {
    const { name, nickname, image, description } = this.props.data;
    return (
      <div className="card" key={name}>
        <div className="card-titles">
          <h3>{name}</h3>
          {nickname ? <h4>{nickname}</h4> : ""}
        </div>
        <img src={image} alt="character image" />
        <p>{description}</p>
      </div>
    );
  }
}

function CharacterCards() {
  return (
    <section id="character-cards">
      {cards.map((card) => {
        return <CharacterCard data={card} key={card.name} />;
      })}
    </section>
  );
}

export default CharacterCards;
