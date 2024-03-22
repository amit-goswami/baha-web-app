import Link from 'next/link'
import { Container } from '@/components/atoms/container'
import { INavigationData } from '../../header.interface'
import { User } from 'firebase/auth'

type NavOptionsProps = {
  navigationData: INavigationData[]
  user: User | null
}

export const NavBarOptions = ({ navigationData, user }: NavOptionsProps) => {
  return (
    <Container className="flex flex-col lg:gap-y-2">
      {navigationData.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="rounded-full gap-6 hover:ring-2 px-4 hover:bg-[#f68a1e] hover:bg-opacity-15 ring-[#f68a1e] text-base font-semibold leading-7 text-gray-900 w-fit"
        >
          {item.name}
        </Link>
      ))}
      {user && (
        <Link
          href="/user"
          className="rounded-full gap-6 hover:ring-2 px-4 hover:bg-[#f68a1e] hover:bg-opacity-15 ring-[#f68a1e] text-base font-semibold leading-7 text-gray-900 w-fit"
        >
          Profile
        </Link>
      )}
    </Container>
  )
}
