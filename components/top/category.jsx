import Link from 'next/link'
// import Image from 'next/image'

const Category = (props) => {
  return (
    <>
      <li>
        <Link href={props.link}>
          <a>
            <figure>
              {/* <Image src={props.src} alt={props.alt} width={259} height={259}></Image> */}
              <img src={props.src} alt={props.alt} />
            </figure>
            <span>{props.category}</span>
          </a>
        </Link>
      </li>
    </>
  )
}

export default Category