import Link from 'next/link'
export type RestaurantCardProps = {
  cardStyle?: 'row' | 'column'
}

export const RestaurantCard = ({ cardStyle }: RestaurantCardProps) => {
  return (
    <>
      {cardStyle === 'column' ? (
        <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
          {/* TODO: LEAVE IT DYNAMICALLY */}
          <Link href="/restaurant/lorem-ipsum">
            <img
              src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
              alt=""
              className="w-full h-36"
            />
            <div className="p-1">
              <h3 className="font-bold text-2xl mb-2">Milestones Grill</h3>
              <div className="flex items-start">
                <div className="flex mb-2">*****</div>
                <p className="ml-2">77 reviews</p>
              </div>
              <div className="flex text-reg font-light capitalize">
                <p className=" mr-3">Mexican</p>
                <p className="mr-3">$$$$</p>
                <p>Toronto</p>
              </div>
              <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
            </div>
          </Link>
        </div>
      ) : (
        <div className="border-b flex pb-5">
          <img
            src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
            alt=""
            className="w-44 rounded"
          />
          <div className="pl-5">
            <h2 className="text-3xl">Aiāna Restaurant Collective</h2>
            <div className="flex items-start">
              <div className="flex mb-2">*****</div>
              <p className="ml-2 text-sm">Awesome</p>
            </div>
            <div className="mb-9">
              <div className="font-light flex text-reg">
                <p className="mr-4">$$$</p>
                <p className="mr-4">Mexican</p>
                <p className="mr-4">Ottawa</p>
              </div>
            </div>
            <div className="text-red-600">
              <a href="">View more information</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
