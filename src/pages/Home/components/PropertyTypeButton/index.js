import { Fragment } from "react";
import { PropertyTypeButtomWrapper, IconWrapper } from "./styles";



export const PropertyTypeButton = ({icon:Icon, label}) => (
    <PropertyTypeButtomWrapper>
        <IconWrapper>
            <Icon />       
        </IconWrapper>
        <p>{label}</p>
    </PropertyTypeButtomWrapper>
)