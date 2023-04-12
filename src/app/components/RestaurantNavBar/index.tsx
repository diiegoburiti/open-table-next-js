import Link from 'next/link'

export const RestaurantNavBar = () => (
  <nav className="flex text-reg border-b pb-2">
    {/* TODO: LEAVE IT DYNAMICALLY */}
    <Link href="/restaurant/lorem-ipsum" className="mr-7">
      Overview
    </Link>
    {/* TODO: LEAVE IT DYNAMICALLY */}
    <Link href="/restaurant/lorem-ipsum/menu" className="mr-7">
      Menu
    </Link>
  </nav>
)
