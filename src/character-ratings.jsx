import data from "./data";

const { ratings } = data;
const sortedRatings = ratings.sort((a, b) => b.votes - a.votes);
const firstFive = sortedRatings.slice(0, 5);

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
        {firstFive.map((rating, index) => {
          return <RatingRow data={rating} index={index} key={rating.name} />;
        })}
      </table>
    </section>
  );
}

export default CharacterRatings;
