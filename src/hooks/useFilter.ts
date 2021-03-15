import { IPropertyXML } from "interfaces";

export const useFilter = () => {

    const getPropertyByCode = (properties : Array<IPropertyXML>, code: string) => {
        const f = properties.filter((p : IPropertyXML) => p.CodigoImovel?._text === code);

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
        if(value.PrecoVenda && value.PrecoVenda._text) {
            return true;
        }
    }

    const filterTypeLocacao = (value : IPropertyXML) => {
        if(value.PrecoLocacao && value.PrecoLocacao._text) {
            return true;
        }
    }

    const makeNewPropertyList = (properties : Array<IPropertyXML>, filterOptions : object) => {
            let propertiesArrayFiltered = properties;
            console.log(filterOptions)

            Object.values(filterOptions).forEach((value) => {
                const keyValue = Object.keys(value);
                switch (keyValue[0]) {
                    case "tipoImovel":
                        if(value["tipoImovel"] || value["tipoImovel"] === "true") {
                            propertiesArrayFiltered = propertiesArrayFiltered.filter(filterTypeVenda);
                        } else {
                            propertiesArrayFiltered = propertiesArrayFiltered.filter(filterTypeLocacao);
                            console.log(propertiesArrayFiltered)
                        }    
                        
                        break;
                    case "cidade":

                        propertiesArrayFiltered = propertiesArrayFiltered.filter(property => property.Cidade?._text === value['cidade']);
                        break;

                    case "bairro":
                    
                        propertiesArrayFiltered = propertiesArrayFiltered.filter(property => property.Bairro?._text === value['bairro']);
                        break;
    
                    case "banheiros":

                        if(!isZero(value['banheiros'])) {
                            propertiesArrayFiltered = propertiesArrayFiltered.filter(property => {
                                if(property.QtdBanheiros && property.QtdBanheiros._text){
                                    return parseInt(property.QtdBanheiros._text) >= parseInt(value['banheiros']);
                                }
                            });
                        }
    
                        break;
                    
                    case "garagem":

                        if(!isZero(value['garagem'])) {
                            propertiesArrayFiltered = propertiesArrayFiltered.filter(property => {
                                if(property.QtdVagas && property.QtdVagas._text){
                                    return parseInt(property.QtdVagas._text) >= parseInt(value['garagem']);
                                }
                            });
                        }                       

                        break;

                    case "quartos":

                        if(!isZero(value['quartos'])) {
                            propertiesArrayFiltered = propertiesArrayFiltered.filter(property => {
                                if(property.QtdSuites && property.QtdSuites._text){
                                    return parseInt(property.QtdSuites._text) >= parseInt(value['quartos']);
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
                    return { tipoImovel: entries[1] }
                default: 
                break;
            }
            
        }).filter(removeEmpty);

        const propertyList = makeNewPropertyList(properties, Filter);

        return Object.values(propertyList);

    }

    const filterUnique = (value : any, index : number, self : any) => self.indexOf(value) === index && value !== undefined;

    const extractCity = (Imoveis : Array<IPropertyXML>) => {
        const mappedCities = Imoveis.map(imovel => {
          if(imovel && imovel.Cidade)
            return imovel.Cidade._text;
  
        });
  
        const filteredCities : Array<string | undefined> = mappedCities.filter(filterUnique);
        return filteredCities;        
    }

    return { filterProperties, getPropertyByCode, extractCity, filterUnique, makeNewPropertyList }
}