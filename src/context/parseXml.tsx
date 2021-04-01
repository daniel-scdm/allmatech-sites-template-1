import { createContext, useContext } from 'react';
import { useFetch } from "src/hooks/useFetch";
import { IArticle, IPropertyXML } from "interfaces";

const Articles : Array<IArticle> = [
  {
    title: "Lorem ipsum dolor sit amet",
    image: "https://th.bing.com/th/id/R7a9d4c8bdbfbc0840d1f5819bc1ac0ad?rik=k%2bXxclSTi8Zaeg&riu=http%3a%2f%2fwww.interiorexteriorplan.com%2fwp-content%2fuploads%2f2011%2f08%2fLuxurious-Modern-House-Exterior-Design.jpg&ehk=HhrevJYwdLZAsbRBq8Y%2b1IXBTHeYMiHdI1JR5jhTAvs%3d&risl=&pid=ImgRaw",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere semper tellus, 
    sed gravida diam viverra sit amet. Vestibulum malesuada blandit tellus. Vestibulum pretium mattis rhoncus. 
    Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Nullam at arcu fringilla, vehicula arcu vel, pretium elit. 
    Sed consequat sapien et metus tempus commodo. Proin vel gravida turpis. 
    Mauris sapien mi, dignissim sit amet nisi ac, laoreet rutrum turpis.`
  },
  {
    title: "Lorem ipsum dolor sit amet",
    image: "https://th.bing.com/th/id/R7a9d4c8bdbfbc0840d1f5819bc1ac0ad?rik=k%2bXxclSTi8Zaeg&riu=http%3a%2f%2fwww.interiorexteriorplan.com%2fwp-content%2fuploads%2f2011%2f08%2fLuxurious-Modern-House-Exterior-Design.jpg&ehk=HhrevJYwdLZAsbRBq8Y%2b1IXBTHeYMiHdI1JR5jhTAvs%3d&risl=&pid=ImgRaw",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere semper tellus, 
    sed gravida diam viverra sit amet. Vestibulum malesuada blandit tellus. Vestibulum pretium mattis rhoncus. 
    Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Nullam at arcu fringilla, vehicula arcu vel, pretium elit. 
    Sed consequat sapien et metus tempus commodo. Proin vel gravida turpis. 
    Mauris sapien mi, dignissim sit amet nisi ac, laoreet rutrum turpis.`
  },
  {
    title: "Lorem ipsum dolor sit amet",
    image: "https://th.bing.com/th/id/R7a9d4c8bdbfbc0840d1f5819bc1ac0ad?rik=k%2bXxclSTi8Zaeg&riu=http%3a%2f%2fwww.interiorexteriorplan.com%2fwp-content%2fuploads%2f2011%2f08%2fLuxurious-Modern-House-Exterior-Design.jpg&ehk=HhrevJYwdLZAsbRBq8Y%2b1IXBTHeYMiHdI1JR5jhTAvs%3d&risl=&pid=ImgRaw",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere semper tellus, 
    sed gravida diam viverra sit amet. Vestibulum malesuada blandit tellus. Vestibulum pretium mattis rhoncus. 
    Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Nullam at arcu fringilla, vehicula arcu vel, pretium elit. 
    Sed consequat sapien et metus tempus commodo. Proin vel gravida turpis. 
    Mauris sapien mi, dignissim sit amet nisi ac, laoreet rutrum turpis.`
  },
  {
    title: "Lorem ipsum dolor sit amet",
    image: "https://th.bing.com/th/id/R7a9d4c8bdbfbc0840d1f5819bc1ac0ad?rik=k%2bXxclSTi8Zaeg&riu=http%3a%2f%2fwww.interiorexteriorplan.com%2fwp-content%2fuploads%2f2011%2f08%2fLuxurious-Modern-House-Exterior-Design.jpg&ehk=HhrevJYwdLZAsbRBq8Y%2b1IXBTHeYMiHdI1JR5jhTAvs%3d&risl=&pid=ImgRaw",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere semper tellus, 
    sed gravida diam viverra sit amet. Vestibulum malesuada blandit tellus. Vestibulum pretium mattis rhoncus. 
    Interdum et malesuada fames ac ante ipsum primis in faucibus. 
    Nullam at arcu fringilla, vehicula arcu vel, pretium elit. 
    Sed consequat sapien et metus tempus commodo. Proin vel gravida turpis. 
    Mauris sapien mi, dignissim sit amet nisi ac, laoreet rutrum turpis.`
  }
];

const initContext = {
  state: "",
  parsedXml: {    
    Imoveis: {
      Imovel: [] as IPropertyXML[]
    }
  },
  _fetchData: () => {},
  Articles
}

const AppContext = createContext(initContext);

export function AppWrapper({ children } : any) {
  const { parsedXml, state, _fetchData } = useFetch();
  
  if(parsedXml) {
    const data = {
      state,
      parsedXml,
      _fetchData,
      Articles
    }

    return (
      <AppContext.Provider value={data}>
        {children}
      </AppContext.Provider>
    );
  }

  return (
    <AppContext.Provider value={initContext}>
        {children}
      </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}