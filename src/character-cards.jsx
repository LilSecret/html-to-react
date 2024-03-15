import { Component } from "react";

class CharacterCard extends Component {
  render() {
    const { name, nickName, imageUrl, background } = this.props.data;
    return (
      <div className="card" key={name}>
        <div className="card-titles">
          <h3>{name}</h3>
          {nickName ? <h4>{nickName}</h4> : ""}
        </div>
        <img src={imageUrl} alt="character image" />
        <p>{background}</p>
      </div>
    );
  }
}

export default function CharacterCards({ characters }) {
  return (
    <section id="character-cards">
      {characters.map((character) => {
        return <CharacterCard data={character} key={character.name} />;
      })}
    </section>
  );
}
