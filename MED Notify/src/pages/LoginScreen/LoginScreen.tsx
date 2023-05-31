import ContainerPage from "../../components/ContainerPage"
import ContainerLogin from "./ContainerLogin"
import medNotify from "../../assets/medNotify.svg"
import plus from "../../assets/plus.svg"
import doctorImage from "../../assets/doctorImage.svg"

import LogoBox from "./LogoBox"
import ContainerImage from "./ContainerImage"


export const LoginScreen  = () => {
  return (
    <>
    <ContainerPage> 
      <ContainerLogin>
        <LogoBox>
        <img src={medNotify} alt="" />
        <img src={plus} alt="" />
        </LogoBox>
        <h1>Container de Login</h1>
        <div>
          Container Input
        </div>
      </ContainerLogin>
      <ContainerImage>
      <img src={doctorImage} alt="" />
      </ContainerImage>
    </ContainerPage>

    </>
  )
}

