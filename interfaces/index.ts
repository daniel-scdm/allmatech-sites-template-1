import { ReactChild } from "react";

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
