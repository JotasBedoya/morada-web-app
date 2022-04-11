import { Fragment } from "react";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer } from "./styles";
import { IoBusiness, IoHome, IoMap, IoPrism, IoLocation } from 'react-icons/io5';
import { PropertyCard } from "./components/PropertyType";
import { ProfileUserName } from "./components/ProfileUserName";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { Page } from "../../components/Page";




const PropertiesTypes = [
    { icon: IoBusiness, label: 'Apartamentos'},
    { icon: IoHome, label: 'Casas'},
    { icon: IoMap, label: 'Lotes'},
    { icon: IoPrism, label: 'Fincas'},
    { icon: IoLocation, label: 'Locales'},
];



export const Home = () => (
    
    <Page>
        <ProfileUserName />
        <WelcomeMessage />
        <PropertyTypesContainer>
        {
            PropertiesTypes.map( item => 
            <PropertyTypeButton icon={item.icon} label={item.label} /> )
        }
        </PropertyTypesContainer> 

        <PropertyCard />

    </Page>
    
)