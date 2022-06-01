import Image from "next/image";
import { CompaniesContainer } from "./style";
import LogicalisLogo from "../../assets/logicalis-logo.png";
import CaptalysLogo from "../../assets/captalys-logo.png";
import AmigoEduLogo from "../../assets/amigoedu-logo.png";
import PravalerLogo from "../../assets/pravaler-logo.png";

export const CompaniesBar = () => {
  return (
    <CompaniesContainer>
      <Image src={LogicalisLogo} alt="Logicalis logo" />
      <Image src={CaptalysLogo} alt="Captalys logo"></Image>
      <Image src={AmigoEduLogo} alt="AmigoEdu logo"></Image>
      <Image src={PravalerLogo} alt="Pravaler logo"></Image>
    </CompaniesContainer>
  );
};
