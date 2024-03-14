const ratings = [
  {
    name: "Hawkeye",
    skillSet: "Sniper, Loyal AF",
    votes: 95,
  },
  {
    name: 'Edward Elrich "Full Metal Alchemist"',
    skillSet: "Alchemy, Human Transmutation",
    votes: 100,
  },
  {
    name: "Nina",
    skillSet: "Loving Dogs, being adorable",
    votes: 93,
  },
  {
    name: "Mj. Armstrong",
    skillSet: "Alchemy, Muscles",
    votes: 94,
  },
  {
    name: "Alfonse Elrich",
    skillSet: "Being Loveable, Alchemy",
    votes: 110,
  },
];

const topRatings = ratings.sort((a, b) => b.votes - a.votes);

function RatingRow(props) {
  const newIndex = props.index + 1;
  const { name, skillSet, votes } = props.data;
  const surfaceClass = newIndex % 2 == 0 ? "light" : "dark";
  return (
    <tr className={surfaceClass}>
      <td>{name}</td>
      <td>{skillSet}</td>
      <td>{votes}</td>
    </tr>
  );
}

function CharacterRatings() {
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Skill Set</th>
          <th>Votes</th>
        </tr>
        {topRatings.map((rating, index) => {
          return <RatingRow data={rating} index={index} key={rating.name} />;
        })}
      </table>
    </section>
  );
}

export default CharacterRatings;
