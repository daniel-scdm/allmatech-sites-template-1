import { ReactChild } from "react";
import { IconBaseProps } from "react-icons";

export type User = {
  id: number
  name: string
}

export type IHeaderComponent = {
  logoUrl: string,
  logoWidth: number,
  logoHeight: number,
  bgHeaderColor: string
}

export type IFullSection = {
  bgImage: string,
  children: ReactChild
}

export type IContext = {
  state: string,
  parsedXml: ICarga,
  _fetchData: () => void
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

export type ISlider = {
  Label : String,
  values: Array<number>,
  onChangeValue : (values : Array<number>) => void,
  errorMessage? : string,
  extraStyles? : object
}

export type IinitValues = {
  buy: boolean,
  cidade: string,
  bairro: string,
  valores: Array<number>,
  quartos: number,
  banheiros: number,
  garagem: number
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
  OfferMessage? : string,
  image? : string,
  title? : string,
  text? : string,
  bedrooms? : string | number,
  bathrooms? : string | number,
  garages? : string | number,
  indexKey? : string,
  priceSell? : string | number,
  priceRent? : string | number
}

export type IFoto = {
  Legenda: { _text: string },
  Link: Array<{
    Tamanho: { _text: string },
    URLArquivo: { _text: string }
  }>
}

export type IVideo = {
  Legenda: { _text: string },
  Link: Array<{
    Tamanho: { _text: string },
    URLArquivo: { _text: string }
  }>
}

export type IPropertyXML = {
  AreaServico?: { _text: string }
  AreaTotal?: {_text: string}
  AreaUtil?: {_text: string}
  ArmarioCozinha?: {_text: string }
  ArmarioEmbutido?: {_text: string }
  Bairro?: {_text: string }
  CEP?: {_text: string }
  CategoriaImovel?: {_text: string }
  Cerca?: {_text: string }
  Cidade: {_text: string }
  Closet?: {_text: string }
  CodigoImovel?: {_text: string }
  Complemento?: {_text: string }
  Copa?: {_text: string }
  DataCadastro?: {_text: string }
  DataUltimateracao?: {_text: string }
  Endereco?: {_text: string }
  EstradaAsfaltada?: {_text: string }
  EstudaPermuta?: {_text: string }
  Fotos?: { Foto: Array<IFoto> },
  Sauna?: {_text: string },
  Varanda?: {_text: string },
  InfraInternet?: {_text: string }
  Interfone?: {_text: string }
  Jardim?: {_text: string }
  Latitude?: {_text: string }
  Lavabo?: {_text: string }
  Longitude?: {_text: string }
  Numero?: {_text: string }
  Observacao?: {_cdata: string }
  PrecoLocacao?: { _text: string }
  PrecoLocacaoTemporada?: { _text: string}
  PrecoVenda?: {_text: string }
  QtdAndar?: {_text: string }
  QtdBanheiros?: {_text: string }
  QtdDormitorios?: {_text: string }
  QtdSalas?: {_text: string }
  QtdSuites?: {_text: string }
  QtdVagas?: {_text: string }
  QuartoWCEmpregada?: {_text: string }
  SalaoFestas?: {_text: string }
  SubTipoImovel?: {_text: string }
  Telefone?: {_text: string }
  TipoImovel?: {_text: string }
  TipoOferta?: {_text: string }
  TituloImovel?: {_text: string }
  UF?: {_text: string },
  thumbnail? : string,
  features?: Array<string>,
  Videos?: { Foto: Array<IVideo> },
  indexKey : string
}

export type ICarga = {
  Carga: {
    _attributes: any,
    Imoveis: {
      Imovel: Array<IPropertyXML>
    }
  },
  _declaration: any
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