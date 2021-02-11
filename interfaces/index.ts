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

export type ISearchForm = {

}

export type IDropDown = {
  ListOptions : Array<String>,
  Label : String,
  extraStyles? : object
}

export type IAnimatedCatchPhrase = {

}

export type IFeatureComponent = {
    icon: IconBaseProps,
    title: string,
    text: string
}

export type ICard = {
  offer? : boolean,
  image? : IconBaseProps,
  title : string,
  text : string,
  bedrooms : number,
  bathrooms : number,
  garages : number,
  price : number
}
