import { Head } from "../../pages/Head"
import Services from "../../pages/Services"
import { Head_nav } from "../Head_nav"
import { Mainfooter } from "../Mainfooter"
import { NavDemo } from "../NavDemo"


export const Mainservice = () => {
  return (
    <>
    <Head_nav/>
    <NavDemo/>
    <Head/>
    <Services/>
    <Mainfooter/>
    </>
  )
}
