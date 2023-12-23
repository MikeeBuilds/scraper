import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const heroImages = [
    { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch'},
    { imgUrl: '/assets/images/hero-1.svg', alt: 'bag'},
    { imgUrl: '/assets/images/hero-1.svg', alt: 'lamp'},
    { imgUrl: '/assets/images/hero-1.svg', alt: 'air fryer'},
    { imgUrl: '/assets/images/hero-1.svg', alt: 'chair'},

]

const HeroCarousel = () => {
    return (
        <div>
            <Carousel
            
            >
                {heroImages.map((image) => (
                    <div key={index}>
                        <img src={image.imgUrl} alt={image.alt} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default HeroCarousel