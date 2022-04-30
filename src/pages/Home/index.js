import { Fragment, useState, useEffect } from "react";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer } from "./styles";
import { IoBusiness, IoHome, IoMap, IoPrism, IoLocation } from 'react-icons/io5';
import { PropertyCard } from "./components/PropertyType";
import { ProfileUserName } from "./components/ProfileUserName";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { Page } from "../../components/Page";




const PropertiesTypes = [
    { id: 1, icon: IoBusiness, label: 'Apartamentos'},
    { id: 2, icon: IoHome, label: 'Casas'},
    { id: 3, icon: IoMap, label: 'Lotes'},
    { id: 4, icon: IoPrism, label: 'Fincas'},
    { id: 5, icon: IoLocation, label: 'Locales'},
];

export const Home = () => {
    
    const [propertyTypeSelected, setPropertyTypeSelected] = useState(0);

    const propertyTypeHandler = (id) => {
        setPropertyTypeSelected(id);
    }

    useEffect(() =>{
        //acciones a ejecutar
        console.log('se modificó el estado de propertyTypeSelected' + " " + propertyTypeSelected)
    }, [propertyTypeSelected] );

    return(
        <Page>
            <ProfileUserName />
            <WelcomeMessage />
            <PropertyTypesContainer>
            {
                PropertiesTypes.map( item => 
                    <PropertyTypeButton 
                        selected={propertyTypeSelected === item.id} 
                        icon={item.icon} 
                        label={item.label}
                        id={item.id}
                        onPress={propertyTypeHandler}
                    /> )
            }
            </PropertyTypesContainer> 

            <PropertyCard />

        </Page>
   ) 
}