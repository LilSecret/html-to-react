import { Component } from "react";

const cardData = [
  {
    name: "Alex Louis Armstrong",
    nickname: "Major Armstrong",
    image:
      "https://www.giantbomb.com/a/uploads/original/1/19821/694167-armstrong.jpg",
    description: `Major Armstrong may look big and strong, but deep down he's the
    biggest sap in the entire show`,
  },
  {
    name: "Alphonse Elrich",
    image:
      "https://upload.wikimedia.org/wikipedia/en/7/7c/AlphonseElricArakawa.jpg",
    description:
      "Alphonse is a walking suit of armor on a quest to find his real body",
  },
  {
    name: "Edward Elrich",
    nickname: "The Fullmetal Alchemist",
    image:
      "https://www.pngkit.com/png/detail/952-9524083_edward-elric-photo-edwardelric7-full-body-edward-elric.png",
    description: `Edward is a master alchemist and our main character... just don't call
    him short`,
  },
  {
    name: "Greed",
    nickname: "Greed",
    image:
      "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/greed-fullmetal-alchemist.jpg",
    description: `Greed is one of the seven deadly sins Homunculii. He's the most 'on
    our side' of all of them.`,
  },
  {
    name: "Nina Tucker",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dK-tXCnVxbSeSJuCKmiX0zUbnCEV1ss54DeOYgXUHSE0WB23TAUD4a3itwFbzJ9fkg&usqp=CAU",
    description: `Nina is an adorable little girl! If you've watched FMA you know...`,
  },
  {
    name: "Riza Hawkeye",
    nickname: "Hawkeye",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8171ae7d-9e3c-4aeb-b277-2a8308b0262a/d87573o-e22eb88b-1c20-449c-9093-1e4fba7856f3.png/v1/fill/w_622,h_350,strp/riza_hawkeye___minimalist_vector_wallpaper_by_rebeccaangoo_d87573o-350t.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvODE3MWFlN2QtOWUzYy00YWViLWIyNzctMmE4MzA4YjAyNjJhXC9kODc1NzNvLWUyMmViODhiLTFjMjAtNDQ5Yy05MDkzLTFlNGZiYTc4NTZmMy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.InNg0JonI4tCcxkN-u8E2z7Z4aqvLLxClcDwujxbTJs",
    description: `Hawkeye is Colonel Mustang's loyal assistant, and one of the strongest
    non-alchemist characters in the show`,
  },
  {
    name: "Solf J. Kimblee",
    nickname: "The Crimson Alchemist",
    image:
      "https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2022/03/full-metal-alchemist-mobile-char-2.jpg?resize=640%2C457&ssl=1",
    description: "Kimblee suckkkkkssss, seriously he's not very nice",
  },
  {
    name: "Tim Marcoh",
    nickname: "Dr. Marcoh",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjljMjEzZmUtMjE2My00NWY1LTljMzAtYWNjOTI5Yzk5NmZjXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_FMjpg_UX1000_.jpg",
    description: `Dr. Marcoh did some F**ked up S**t in the war on ishval, but his
    redemption arc is strong`,
  },
  {
    name: "Winrey Rockbell",
    image:
      "https://s3.amazonaws.com/comicgeeks/characters/avatars/36066.jpg?t=1668454278",
    description: `Winrey is Edward and Al's best friend, and it's a good thing because
    her specialty is making the best automail out there`,
  },
];

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
      {cardData.map((card) => {
        return <CharacterCard data={card} key={card.name} />;
      })}
    </section>
  );
}

export default CharacterCards;
