import { Fragment } from "react";
import { PropertyTypeButtomWrapper, IconWrapper } from "./styles";



export const PropertyTypeButton = ({icon:Icon, id, label, selected, onPress}) => (
    <PropertyTypeButtomWrapper onClick={ () => onPress(id)} selected={selected} >
        <IconWrapper selected={selected}>
            <Icon />       
        </IconWrapper >
        <p>{label}</p>
    </PropertyTypeButtomWrapper>
)