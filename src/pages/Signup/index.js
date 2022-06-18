import {Page} from '../../components/Page'
import { FormControl, PageTitle, FormControlInput, TermsForm } from '../../globalStyles';
import { Button } from '../../components/Button';

export const Signup = () => (
    <Page hideMenu>
        <PageTitle>Registro</PageTitle>
        <form>        
                <FormControl>
                    <FormControlInput>
                        <label>Nombres</label>
                        <input type="text" ></input>
                    </FormControlInput>
                </FormControl>

            <FormControl>
                <FormControlInput>
                    <label>Apellidos</label>
                    <input type="text" ></input>
                </FormControlInput>
            </FormControl>

            <FormControl>
                <FormControlInput>
                    <label>Número de identificación</label>
                    <input type="text" ></input>
                </FormControlInput>
            </FormControl>

            <FormControl>
                <FormControlInput>
                    <label>Correo electrónico</label>
                    <input type="email" ></input>
                    </FormControlInput>
            </FormControl>

            <FormControl>
                <FormControlInput>
                    <label>Contraseña</label>
                    <input type="password" ></input>
                    </FormControlInput>
            </FormControl>

            <FormControl>
                <FormControlInput>
                    <label>Confirmar contraseña</label>
                    <input type="password" ></input>
                </FormControlInput>
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