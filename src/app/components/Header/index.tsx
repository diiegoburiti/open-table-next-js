import { SearchBar } from 'components/SearchBar'

export type HeaderProps = {
  hiddenTitle?: boolean
}

export const Header = ({ hiddenTitle = false }: HeaderProps) => (
  <div
    className={
      'bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2 ' +
      (hiddenTitle ? 'h-auto' : 'h-64')
    }
  >
    <div className={'text-center ' + (hiddenTitle ? 'mt-0' : 'mt-10')}>
      {!hiddenTitle && (
        <h1 className={'text-white text-5xl font-bold mb-2'}>
          Find your table for any occasion
        </h1>
      )}
      <SearchBar />
    </div>
  </div>
)
