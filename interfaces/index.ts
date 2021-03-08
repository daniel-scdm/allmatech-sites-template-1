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

export type ISearchFormBuy = {
    cityList? : Array<string>,
    streetList? : Array<string>,
    updateStreet? : (value : string) => void 
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

export type ICard = {
  OfferMessage? : string,
  image? : string,
  title : string,
  text : string,
  bedrooms : number,
  bathrooms : number,
  garages : number,
  indexKey? : number,
  priceSell? : number,
  priceRent? : number
}

export type IFoto = {
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
  Cidade?: {_text: string }
  Closet?: {_text: string }
  CodigoImovel?: {_text: string }
  Complemento?: {_text: string }
  Copa?: {_text: string }
  DataCadastro?: {_text: string }
  DataUltimateracao?: {_text: string }
  Endereco?: {_text: string }
  EstradaAsfaltada?: {_text: string }
  EstudaPermuta?: {_text: string }
  Fotos?: { Foto: Array<IFoto> }
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
  indexKey : string
}

export type ITeamCard = {
  image? : IconBaseProps,
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
  link : string
}

export type IListProperties = {
  List : Array<IPropertyXML>,
  total : number,
  isLoading: boolean,
  pageNumber : number,
  totalPages : number
}

export type IPagination = {
  total : number,
  pageLimit : number,
  pageNeighbours : number,
  onPageChanged : Function
}

export type IProperty = {
  OfferMessage? : string,
  image? : string,
  title : string,
  text : string,
  bedrooms : number,
  bathrooms : number,
  garages : number,
  price : number,
  indexKey? : number
}

export type ICarousel = {
  activeModal : boolean,
  setActiveModal : (activeModal : boolean) => void
}