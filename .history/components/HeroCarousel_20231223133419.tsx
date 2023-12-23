import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

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
              autoPlay
              infiniteLoop
              
            >
                {heroImages.map((image) => (
                    <Image 
                      src={image.imgUrl}
                      alt={image.alt}
                      width={484}
                      height={484}
                      className="object-contain"
                      key={image.alt}
                    />
                ))}
            </Carousel>
        </div>
    )
}

export default HeroCarousel