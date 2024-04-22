import SearchBar from "../components/SearchBar";
import RaceFilter from "../components/RaceFilter";
import { useLoaderData } from "react-router-dom";
// import Card component here

function CardList() {
    const results = useLoaderData();

    // get data from API here
    console.log(results);
    console.log(results.data[1].card_images[0].image_url);

    return (
        <main>
            <aside>
                <h3>Apply filters</h3>
                <SearchBar />
                <RaceFilter />
            </aside>
            {results.data.map((card, index) => {
                return (
                    <img
                        key={card[index]}
                        src={card.card_images[0].image_url}
                        height={250}
                    />
                );
            })}
        </main>
    );
}
export default CardList;
