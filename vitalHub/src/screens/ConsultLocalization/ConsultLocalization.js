import {
  Container,
  ContainerCepCidade,
} from "../../components/Container/StyleContainer";
import { CardCancelLessLocal } from "../../components/Descriptions/Descriptions";
import { AgeTextCard } from "../../components/Descriptions/StyledDescriptions";
import { MapImage } from "../../components/Images/StyleImages";
import { InputBox } from "../../components/InputBox/InputBox";
import { Title, TitleLocalization } from "../../components/Title/StyleTitle";
import {Maps} from "../../screens/Maps/Maps"

export const ConsultLocalization = ({ navigation }) => {
  return (
    <Container>
      <Maps/>

      <>

      <TitleLocalization>Clínica Natureh</TitleLocalization>

      <AgeTextCard>São Paulo, SP</AgeTextCard>

      <InputBox
        placeholderTextColor={"#33303E"}
        textLabel={"Endreço"}
        placeholder={"Ex. Rua Vicenso Silva, 58"}
        // keyboardType="numeric"
        editable={true}
        fieldWidth={90}
      />

      <ContainerCepCidade>
        <InputBox
          placeholderTextColor={"#33303E"}
          textLabel={"Número"}
          placeholder={"Ex. 570"}
          keyboardType="numeric"
          editable={true}
          fieldWidth={40}
        />
        <InputBox
          placeholderTextColor={"#33303E"}
          textLabel={"Bairro"}
          placeholder={"Ex. Vila Ema"}
          editable={true}
          fieldWidth={40}
        />
      </ContainerCepCidade>

      <CardCancelLessLocal
        onPressCancel={() => {
          navigation.replace("Main");
        }}
        text={"Voltar"}
      />
      </>
      
    </Container>
  );
};
