import { Header } from 'components/Header'
import { RestaurantCard } from 'components/RestaurantCard'
import { Base } from 'templates/Base'

export default function Page() {
  return (
    <Base>
      <main>
        <Header />
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-start">
          <RestaurantCard />
        </div>
      </main>
    </Base>
  )
}
