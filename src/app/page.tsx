import { PrismaClient } from '@prisma/client'
import { Header } from 'components/Header'
import { RestaurantCard } from 'components/RestaurantCard'

const client = new PrismaClient()

const fetchRestaurants = () => {
  return client.restaurant.findMany()
}

export default async function Page() {
  const restaurants = await fetchRestaurants()

  console.log({ restaurants })

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-start">
        <RestaurantCard cardStyle="column" />
      </div>
    </main>
  )
}
