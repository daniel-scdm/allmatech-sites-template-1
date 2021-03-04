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
  Label : String,
  extraStyles? : object,
  extraDropdownStyles? : object,
  updateSimbling? : (value : string) => void,
  defaultValue? : string
}

export type ISlider = {
  Label : String,
  extraStyles? : object,
  updateSimbling? : (value : string) => void,
  defaultValue? : string
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
  price : number,
  indexKey? : number
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
  List : Array<ICard>,
  total : number,
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