function RatingRow({ data, index }) {
  const { name, skillset, votes } = data;
  const surfaceClass = index % 2 == 0 ? "dark" : "light";

  return (
    <tr className={surfaceClass}>
      <td>{name}</td>
      <td>{skillset}</td>
      <td>{votes}</td>
    </tr>
  );
}

const getTopFiveVotes = (characters) => {
  const sortedVotes = characters.sort((a, b) => b.votes - a.votes);
  return sortedVotes.slice(0, 5);
};

export default function CharacterRatings({ characters }) {
  const topFive = getTopFiveVotes(characters);

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tr>
          <th>Name</th>
          <th>Skill Set</th>
          <th>Votes</th>
        </tr>
        {topFive.map((character, index) => {
          return (
            <RatingRow data={character} index={index} key={character.name} />
          );
        })}
      </table>
    </section>
  );
}
