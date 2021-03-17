
import { Carousel as GalleryCarousel } from 'react-responsive-carousel';
import Section from 'src/styles/Section.module.css';

const TestimonialsText = [
    {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit erat sed fermentum tincidunt. 
        Nunc nec placerat turpis, sed convallis ante. Morbi hendrerit finibus enim eu ultrices. 
        Donec luctus lacus ornare, suscipit purus sit amet, suscipit ante.`,
        citation: "Pessoa 1"
    }, {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit erat sed fermentum tincidunt. 
        Nunc nec placerat turpis, sed convallis ante. Morbi hendrerit finibus enim eu ultrices. 
        Donec luctus lacus ornare, suscipit purus sit amet, suscipit ante.`,
        citation: "Pessoa 2"
    }, {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit erat sed fermentum tincidunt. 
        Nunc nec placerat turpis, sed convallis ante. Morbi hendrerit finibus enim eu ultrices. 
        Donec luctus lacus ornare, suscipit purus sit amet, suscipit ante.`,
        citation: "Pessoa 3"
    }
];

const Testimonials : React.FC = () => {
    return (
        <GalleryCarousel
            showThumbs={false}
            showIndicators={false}
            className="testimonial-gallery"  
            showStatus={false}     
            autoPlay
            infiniteLoop
            dynamicHeight
            transitionTime={1000}
            interval={6000}
            showArrows={false}      
        >
            {TestimonialsText.map(t => (
                <div className={Section.Testimonial} key={t.citation}>
                    <h3>
                        "{t.text}"
                    </h3>
                    <div>
                        - {t.citation}
                    </div>
                </div>
            ))}
        </GalleryCarousel>
    )
}

export default Testimonials;