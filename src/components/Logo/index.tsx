import { LogoStyled } from "./Logo.styles";
import img from "../../assets/img/logo/Group.png"

const logo = img

export const Logo = () => {
    return (
        <LogoStyled src={logo} alt="Logo Marvel"/>
    )
}