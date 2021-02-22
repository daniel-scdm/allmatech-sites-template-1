/** @jsx jsx */
import { jsx } from 'theme-ui';

import Section from 'src/styles/Section.module.css';
import ListStyle from 'src/styles/List.module.css';

import Header from "src/components/header";
import AllmatechLogo from  "assets/images/Allmatech-logo-complete.jpeg";

import ListProperties from "src/components/ListProperties";

import PropertyAuthor from "src/components/propertyAuthor";
import FilterFormList from "src/components/FilterFormList";
import Sponsor from "src/components/Sponsor";
import Search from "src/components/Search";

import Footer from "src/components/Footer";

const lista = [
  { 
    image: "https://dunk.brickthemes.com/wp-content/uploads/2020/01/interior-design-house-and-modern-white-kitchen-Z53XFYH-min-470x340.jpg",
    bathrooms: 3,
    bedrooms: 2,
    garages: 4,
    price: 40000,
    text: `Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
    Aliquam necsa pien inleo ultrices tempus sedat justo. 
    Suspen disse molestie adipiscing...`,
    title: `9 Ashmore Way, Sorrento WA 6020`
  },
  { 
    image: "https://dunk.brickthemes.com/wp-content/uploads/2020/01/interior-design-house-and-modern-white-kitchen-Z53XFYH-min-470x340.jpg",
    bathrooms: 3,
    bedrooms: 2,
    garages: 4,
    price: 40000,
    text: `Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
    Aliquam necsa pien inleo ultrices tempus sedat justo. 
    Suspen disse molestie adipiscing...`,
    title: `9 Ashmore Way, Sorrento WA 6020`
  },
  { 
    image: "https://dunk.brickthemes.com/wp-content/uploads/2020/01/interior-design-house-and-modern-white-kitchen-Z53XFYH-min-470x340.jpg",
    bathrooms: 3,
    bedrooms: 2,
    garages: 4,
    price: 40000,
    text: `Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
    Aliquam necsa pien inleo ultrices tempus sedat justo. 
    Suspen disse molestie adipiscing...`,
    title: `9 Ashmore Way, Sorrento WA 6020`
  },
  { 
    image: "https://dunk.brickthemes.com/wp-content/uploads/2020/01/interior-design-house-and-modern-white-kitchen-Z53XFYH-min-470x340.jpg",
    bathrooms: 3,
    bedrooms: 2,
    garages: 4,
    price: 40000,
    text: `Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
    Aliquam necsa pien inleo ultrices tempus sedat justo. 
    Suspen disse molestie adipiscing...`,
    title: `9 Ashmore Way, Sorrento WA 6020`
  },
  { 
    image: "https://dunk.brickthemes.com/wp-content/uploads/2020/01/interior-design-house-and-modern-white-kitchen-Z53XFYH-min-470x340.jpg",
    bathrooms: 3,
    bedrooms: 2,
    garages: 4,
    price: 40000,
    text: `Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
    Aliquam necsa pien inleo ultrices tempus sedat justo. 
    Suspen disse molestie adipiscing...`,
    title: `9 Ashmore Way, Sorrento WA 6020`
  },
  { 
    image: "https://dunk.brickthemes.com/wp-content/uploads/2020/01/interior-design-house-and-modern-white-kitchen-Z53XFYH-min-470x340.jpg",
    bathrooms: 3,
    bedrooms: 2,
    garages: 4,
    price: 40000,
    text: `Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
    Aliquam necsa pien inleo ultrices tempus sedat justo. 
    Suspen disse molestie adipiscing...`,
    title: `9 Ashmore Way, Sorrento WA 6020`
  },
  { 
    image: "https://dunk.brickthemes.com/wp-content/uploads/2020/01/interior-design-house-and-modern-white-kitchen-Z53XFYH-min-470x340.jpg",
    bathrooms: 3,
    bedrooms: 2,
    garages: 4,
    price: 40000,
    text: `Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
    Aliquam necsa pien inleo ultrices tempus sedat justo. 
    Suspen disse molestie adipiscing...`,
    title: `9 Ashmore Way, Sorrento WA 6020`
  },
  { 
    image: "https://dunk.brickthemes.com/wp-content/uploads/2020/01/interior-design-house-and-modern-white-kitchen-Z53XFYH-min-470x340.jpg",
    bathrooms: 3,
    bedrooms: 2,
    garages: 4,
    price: 40000,
    text: `Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
    Aliquam necsa pien inleo ultrices tempus sedat justo. 
    Suspen disse molestie adipiscing...`,
    title: `9 Ashmore Way, Sorrento WA 6020`
  },
  { 
    image: "https://dunk.brickthemes.com/wp-content/uploads/2020/01/interior-design-house-and-modern-white-kitchen-Z53XFYH-min-470x340.jpg",
    bathrooms: 3,
    bedrooms: 2,
    garages: 4,
    price: 40000,
    text: `Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
    Aliquam necsa pien inleo ultrices tempus sedat justo. 
    Suspen disse molestie adipiscing...`,
    title: `9 Ashmore Way, Sorrento WA 6020`
  },
  { 
    image: "https://dunk.brickthemes.com/wp-content/uploads/2020/01/interior-design-house-and-modern-white-kitchen-Z53XFYH-min-470x340.jpg",
    bathrooms: 3,
    bedrooms: 2,
    garages: 4,
    price: 40000,
    text: `Lorem ipsum dolor sit amet, consec tetur adi piscing elit. 
    Aliquam necsa pien inleo ultrices tempus sedat justo. 
    Suspen disse molestie adipiscing...`,
    title: `9 Ashmore Way, Sorrento WA 6020`
  }
];

export default function List() {
  return (
    <>
      <Header 
        logoUrl={AllmatechLogo}
        logoHeight={40}
        logoWidth={190}  
        bgHeaderColor={"#f9f9f9"}      
      />

      <section className={Section.container}>
          <div className={ListStyle.content}>
            <main>
              <ListProperties 
                List={lista}
                pageNumber={1}
                total={200}
                totalPages={20}
              />
            </main>
            <aside>
                <PropertyAuthor />
                <FilterFormList />
                <Sponsor />
                <Search />
            </aside>
          </div>          
      </section>
      
      <Footer />
    </>    
  )
}