import {Page} from '../../components/Page'
import { FormControl, PageTitle, TermsForm } from '../../globalStyles';
import { Button } from '../../components/Button';

export const Signup = () => (
    <Page hideMenu>
        <PageTitle>Registro</PageTitle>
        <form>
            <FormControl>
                <label>Nombres</label>
                <input type="text" ></input>
            </FormControl>
            <FormControl>
                <label>Apellidos</label>
                <input type="text" ></input>
            </FormControl>
            <FormControl>
                <label>Número de identificación</label>
                <input type="text" ></input>
            </FormControl>
            <FormControl>
                <label>Correo electrónico</label>
                <input type="email" ></input>
            </FormControl>
            <FormControl>
                <label>Contraseña</label>
                <input type="password" ></input>
            </FormControl>
            <FormControl>
                <label>Confirmar contraseña</label>
                <input type="password" ></input>
            </FormControl>
            <br/>

                <input type="checkbox" ></input>
                <label>Aceptar términos y condiciones</label>
                <br/>
                <br/>

            <Button label="Aceptar" linkTo="/Account" />
        </form>


    </Page>
);