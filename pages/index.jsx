import Title from '../components/top/title'
import Card from '../components/top/card'
import Category from '../components/top/category'

const Home = () => {
  return (
    <div className='top'>

      {/* mv */}
      <div className='top__mv'></div>

      <h2>Home</h2>

      {/* pickup */}
      <div className='top__pickup'>
        <div className='top__pickup--introduction'>
          <Title title="pick Up" />
          <p className='lead'>下記のボタンを押すと詳細ページに遷移します。</p>
        </div>
        <ul>
          <Card link={'/about/'} subtitle="詳しく知りたい方へ" title="about" text="このサイトについての詳細ページです。気になる方はクリックしてみてください。" src={'/top/img_about.jpg'} alt={'about'} />
          <Card link={'/special/'} subtitle="限定商品のご案内" title="special" text="限定商品の詳細はこちらのボタンをクリックしてください。" src={'/top/img_special.jpg'} alt={'special'} />
        </ul>
      </div>

      {/* category */}
      <div className='top__category'>
      <Title title="category" />
        <ul>
          <Category link={'/products/bag/'} src={'/top/img_bag.jpg'} alt="bag" category="Bag" />
          <Category link={'/products/shirts/'} src={'/top/img_shirts.jpg'} alt="shirts" category="T-shirts" />
          <Category link={'/products/socks/'} src={'/top/img_socks.jpg'} alt="socks" category="Socks" />
          <Category link={'/products/cap/'} src={'/top/img_cap.jpg'} alt="cap" category="Cap" />
        </ul>
      </div>

    </div>
  )
}

export default Home