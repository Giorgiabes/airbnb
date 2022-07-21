import Card from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import data from "./data"

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        coverImg={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    )
  })
  return (
    <>
      <Navbar />
      <div className="app">
        <Hero />
        <section className="cards-list">
          {cards}
        </section>
      </div>
    </>
  )
}

export default App
