import WhatsappIcon from '../assets/whatsapp_icon.jsx'
import MetaIcon from '../assets/meta_icon.jsx'
import '../styles/initView.css'
function InitView() {
  return (
    <section className='initView__container'>
      <WhatsappIcon/>
      <footer className='initView__footer'>
        <p className='footer__p'>from</p>
        <div className='footer__meta'>
          <MetaIcon/>
          <h1 className='meta__text'>Meta</h1>
        </div>
      </footer>
    </section>
  )
}
export default InitView
