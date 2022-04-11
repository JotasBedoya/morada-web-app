import { IoBed } from 'react-icons/io5'
import { FaBath } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { PropertyDetailsWrapper } from './styles'


export const PropertyDetails = () => (

    <PropertyDetailsWrapper>
    
    <div className="BedRoom">
        <IoBed />
        <p>5</p>
    </div>
    <div>
        <FaBath />
        <p>4</p>
    </div>
    <div>
        <GiWashingMachine />
        <p>1</p>
    </div>



    </PropertyDetailsWrapper>
)