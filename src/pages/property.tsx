/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from "react";

import Section from 'src/styles/Section.module.css';
import property from 'src/styles/Property.module.css';

import Header from "src/components/header";
import AllmatechLogo from  "assets/images/Allmatech-logo-complete.jpeg";

import PropertyAuthor from "src/components/propertyAuthor";
import FilterFormList from "src/components/FilterFormList";
import Sponsor from "src/components/Sponsor";
import Search from "src/components/Search";

import PropertyContainer from "src/components/PropertyContainer";

import { useRouter } from 'next/router';
import { useFilter } from "src/hooks/useFilter";
import { useFetch } from "src/hooks/useFetch";

import { FaHouseDamage } from "react-icons/fa";

import { IPropertyXML } from "interfaces";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import Footer from "src/components/Footer";

function Property() {

  const { parsedXml, state } = useFetch();
  const { query } = useRouter();

  const { getPropertyByCode } = useFilter();
  const [prt, setPrt] = useState<IPropertyXML | null>(null);
  const [features, setFeatures] = useState<Array<string>>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(state === "done") {
        const { code } = query;
        const p = getPropertyByCode(parsedXml.Carga.Imoveis.Imovel, code);
        extractFeatures(p);
        setPrt(p);
        setIsLoading(false); 
    }     
  }, [state]);

  const extractFeatures = (property : IPropertyXML) => {
      if(property.AreaServico) pushArray("Área de serviço");
      if(property.Sauna) pushArray("Sauna");
      if(property.Varanda) pushArray("Varanda");
      if(property.Jardim) pushArray("Jardim");
      if(property.QuartoWCEmpregada) pushArray("Quarto de empregada");
      if(property.InfraInternet) pushArray("Infraestrutura de Internet");
  }

  const pushArray = (ft : string) => {
    let aux = features;
    aux.push(ft);
    setFeatures(aux);
  }

  const handlePropertyLoading = () => {
    if(state != "done" && !prt && !isLoading) {
      return (
          <SkeletonTheme color="#ddd" highlightColor="#ccc">
              <div className={property.skeletonContainer}>
                  <Skeleton className={property.skeletonImage} />
                  <Skeleton className={property.skeletonBody} />
                  <Skeleton className={property.skeletonMessage} />
              </div>
          </SkeletonTheme>
      );
    }

    if(state === "done" && !prt && !isLoading) {
      return (
        <div className={property.emptyProperty}>
            <div>
              <FaHouseDamage />
            </div>
            <h3>
              Imovel não encontrado.
            </h3>
        </div>
      );
    }

    return (
      <PropertyContainer 
        Cidade={{ _text: "" }}
        QtdBanheiros={prt?.QtdBanheiros}
        QtdDormitorios={prt?.QtdBanheiros}
        QtdVagas={prt?.QtdVagas}
        PrecoLocacao={prt?.PrecoLocacao}
        PrecoVenda={prt?.PrecoVenda}
        Observacao={prt?.Observacao}
        TituloImovel={prt?.TipoImovel}
        CodigoImovel={prt?.CodigoImovel}
        Fotos={prt?.Fotos}
        thumbnail={prt?.Fotos?.Foto[0].Link[1].URLArquivo._text}    
        features={features}
      />
    );
  }

  return (
    <>
      <Header 
        logoUrl={AllmatechLogo}
        logoHeight={40}
        logoWidth={190}  
        bgHeaderColor={"#f9f9f9"}      
      />

      <section className={Section.container}>          
          <div className={property.content}>
            <main>
                {handlePropertyLoading()}
            </main>
            <aside>
                <PropertyAuthor />
                <FilterFormList 
                  callbackList={() => {}}
                />
                <Sponsor />
                <Search />
            </aside>
          </div>           
      </section>
      
      <Footer />
    </>    
  )
}

export default Property;