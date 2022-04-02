import { Fragment } from "react";
import { PropertyTypeButtomWrapper } from "./styles";
import { IoBusinessSharp } from 'react-icons/io5'

export const PropertyTypeButton = ({icon, label}) => (
    <PropertyTypeButtomWrapper>
        <IoBusinessSharp/>
        <p>{label}</p>

    </PropertyTypeButtomWrapper>
)