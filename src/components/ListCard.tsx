/** @jsx jsx */
import { jsx } from 'theme-ui'

import { FC } from 'react';
import { IPropertyXML } from "interfaces/index";
import property from "src/styles/Property.module.css";

import Link from "next/link";

import { GiHomeGarage, GiBathtub, GiPersonInBed, GiSnowflake1, GiPoolDive, GiSecurityGate } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import SuspenseImage from "src/components/SuspenseImage";

const ListCard : FC<IPropertyXML> = ({ 
    CodigoImovel, 
    QtdBanheiros, 
    AreaUtil, 
    QtdDormitorios, 
    QtdVagas, 
    thumbnail, 
    UF, 
    Cidade, 
    TipoImovel, 
    ValorIPTU, 
    Endereco, 
    TituloImovel, 
    PrecoVenda, 
    AreaTotal, 
    PrecoLocacao, 
    ArCondicionado, 
    Piscina, 
    Guarita 
}) => {

    const numberWithCommas = (x : string | number) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",00";
    }

    return (        
        <div className={property.listCard} sx={{ backgroundColor: "bgCard" }}>
            <div className={property.imageCardContainer}>   
                <SuspenseImage
                    className={property.missingImageCard}
                    src={thumbnail}
                    alt="Thumbnail"
                />
                <Link href={{
                    pathname: "/property",
                    query: { code: CodigoImovel }
                }}>
                    <a>
                        <BiSearch  size={40}/>
                    </a>
                </Link>

            </div>
            <div className={property.cardInfo}>
                <p sx={{ color: "title" }}>
                    {TituloImovel ? TituloImovel : "Título não definido"}
                </p>

                <h4 sx={{ color: "primary" }}>
                    {Endereco}, {Cidade} - {UF}
                </h4>

                <div className={property.areas}>
                    <span sx={{ fontSize: "1.2rem" }}>
                        Área total: {AreaTotal ? `${AreaTotal} m²` : "Não definida"}
                    </span>

                    <span sx={{ fontSize: "1.12rem" }}>
                        Área util: {AreaUtil ? `${AreaUtil} m²` : "Não definida"}
                    </span>
                </div>

                    <span sx={{ paddingTop: ".5rem" }}>{TipoImovel}</span>

                    <div className={property.cardFeatures} sx={{ color: "text" }}>
                        <div>
                            <GiPersonInBed size={38} title="Quartos"/> <span>{typeof QtdDormitorios === "string" ? QtdDormitorios : 0} </span>
                        </div>
                        <div>
                            <GiBathtub size={32} title="Banheiros"/> <span>{typeof QtdBanheiros === "string" ? QtdBanheiros : 0}</span>
                        </div>
                        <div className={property.garages}>
                            <GiHomeGarage size={32} title="Vagas"/> <span>{typeof QtdVagas === "string" ? QtdVagas : 0}</span>
                        </div>

                        {ArCondicionado && (
                            <div className={property.garages}>
                                <GiSnowflake1 size={32} title="Ar condicionado"/>
                            </div>
                        )}

                        {Piscina && (
                            <div className={property.garages}>
                                <GiPoolDive size={32} title="Piscina"/>
                            </div>
                        )}

                        {Guarita && (
                            <div className={property.garages}>
                                <GiSecurityGate size={32} title="Guarita"/>
                            </div>
                        )}

                    </div>
                    <div className={property.cardPrice}>
                        {(PrecoVenda && typeof PrecoVenda === "string") && <span sx={{ color: "spotlight" }}>Venda: R$ {numberWithCommas(PrecoVenda)}</span>}

                        {(ValorIPTU && typeof ValorIPTU === "string") && <span sx={{ color: "spotlight" }}>IPTU: R$ {numberWithCommas(ValorIPTU)}</span>}

                        {(PrecoLocacao && typeof PrecoLocacao === "string") && <span sx={{ color: "spotlight" }}>Aluguel: R$ {numberWithCommas(PrecoLocacao)}</span>}
                    </div>

                
            </div>
        </div>
    );
}

export default ListCard;