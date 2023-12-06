import image from './IMG22.jpg';
import './Contact.css'
export const Contact = () => {
  return (
    <footer>
      <div>
        <h1>Let's talk</h1>
        <img className='myPic' srcSet={image} alt="" no-repeat />
        <p>
          Namuun Byambaa
          +41 77 536 76 11
          nnmuunn@gmail.com
        </p>

      </div>
    </footer>
  )
}
