import { useState } from "react"
import { SendButton } from "../../components/Button/Button"
import { ButtonSend } from "../../components/Button/StyleButton"
import { BoxAgeEmail, BoxBtn, BoxDescription, BoxViewImageImport, Container, ScrollContainer, ViewImageImport } from "../../components/Container/StyleContainer"
import { CardBackLess, CardCancel, CardCancelLess, DescriptionDoc, DescriptionPassword } from "../../components/Descriptions/Descriptions"
import { ViewImage } from "../../components/Images/StyleImages"
import { HighInputBox, HighInputBoxGrey, InputBox, LargeInputTextBox } from "../../components/InputBox/InputBox"
import { Label } from "../../components/Label/Label"
import { TitleProfile } from "../../components/Title/StyleTitle"
import { Line, TitleImage } from "./Style"
import Camera from "../Camera/Camera"
import { useContext } from "react"

import themeContext from "../../../theme/themeContext"
import { View } from "react-native"

export const ViewPrescription = ({ navigation }) => {
const [uriCameraCapture, setUriCameraCapture] = useState()
const [showCameraModal,setShowCameraModal] = useState()

const theme = useContext(themeContext)
const [darkMode,setDarkMode] = useState(true)
    return (
        <View style = {[{backgroundColor: theme.backgroundColor}]}>
        <Camera
        visible={showCameraModal}
        setUriCameraCapture={setUriCameraCapture}
        setShowCameraModal={setShowCameraModal}
        />
            <ScrollContainer>

                <Container>

                    <ViewImage source={require("../../assets/ney.webp")} />

                    <TitleProfile>Dr. Ney</TitleProfile>

                    <BoxDescription>
                        <DescriptionDoc description={"Cliníco geral"} />
                        <DescriptionDoc description={"CRM-15286"} />
                    </BoxDescription>

                    <HighInputBoxGrey
                        fieldHeight={350}
                        placeholderTextColor={"#A1A1A1"}
                        textLabel={"Descrição da consulta"}
                        placeholder={"Descrição"}
                        editable={true}
                        fieldWidth={90}
                    />

                    <InputBox
                        placeholderTextColor={"#A1A1A1"}
                        textLabel={"Diagnóstico do paciente"}
                        placeholder={"Diagnóstico"}
                        editable={true}
                        fieldWidth={90}
                    />

                    <HighInputBoxGrey
                        // fieldHeight={350}
                        placeholderTextColor={"#A1A1A1"}
                        textLabel={"Prescrição médica"}
                        placeholder={"Prescrição"}
                        editable={true}
                        fieldWidth={90}
                    />

                    <BoxViewImageImport>
                        
                        <Label textLabel={"Exames médicos"} />

                        <ViewImageImport>
                            <TitleImage>{showCameraModal}</TitleImage>
                        </ViewImageImport>

                    </BoxViewImageImport>

                    <BoxBtn>
                        <SendButton text={"Enviar"} onPress={() => {navigation.navigate("Camera")}}
                         />
                        <CardCancel text={"Cancelar"} />
                    </BoxBtn>

                    <Line/>

                    <HighInputBoxGrey
                        // fieldHeight={350}
                        placeholderTextColor={"#A1A1A1"}
                        placeholder={"Resultado do exame"}
                        editable={true}
                        fieldWidth={90}
                    />

                    <CardBackLess onPressCancel={() => {navigation.navigate("PatientConsultation") }} text={"Voltar"}/>

                </Container>

            </ScrollContainer>
        </View>
    )
}