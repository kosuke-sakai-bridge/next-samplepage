import Link from 'next/link'
import Image from 'next/image'

const nav = [{name: 'about'}, {name: 'special'}]

const Header = () => {
  return (
    <header className='l-header'>
      <h1>
        <Link href="/">
          <a>
            <Image src="/img_logo.svg" alt='SAMPLE' width={136} height={25}></Image>
          </a>
        </Link>
      </h1>
      <ul>
      <li>
        <Link href="/">
          <a>home</a>
        </Link>
      </li>
        {nav.map((link) => {
          return (
            <li key={link.name}>
              <Link href={`/${link.name}`}>
                <a>{link.name}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}

export default Header