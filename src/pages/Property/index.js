import { Fragment } from 'react'
import {Page} from '../../components/Page'
import { SubTitle } from '../../globalStyles'
import { PropertyPrice } from '../Home/components/PropertyPrice'
import { PropertyDetails } from './components/PropertyDetailInfo'
import { PropertyImage } from './components/PropertyGallery'
import { PropertyPageWrapper, PropertyTitle } from './styles'


export const Property = () =>(


    <Page>
        <Fragment>
            
            <PropertyImage/>
            <PropertyTitle>
                <h2>Apartamento en Laureles</h2>
            </PropertyTitle>
            <SubTitle>
                Laureles, Medellin
            </SubTitle>

            <PropertyDetails />
            <PropertyPrice/>

        </Fragment>
    </Page>
)