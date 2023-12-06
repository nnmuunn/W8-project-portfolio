import image from './IMG22.jpg';
import './Header.css'

export const Header = () => {

    return (
        <section className='header'>
            <div className='headerContent'>
                <p className='name'>Hi, I am Namuun Byambaa</p>
                <h1 className='front'>Frontend Developer</h1>
                <div className='clearFix'>
                    <img className="pic" srcSet={image} alt="A smiling image of Namuun Byambaa in front of green leaves" />
                    <p className='aboutMe'>Sara is an exceptional developer known for her innovative solutions and exceptional coding abilities. She creates user-friendly applications and solves complex issues with ease. Her drive for excellence makes her a valuable asset to any project and a standout in the technology field.</p>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="68" viewBox="0 0 29 68" fill="none">
                <path d="M24 23.5L14.5 33M14.5 33L5 23.5M14.5 33L14.5 3" stroke="#FF4575" strokeWidth="6" strokeLinecap="square" strokeLinejoin="round" />
            </svg>
        </section>
    )
}


