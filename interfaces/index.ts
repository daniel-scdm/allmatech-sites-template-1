import React, { ReactChild } from "react";
import { IconBaseProps } from "react-icons";

export type User = {
  id: number
  name: string
}

export type IArticle = { 
  title: string,
  image: string,
  text: string
}

export type IHeaderComponent = {
  logoUrl: string,
  logoWidth: number,
  logoHeight: number,
  bgHeaderColor: string
}

export type IFullSection = {
  children: ReactChild
}

export type IContext = {
  properties: Array<IPropertyXML>,
  setProperties: (carga : Array<IPropertyXML>) => void,
  Articles: Array<IArticle>
}

export type ICardNews = {
  image: string,
  text: string,
  title: string
  indexKey? : string 
}

export type ISearchFormBuy = {
    cityList? : Array<string>,
    streetListBuy? : Array<string>,
    updateStreetBuy? : (value : string) => void,
    streetListRent? : Array<string>,
    updateStreetRent? : (value : string) => void  
}

export type IFilterFormList = {
  propertyList? : Array<IPropertyXML>,
  callbackList : (query : object) => void
}

export type IFilterNewsList = {
  callbackList : (e : React.FormEvent) => void
}

export type ISearchFormRent = {
  cityList? : Array<string> 
}

export type IDropDown = {
  ListOptions? : Array<string>,
  Label : string,
  extraStyles? : object,
  extraDropdownStyles? : object,
  updateSimbling? : (value : string) => void,
  defaultValue? : string,
  onChangeValue : (value: string, key : string) => void,
  selectedValue : string,
  KeyName: string
}

export type IInputText = {
  Label : string,
  nameField: string,
  placeholder: string,
  value: string,
  onChange: (value : string, KeyName : string) => void
}

export type IInputCheck = {
  Label : string,
  nameField: string,
  value: boolean,
  onChange: (KeyName : string) => void
}

export type ISlider = {
  Label : String,
  values: Array<number>,
  onChangeValue : (values : Array<number>) => void,
  errorMessage? : string,
  extraStyles? : object
}

export type IinitValues = {
  buy: boolean,
  code?: string,
  cidade: string,
  bairro: string,
  valores: Array<number>,
  quartos: number,
  banheiros: number,
  garagem: number,
  piscina? : boolean,
  arCondicionado? : boolean,
  seguranca? : boolean
}

export type IAnimatedCatchPhrase = {

}

export type IFeatureComponent = {
    icon: IconBaseProps,
    title: string,
    text: string
}

export type IPartnerComponent = {
    logoImage: string,
    width: number,
    height: number   
}

export type ICard = {
  code? : string,
  image? : string,
  title? : string,
  text? : string,
  bedrooms? : string | number,
  bathrooms? : string | number,
  garages? : string | number,
  indexKey? : string,
  priceSell? : string | number | Array<any>,
  priceRent? : string | number | Array<any>,
  air? : string | number
}

export type IFoto = {
  Legenda: string,
  Link: Array<{
    Tamanho: string,
    URLArquivo: string,
  }>
}

export type IVideo = {
  Legenda: string,
  Link: Array<{
    Tamanho: string,
    URLArquivo: string,
  }>
}

export type IPropertyXML = {
  Cidade? : string,
  AreaServico?: string,
  AreaTotal?: string,
  AreaUtil?: string,
  ArmarioCozinha?: string,
  ArmarioEmbutido?: string,
  Bairro?: string,
  CEP?: string,
  ArCondicionado? : string,
  Piscina? : string,
  Guarita? : string,
  CategoriaImovel?: string,
  Cerca?: string,
  Closet?: string,
  CodigoImovel?: string,
  Complemento?: string,
  Copa?: string,
  DataCadastro?: string | number,
  DataUltimateracao?: string,
  Endereco?: string,
  EstradaAsfaltada?: string,
  EstudaPermuta?: string,
  Fotos?: { Foto: Array<IFoto> },
  Sauna?: string,
  Varanda?: string,
  InfraInternet?: string,
  Interfone?: string,
  Jardim?: string,
  Latitude?: string,
  Lavabo?: string,
  Longitude?: string,
  Numero?: string,
  Observacao?: string,
  PrecoLocacao?: string| Array<any>,
  PrecoLocacaoTemporada?: string| Array<any>,
  PrecoVenda?: string | Array<any>,
  QtdAndar?: string,
  QtdBanheiros?: string,
  QtdDormitorios?: string,
  QtdSalas?: string,
  QtdSuites?: string,
  QtdVagas?: string,
  QuartoWCEmpregada?: string,
  SalaoFestas?: string,
  SubTipoImovel?: string,
  Telefone?: string,
  TipoImovel?: string,
  TipoOferta?: string,
  TituloImovel?: string,
  UF?: string,
  thumbnail? : string,
  features?: Array<string>,
  Videos?: { Foto: Array<IVideo> },
}

export type ICarga = {
  Imoveis: {
    Imovel: Array<IPropertyXML>
  }
}

export type IFeatures = Array<string>;

export type ITeamCard = {
  image? : string,
  name : string,
  cellphone : string,
  linkFB? : string,
  linkLI? : string,
  linkTW? : string,
  linkI? : string,
}


export type INewsCard = {
  image? : string,
  text : string,
  code : number
}

export type IListProperties = {
  List? : Array<IPropertyXML>,
  isLoading: boolean
}

export type IListNews = {
  List? : Array<ICardNews>,
  isLoading: boolean
}

export type IPagination = {
  total : number,
  pageLimit : number,
  pageNeighbours : number,
  onPageChanged : Function
}

export type IPageDetails = {
  currentPage : number,
  pageLimit : number,
  totalPages : number,
  totalRecords : number
}

export type IProperty = {
  OfferMessage? : string,
  image? : string,
  title : string,
  text : string,
  bedrooms : number | string | undefined,
  bathrooms : number | string | undefined,
  garages : number | string | undefined,
  price : number | string | undefined,
  indexKey? : number
}

export type ICarousel = {
  activeModal : boolean,
  setActiveModal : (activeModal : boolean) => void,
  ListPhotos? : Array<object>
}