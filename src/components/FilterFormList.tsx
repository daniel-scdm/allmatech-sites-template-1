/** @jsx jsx */
import { jsx, Flex, Checkbox } from 'theme-ui';

import styles from 'src/styles/Home.module.css';
import Section from 'src/styles/Section.module.css';
import Form from 'src/styles/Form.module.css';

import DropDownComponent from "src/components/DropDownComponent";

export default function PropertyAuthor() {
  return (
    <div className={Section.filterForm}>
        <form>
            <DropDownComponent 
                Label="Local"
                ListOptions={[]}
            /> 
            <Flex>
                <DropDownComponent 
                    Label="Preço min."
                    ListOptions={[]}
                    extraStyles={{
                        paddingRight: 25,
                    }}
                    extraDropdownStyles={{
                        borderWidth: 1,
                        borderColor: "#eee"
                    }}
                />  

                <DropDownComponent 
                    Label="Preço max."
                    ListOptions={[]}
                />
            </Flex>
            
            <Flex>
                <DropDownComponent 
                    Label="Quartos min."
                    ListOptions={[]}
                    extraStyles={{
                        paddingRight: 25  
                    }}
                />  

                <DropDownComponent 
                    Label="Quartos max."
                    ListOptions={[]}
                />
            </Flex>
            <DropDownComponent 
                Label="Banheiros"
                ListOptions={[]}
            />

            <div className={Section.checkContainer}>
                <Flex>
                    <Checkbox 
                        id="ar"
                    />
                    <label htmlFor="ar">Ar condicionado</label>
                </Flex>

                <Flex>
                    <Checkbox 
                        id="piscina"
                    />
                    <label htmlFor="piscina">Piscina</label>
                </Flex>

                <Flex>
                    <Checkbox 
                        id="seguranca"
                    />
                    <label htmlFor="seguranca">Segurança</label>
                </Flex>
                
            </div>
            

            <input 
                type="submit" 
                value="Buscar" 
                className={Form.SubmitButton}
            />
        </form>
    </div>
  )
}