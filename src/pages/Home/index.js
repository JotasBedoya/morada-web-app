import { Fragment, useState, useEffect, useContext } from "react";
import { PropertyTypeButton } from "./components/PropertyTypeButton";
import { PropertyTypesContainer } from "./styles";
import { IoBusiness, IoHome, IoMap, IoPrism, IoLocation } from 'react-icons/io5';
import { PropertyCard } from "./components/PropertyType";
import { ProfileUserName } from "./components/ProfileUserName";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { Page } from "../../components/Page";
import { SampleContext } from "../../contexts/SampleContext";
import { HTTP_VERBS, requestHttp } from "../../../utils/HttpRequest";



const All_PROPERTIES_TYPES = 0;
const PropertiesTypes = [
    { id: 1, icon: IoBusiness, label: 'Apartamentos'},
    { id: 2, icon: IoHome, label: 'Casas'},
    { id: 3, icon: IoMap, label: 'Lotes'},
    { id: 4, icon: IoPrism, label: 'Fincas'},
    { id: 5, icon: IoLocation, label: 'Locales'},
];

export const Home = () => {
    
    const [propertyTypeSelected, setPropertyTypeSelected] = useState(All_PROPERTIES_TYPES);
    const sampleValue = useContext(SampleContext);
    const [properties, setProperties] = useSate ([]);

    const propertyTypeHandler = (idNewSelected) => {
        /*if (propertyTypeSelected === idNewSelected) { // Deselección 
            setPropertyTypeSelected(0)
        } else{
            setPropertyTypeSelected(idNewSelected);
        } */
        setPropertyTypeSelected(propertyTypeSelected === idNewSelected
                                    ? All_PROPERTIES_TYPES : idNewSelected);
    };

    useEffect(() => {
        requestProperties();
    }, [propertyTypeSelected]) ;

    const requestProperties = async () => {
        try {
            const response = await  requestHttp ({ 
                method: HTTP_VERBS.GET, 
                endpoint: '/properties',
                params: makePropertiesFilter() 
            });
            setProperties(response.data.properties);
        } catch (error) {
            // TODO
        }
    };

    const makePropertiesFilter = () =>{
        const filters = {};
        if (propertyTypeSelected !== All_PROPERTIES_TYPES) {
            filters ['propertyType'] = propertyTypeSelected;
        }
    }

    return(
        <Page>
            <ProfileUserName />
            <WelcomeMessage />
            <h4>{sampleValue}</h4>
            <PropertyTypesContainer>
            {
                PropertiesTypes.map( item => 
                    <PropertyTypeButton 
                        selected={propertyTypeSelected === item.id} 
                        icon={item.icon} 
                        label={item.label}
                        id={item.id}
                        onPress={propertyTypeHandler}
                        key={key}
                    /> )
            }
            </PropertyTypesContainer> 

            {
                properties.map((key, item) => <PropertyCard key={key} />)
            }

            <PropertyCard />

        </Page>
   ) 
}