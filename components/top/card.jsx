import Link from 'next/link'
import Image from 'next/image'

const Card = (props) => {
  return (
    <li>
      <Link href={props.link}>
        <a>
          <div className='card-pickup'>
            <div className='card-pickup--text'>
              <h4 data-subtitle={props.subtitle}>{props.title}</h4>
              <p>{props.text}</p>
            </div>
            <Image src={props.src} alt={props.alt} width={200} height={200}></Image>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default Card