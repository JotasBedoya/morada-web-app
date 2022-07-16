import { useContext } from 'react';
import { Button } from '../../components/Button';
import {Page} from '../../components/Page'
import { UserContext } from '../../contexts/UserContext';
import { PageTitle, FooterFixed } from '../../globalStyles';
import { AccountImageWrapper } from './styles';


export const Account = () => {

    const {user, setUser } = useContext(UserContext);

    const UserInfo = () => (
        <div>
            <AccountImageWrapper>
                <img alt="profile__image" src="https://scontent.feoh4-4.fna.fbcdn.net/v/t1.6435-9/86351829_2667084890189579_2784802235756838912_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeF3OYo9Mo9jtC7PBZlFquw5I69y6aaqCWcjr3LppqoJZ6iKUoy0dc0lR0d6cCLt_0Yu794ZMuks53sfPab_VC02&_nc_ohc=6twqp_hDiTAAX9B5pfP&_nc_ht=scontent.feoh4-4.fna&oh=00_AT9OSVdAr8vyqAA2EMZoybRmuPh2femBV2LrBe5CV51IPw&oe=62935816" />
            </AccountImageWrapper>

            <h3>{user.name}</h3>
            <h5>{user.phone}</h5>
            <h5>{user.email}</h5>

            <hr />
            <FooterFixed>
                 <Button label="Cerrar sesión"  linkTo="/Login"/>
            </FooterFixed>
        </div>
    )

    const UserUnauthorized = () => (
        <div>
            <h2>No estás autenticado</h2>
            <p>Para acceder a tu perfil debes iniciar sesión</p>
            <hr />
            <Button label="Inciar Sesión" linkTo="/login" />
        </div>
    )
 
    return(
        <Page>
            <PageTitle>Mi cuenta</PageTitle>
            {
                user.isAuthenticated ? <UserInfo /> : <UserUnauthorized />
            }

        </Page>
    )
};