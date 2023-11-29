export interface Button {
  id: string,
  isDisabled?:boolean,
  label: string,
  class: string,
  matIcon: string,
  href?: string;
  onClick?: (event: any, id: string) => void,
  passSelfClick?: (event: any, object: any) => void
}

export interface showcaseItem {
  imgSrc: string;
  imgAlt: string;
  heading: string;
  desc: string;
  desc2?: string;
  link?: string;
  linkText?: string;
}
