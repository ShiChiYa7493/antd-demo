import { MenuDataItem } from "@umijs/route-utils";

let menu:MenuDataItem[] = []

export const changeMenu = (newMenu:any[]) => {
  console.log(newMenu)
  menu = newMenu
}

export default menu