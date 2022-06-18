import {Page} from '../../components/Page'
import { FormControl, PageTitle, FormControlInput } from '../../globalStyles';
import { IoBusiness, IoHome, IoMap, IoPrism, IoLocation,IoInformationCircle,IoList,IoAddCircle } from 'react-icons/io5';
import { WrapperReg, WrapperPropState } from './styles';
import { Button } from '../../components/Button';

export const AddProperty = () =>(
 
    <Page>
        <PageTitle>Agrega tu propiedad</PageTitle>
        
        <WrapperReg> 
                <IoHome />
                <h4>  DATOS DEL AVISO</h4>
        </WrapperReg>           


                <FormControl>
                        <FormControlInput>
                            <label>Titulo de la propiedad</label>
                            <input type="text" ></input>
                        </FormControlInput>
                </FormControl>

                <FormControl>
                        <FormControlInput>
                            <label>Tipo de oferta</label>
                            <select class="select">
                                <option></option>
                                <option>Venta</option>
                                <option>Arriendo</option>
                                <option>Alquiler Vacacional</option>
                            </select>
                        </FormControlInput>
                </FormControl>

                <FormControl>
                        <FormControlInput>
                            <label>Tipo de Propiedad</label>
                            <select class="select">
                                <option></option>
                                <option>Casa</option>
                                <option>Apartamento</option>
                                <option>Local</option>
                                <option>Lote</option>
                            </select>
                        </FormControlInput>
                </FormControl>

        <WrapperReg>
            <h4> <IoMap /> UBICACIÓN DEL INMUEBLE</h4>  
        </WrapperReg>
                  <FormControl>
                        <FormControlInput>
                            <label>Ciudad / Municipio</label>
                            <input type="text" ></input>
                        </FormControlInput>
                </FormControl>
                  <FormControl>
                        <FormControlInput>
                            <label>Barrio</label>
                            <input type="text" ></input>
                        </FormControlInput>
                </FormControl>
                  <FormControl>
                        <FormControlInput>
                            <label>Dirreción</label>
                            <input type="text" ></input>
                        </FormControlInput>
                </FormControl>
        
            <WrapperReg>
                <h4> <IoInformationCircle /> DESCRIPCIÓN DEL INMUEBLE</h4>  
            </WrapperReg>
                    <FormControl>
                        <FormControlInput>
                            <label>Precio ($)</label>
                            <input type="text" ></input>
                        </FormControlInput>
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>Estrato</label>
                                <select class="select">
                                    <option></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>Campestre</option>
                                </select>
                        </FormControlInput>
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>Estrato</label>
                            <input type="text" ></input>
                        </FormControlInput>
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>Área (m<sup>2</sup>)</label>
                            <input type="text" ></input>
                        </FormControlInput>
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>Número de habitaciones</label>
                            <select class="select">
                                    <option></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>Más</option>
                                </select>
                        </FormControlInput>
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>Número de baños</label>
                            <select class="select">
                                    <option></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>Más</option>
                                </select>
                        </FormControlInput>
                    </FormControl>
                    <FormControl>
                        <FormControlInput>
                            <label>Número de pisos</label>
                            <select class="select">
                                    <option></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                        </FormControlInput>
                    </FormControl>
                    <FormControl>
                        <FormControlInput>

                            <label>Estado del inmueble</label>
                            <WrapperPropState>
                                <p><input type="radio"/> No especificado </p>
                                <p><input type="radio"/> Excelente </p>
                                <p><input type="radio"/> Bueno </p>
                                <p><input type="radio"/> Remodelar </p>
                            </WrapperPropState>                                                                                            
                        </FormControlInput>
                    </FormControl>

      <WrapperReg>
            <h4> <IoList /> DESCRIPCIÓN DEL INMUEBLE</h4>  
      </WrapperReg>
                    <FormControl>
                        <FormControlInput>
                            <label>Describe tu inmueble </label>
                            <input type="text"></input>

                        </FormControlInput>
                    </FormControl>

                    <WrapperReg>
            <h4> <IoAddCircle /> AGREGA FOTOS DE TU INMUEBLE</h4>  
      </WrapperReg>

        <Button label="Agregar" linkTo="" />

        <br/>
        <br/>
        <hr/>
        <Button label="Aceptar" linkTo="" />

   </Page>
)









