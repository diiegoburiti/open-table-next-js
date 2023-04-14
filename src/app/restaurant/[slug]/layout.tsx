import { Banner } from 'components/Banner'

export default function RestaurantLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Banner />
      {children}
    </main>
  )
}
