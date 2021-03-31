import { IPropertyXML } from "interfaces";

export const useFilter = () => {

    const getPropertyByCode = (properties : Array<IPropertyXML>, code: string) => {
        const f = properties.filter((p : IPropertyXML) => p.CodigoImovel === code);

        if(f.length > 0) {
            return f[0];
        }

        return null;
    }

    const isZero = (value : string) => {
        const numberValue = parseInt(value);

        if (numberValue === 0) {
            return true;
        }

        return false;
    }

    const filterTypeVenda = (value : IPropertyXML) => {
        if(value.PrecoVenda && value.PrecoVenda) {
            return true;
        }
    }

    const filterTypeLocacao = (value : IPropertyXML) => {
        if(value.PrecoLocacao && value.PrecoLocacao) {
            return true;
        }
    }

    const makeNewPropertyList = (properties : Array<IPropertyXML>, filterOptions : object) => {
            let propertiesArrayFiltered = properties;
            let isVenda = true;

            Object.values(filterOptions).forEach((value) => {
                const keyValue = Object.keys(value);
                switch (keyValue[0]) {
                    case "tipoImovel":
                        if(value["tipoImovel"]) {
                            isVenda = true;
                            propertiesArrayFiltered = propertiesArrayFiltered.filter(filterTypeVenda);
                        } else {
                            isVenda = false;
                            propertiesArrayFiltered = propertiesArrayFiltered.filter(filterTypeLocacao);
                        }    
                        
                        break;
                    case "cidade":

                        propertiesArrayFiltered = propertiesArrayFiltered.filter(property => property.Cidade === value['cidade']);
                        break;

                    case "bairro":
                    
                        propertiesArrayFiltered = propertiesArrayFiltered.filter(property => property.Bairro === value['bairro']);
                        break;
    
                    case "banheiros":

                        if(!isZero(value['banheiros'])) {
                            propertiesArrayFiltered = propertiesArrayFiltered.filter(property => {
                                if(property.QtdBanheiros && property.QtdBanheiros){
                                    return parseInt(property.QtdBanheiros) >= parseInt(value['banheiros']);
                                }
                            });
                        }
    
                        break;
                    
                    case "garagem":

                        if(!isZero(value['garagem'])) {
                            propertiesArrayFiltered = propertiesArrayFiltered.filter(property => {
                                if(property.QtdVagas && property.QtdVagas){
                                    return parseInt(property.QtdVagas) >= parseInt(value['garagem']);
                                }
                            });
                        }                       

                        break;

                    case "quartos":

                        if(!isZero(value['quartos'])) {
                            propertiesArrayFiltered = propertiesArrayFiltered.filter(property => {
                                if(property.QtdSuites && property.QtdSuites){
                                    return parseInt(property.QtdSuites) >= parseInt(value['quartos']);
                                }
                            });
                        }   

                        break; 
                    case "valores":

                        if(isVenda) {
                            propertiesArrayFiltered = propertiesArrayFiltered.filter(property => {
                                if(property.PrecoVenda && property.PrecoVenda && !Array.isArray(property.PrecoVenda)){
                                    const entreValores = parseInt(value['valores'][1]) >= parseInt(property.PrecoVenda) && parseInt(property.PrecoVenda) >= parseInt(value['valores'][0]);
                                    return entreValores;
                                }
                            });
                        } else {
                            propertiesArrayFiltered = propertiesArrayFiltered.filter(property => {
                                if(property.PrecoLocacao && property.PrecoLocacao && !Array.isArray(property.PrecoLocacao)){
                                    const entreValores = parseInt(value['valores'][1]) >= parseInt(property.PrecoLocacao) && parseInt(property.PrecoLocacao) >= parseInt(value['valores'][0]);
                                    return entreValores;
                                }
                            });
                        }                       

                        break;
                    default:
                        break;
                }

            });

            return propertiesArrayFiltered;
    }

    const filterProperties = (properties : Array<IPropertyXML>, filterOptions : object) => {

        const removeEmpty = (value : any) => value !== undefined;

        const Filter = Object.entries(filterOptions).map((entries : Array<any>) => {
            switch(entries[0]) {
                case "cidade": 
                    if(entries[1] !== "" && entries[1] !== "Todos") {
                        return { [entries[0]]: entries[1] }
                    }
                    break;
                case "bairro": 
                    if(entries[1] !== "" && entries[1] !== "Todos") {
                        return { [entries[0]]: entries[1] }
                    }
                    break;
                case "banheiros": 
                    if(entries[1] !== 0) {
                        return { [entries[0]]: entries[1] }
                    }
                    break;
                case "garagem": 
                    if(entries[1] !== 0) {
                        return { [entries[0]]: entries[1] }
                    }
                    break;
                case "quartos": 
                    if(entries[1] !== 0) {
                        return { [entries[0]]: entries[1] }
                    }
                    break;
                case "valores":               
                    return { [entries[0]]: entries[1] }
                case "buy": 
                    return { tipoImovel: (entries[1] === "true" || entries[1] === true) }
                default: 
                break;
            }
            
        }).filter(removeEmpty);

        const propertyList = makeNewPropertyList(properties, Filter);

        return Object.values(propertyList);

    }

    const filterUnique = (value : any, index : number, self : any) => self.indexOf(value) === index && value !== undefined;

    const filterUndefined = (value : string | undefined) => {
        if(value !== undefined) {
            return value;
        }
    };


    const extractCity = (Imoveis : Array<IPropertyXML>) => {
        const mappedCities = Imoveis.map(imovel => {
          if(imovel && imovel.Cidade)
            return imovel.Cidade;
  
        });
  
        const filteredRepeatedCities : Array<string | undefined> = mappedCities.filter(filterUnique);

        const filteredCities : Array<any> = filteredRepeatedCities.map(filterUndefined);

        return filteredCities;        
    }

    return { filterProperties, getPropertyByCode, extractCity, filterUnique, makeNewPropertyList }
}