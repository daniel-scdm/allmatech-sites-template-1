import { IPropertyXML, IFilterOptions } from "interfaces";

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
        if(typeof value.PrecoVenda === 'string') {
            return true;
        }
    }

    const filterTypeLocacao = (value : IPropertyXML) => {
        if(typeof value.PrecoLocacao === 'string') {
            return true;
        }
    }

    const filterValues = (isVenda : string | boolean, propertiesArrayFiltered : Array<IPropertyXML>, value : Array<number | string>) => {

        if(isVenda) {
            propertiesArrayFiltered = propertiesArrayFiltered.filter(property => {
                if(typeof property.PrecoVenda === 'string'){
                    const entreValores = value[1] >= parseInt(property.PrecoVenda) && parseInt(property.PrecoVenda) >= value[0];
                    return entreValores;
                }
            });

            return propertiesArrayFiltered;
        }

        propertiesArrayFiltered = propertiesArrayFiltered.filter(property => {
            if(typeof property.PrecoLocacao === 'string'){
                const entreValores = value[1] >= parseInt(property.PrecoLocacao) && parseInt(property.PrecoLocacao) >= value[0];
                return entreValores;
            }
        });

        return propertiesArrayFiltered;
    }

    const makeNewPropertyList = (properties : Array<IPropertyXML>, filterOptions : IFilterOptions) => {
            let propertiesArrayFiltered = properties;
            let isVenda = true;

            Object.keys(filterOptions).forEach(k => {

                if(k === "tipoImovel") {
                    const typeFilter = (filterOptions[k] === "true" || filterOptions[k] === true);

                    if(typeFilter) {
                        isVenda = true;
                        propertiesArrayFiltered = propertiesArrayFiltered.filter(filterTypeVenda);
                    } else {
                        isVenda = false;
                        propertiesArrayFiltered = propertiesArrayFiltered.filter(filterTypeLocacao);
                    }

                    return;
                }

                if(k === "valores") {
                    propertiesArrayFiltered = filterValues(isVenda, propertiesArrayFiltered, filterOptions[k]);
                    return;
                }

                if(k === "area") {
                    propertiesArrayFiltered = propertiesArrayFiltered.filter(
                        property => {
                            if(typeof property.AreaUtil === 'string'){
                                const entreValores = filterOptions[k][1] >= parseInt(property.AreaUtil, 10) && parseInt(property.AreaUtil, 10) >= filterOptions[k][0];
                                return entreValores;
                            }
                    })

                    return;
                }

                if(k === "code") {
                    const upperCaseCode = filterOptions[k].toUpperCase().trim();
                    const rg = new RegExp(upperCaseCode);
                    propertiesArrayFiltered = propertiesArrayFiltered.filter(property => rg.test(property?.CodigoImovel));

                    return;
                }

                if(k === "cidade") {
                    propertiesArrayFiltered = propertiesArrayFiltered.filter(property => property.Cidade === filterOptions[k]);
                    return;
                }

                if(k === "bairro") {
                    propertiesArrayFiltered = propertiesArrayFiltered.filter(property => property.Bairro === filterOptions[k]);
                    return;
                }

                if(k === "tipo") {
                    propertiesArrayFiltered = propertiesArrayFiltered.filter(property => property.TipoImovel === filterOptions[k]);
                    return;
                }

                if(k === "quartos") {
                    if(!isZero(filterOptions[k])) {
                        propertiesArrayFiltered = propertiesArrayFiltered.filter(property => {
                            if(property.QtdDormitorios && property.QtdDormitorios){
                                return parseInt(property.QtdDormitorios, 10) >= parseInt(filterOptions[k], 10);
                            }
                        });
                    }

                    return;
                }

                if(k === "banheiros") {
                    if(!isZero(filterOptions[k])) {
                        propertiesArrayFiltered = propertiesArrayFiltered.filter(property => {
                            if(property.QtdBanheiros && property.QtdBanheiros){
                                return parseInt(property.QtdBanheiros) >= parseInt(filterOptions[k]);
                            }
                        });
                    }

                    return;
                }

                if(k === "garagem") {
                    if(!isZero(filterOptions[k])) {
                        propertiesArrayFiltered = propertiesArrayFiltered.filter(property => {
                            if(property.QtdVagas && property.QtdVagas){
                                return parseInt(property.QtdVagas) >= parseInt(filterOptions[k]);
                            }
                        });
                    }

                    return;
                }

                if(k === "arCondicionado") {
                    propertiesArrayFiltered = propertiesArrayFiltered.filter(property => property.ArCondicionado === '1');
                }

                if(k === "piscina") {
                    propertiesArrayFiltered = propertiesArrayFiltered.filter(property => property.Piscina === '1');
                }

                if(k === "seguranca") {
                    propertiesArrayFiltered = propertiesArrayFiltered.filter(property => property.Guarita === '1');
                }

            });

            return propertiesArrayFiltered;
    }

    const filterProperties = (properties : Array<IPropertyXML>, filterObj : IFilterOptions) => {

        let filterOptions = filterObj;

        Object.keys(filterOptions).forEach((k : string) => {
            if(k === "tipoImovel") return;

            if(!filterOptions[k] || filterOptions[k] === "0") {
                delete filterOptions[k]; // remover chave do obj se o valor for 0 ou "" ou '0'

                return;
            }

            if(
                filterOptions[k] === "Todos os bairros" || 
                filterOptions[k] === "Todas as cidades" || 
                filterOptions[k] === "Todos os tipos"
            ) {
                delete filterOptions[k];

                return;
            }

        });

        const propertyList = makeNewPropertyList(properties, filterOptions);

        return propertyList;
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

/**
 * 
 * 
 */