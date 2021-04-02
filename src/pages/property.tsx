/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect, useState } from "react";
import { useAppContext } from "src/context/parseXml";

import Section from 'src/styles/Section.module.css';
import property from 'src/styles/Property.module.css';

import Header from "src/components/header";

import dynamic from "next/dynamic";

import { useRouter } from 'next/router';
import { useFilter } from "src/hooks/useFilter";
import { useFetch } from "src/hooks/useFetch";

import { FaHouseDamage } from "react-icons/fa";

import { IContext, IPropertyXML } from "interfaces";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

import Footer from "src/components/Footer";

const LazyPropertyComponent = dynamic(
  () => import("src/components/PropertyContainer"),
  { 
    loading: ({ error }) => {
      if(error) {
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
        <SkeletonTheme color="#ddd" highlightColor="#ccc">
            <div className={property.skeletonContainer}>
                <Skeleton className={property.skeletonImage} />
                <Skeleton className={property.skeletonBody} />
                <Skeleton className={property.skeletonMessage} />
            </div>
        </SkeletonTheme>
      );      
  },
  ssr: false
}
);

function Property() {

  const app : IContext = useAppContext();

  const { query } = useRouter();
  const { getPropertyByCode } = useFilter();
  const { _fetchData } = useFetch();

  const [prt, setPrt] = useState<IPropertyXML | null>(null);
  const [features, setFeatures] = useState<Array<string>>([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    if(app.properties.length === 0) {
      init();
    } else {
      handleQuery();
    }
    
  }, [app.properties]);

  const init = async () => {

      const res = await _fetchData();

      if(res && res.Imoveis) {
        app.setProperties(res.Imoveis.Imovel);  

        handleQuery();
      }            
  }

  const handleQuery = () => {
    const { code } = query;

    if(typeof code === "string") {
      const p = getPropertyByCode(app.properties, code);
      extractFeatures(p);
      setPrt(p);
    }

  }

  const extractFeatures = (property : IPropertyXML | null) => {
    if(property) {
      if(property.AreaServico) pushArray("Área de serviço");
      if(property.Sauna) pushArray("Sauna");
      if(property.Guarita) pushArray("Guarita");
      if(property.Varanda) pushArray("Varanda");
      if(property.Jardim) pushArray("Jardim");
      if(property.QuartoWCEmpregada) pushArray("Quarto de empregada");
      if(property.InfraInternet) pushArray("Infraestrutura de Internet");
    }      
  }

  const pushArray = (ft : string) => {
    let aux = features;
    aux.push(ft);
    setFeatures(aux);
  }

  return (
    <>
      <Header 
          logoUrl={"public/images/Allmatech-logo-complete.jpeg"}
          logoHeight={40}
          logoWidth={190}  
          bgHeaderColor={"#f9f9f9"}      
      />
      <section className={Section.container}>          
          <div className={property.content}>
            <main>
              <LazyPropertyComponent 
                  Cidade={""}
                  QtdBanheiros={prt?.QtdBanheiros}
                  QtdDormitorios={prt?.QtdDormitorios}
                  QtdVagas={prt?.QtdVagas}
                  PrecoLocacao={prt ? prt.PrecoLocacao : ""}
                  PrecoVenda={prt ? prt.PrecoVenda : ""}
                  Observacao={prt?.Observacao}
                  TituloImovel={prt?.TipoImovel}
                  CodigoImovel={prt?.CodigoImovel}
                  Piscina={prt?.Piscina}
                  Guarita={prt?.Guarita}
                  ArCondicionado={prt?.ArCondicionado}
                  Fotos={prt?.Fotos}
                  thumbnail={prt?.Fotos?.Foto[0].Link[1].URLArquivo}    
                  features={features}
              />
            </main>
          </div>           
      </section>
      
      <Footer />
    </>    
  )
}

export default Property;