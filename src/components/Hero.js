import './Hero.css';
import Button from './Button';
import backgroundVideo from '../img/hero_video.mp4';

function Hero() {
    return(
        <section>
            <video autoPlay muted loop id="heroVideo">
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <h1 className="heading">Join The<br />Collective</h1>
            <p>NFT's with purpose</p>
            <Button />
        </section>
    )
}

export default Hero;