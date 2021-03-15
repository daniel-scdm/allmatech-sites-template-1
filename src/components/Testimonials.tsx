
import { Carousel as GalleryCarousel } from 'react-responsive-carousel';
import Section from 'src/styles/Section.module.css';

const TestimonialsText = [
    {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit erat sed fermentum tincidunt. 
        Nunc nec placerat turpis, sed convallis ante. Morbi hendrerit finibus enim eu ultrices. 
        Donec luctus lacus ornare, suscipit purus sit amet, suscipit ante.`,
        sitation: "Pessoa 1"
    }, {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit erat sed fermentum tincidunt. 
        Nunc nec placerat turpis, sed convallis ante. Morbi hendrerit finibus enim eu ultrices. 
        Donec luctus lacus ornare, suscipit purus sit amet, suscipit ante.`,
        sitation: "Pessoa 2"
    }, {
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit erat sed fermentum tincidunt. 
        Nunc nec placerat turpis, sed convallis ante. Morbi hendrerit finibus enim eu ultrices. 
        Donec luctus lacus ornare, suscipit purus sit amet, suscipit ante.`,
        sitation: "Pessoa 3"
    }
];

const Testimonials : React.FC = () => {
    return (
        <GalleryCarousel
            showThumbs={false}
            showIndicators={false}
            className={Section.testimonialGallery}  
            showStatus={false}            
        >
            {TestimonialsText.map(t => (
                <div className={Section.Testimonial}>
                    <h3>
                        "{t.text}"
                    </h3>
                    <div>
                        - {t.sitation}
                    </div>
                </div>
            ))}
        </GalleryCarousel>
    )
}

export default Testimonials;