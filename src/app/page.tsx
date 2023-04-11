import { NavBar } from 'components/navBar'
import { Header } from 'components/header'
import { RestaurantCard } from 'components/restaurantCard'

export default function Page() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-start">
            <RestaurantCard />
          </div>
        </main>
      </main>
    </main>
  )
}
