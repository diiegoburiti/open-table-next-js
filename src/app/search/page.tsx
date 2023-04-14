import { Header } from 'components/Header'
import { RestaurantCard } from 'components/RestaurantCard'
import { SearchSideBar } from 'components/SearchSideBar'

export default function Search() {
  return (
    <>
      <Header hiddenTitle />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCard cardStyle="row" />
        </div>
      </div>
    </>
  )
}
