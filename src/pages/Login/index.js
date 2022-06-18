import { useState } from 'react';
import {Page} from '../../components/Page';
import { FormControl,FormControlInput, PageTitle,FromControlAction  } from '../../globalStyles';
import { Button } from '../../components/Button';
import { IoPersonCircle } from 'react-icons/io5';
import { iconSignIn, WrapperIcon } from '../Login/styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { IoEyeOff, IoEye } from 'react-icons/io5'


export const Login = () => {

    let variable = 1;
    const [visiblePass, setVisiblePass] = useState(true);

    const tooglePasswordVisible = () => {
         setVisiblePass(!visiblePass);

    }

    return (
        <Page hideMenu>

            <WrapperIcon>
                < IoPersonCircle/>
            </WrapperIcon>

            <PageTitle>Iniciar Sesión</PageTitle>   
            <br />

            <form>
                <FormControl>

                    <FormControlInput>
                        <label>Correo electrónico</label>
                        <input type="email" />
                    </FormControlInput>
                </FormControl>

                <FormControl>
                    <FormControlInput>
                        <label>Contraseña</label>
                        <input type={visiblePass ? "text" : "password"} />
                    </FormControlInput>

                    <FromControlAction>
                        <ButtonIcon icon={ visiblePass ? IoEye : IoEyeOff} onPress={tooglePasswordVisible} />
                    </FromControlAction>

                </FormControl>
                < br />
                <Button label="Ingresar" linkTo="/Account" />                         
            </form>

            < br />

            <PageTitle>¿Aún no te has registrado?</PageTitle>

            <Button label="Registrar" linkTo="/Signup"/> 

        </Page>
    )
};