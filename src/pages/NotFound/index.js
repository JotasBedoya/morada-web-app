import { NotFoundWrapper } from "./styles";
import not_found from "./Img/taken.svg"


export const NotFound = () =>(

    <NotFoundWrapper>
     
        <h1>Page Not Found - 404</h1>
        <img src={not_found}/>

    </NotFoundWrapper>

)