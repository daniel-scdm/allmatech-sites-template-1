import FeatureComponent from "src/components/Feature";
import { FaMapMarkedAlt } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { GiTreasureMap, GiFamilyHouse, GiMoneyStack } from "react-icons/gi";

import { MdBusinessCenter } from "react-icons/md";


const Features = () => (
    <>
        <FeatureComponent 
            icon={
              <FaMapMarkedAlt 
                  
                  color="#707070"
              />
            }
            title="Localidade perfeita"
            text={`                
              Eos an high ceilings delicata. 
              Quo ei noted architect discere facilisi. 
              Eos dico historic delicata ex.
            `}
        />
  
        <FeatureComponent 
            icon={
              <RiComputerLine 
                  
                  color="#707070"
              />
            }
            title="Checagem online"
            text={`                
              Eos an high ceilings delicata. 
              Quo ei noted architect discere facilisi. 
              Eos dico historic delicata ex.
            `}
        />
  
        <FeatureComponent 
            icon={
              <GiTreasureMap 
                  
                  color="#707070"
              />
            }
            title="Localizador de alto comando"
            text={`                
              Eos an high ceilings delicata. 
              Quo ei noted architect discere facilisi. 
              Eos dico historic delicata ex.
            `}
        />
  
        <FeatureComponent 
            icon={
              <MdBusinessCenter 
                  
                  color="#707070"
              />
            }
            title="Melhores consultores"
            text={`                
              Eos an high ceilings delicata. 
              Quo ei noted architect discere facilisi. 
              Eos dico historic delicata ex.
            `}
        />
  
        <FeatureComponent 
            icon={
              <GiFamilyHouse 
                  
                  color="#707070"
              />
            }
            title="Preço competitivo"
            text={`                
              Eos an high ceilings delicata. 
              Quo ei noted architect discere facilisi. 
              Eos dico historic delicata ex.
            `}
        />
  
        <FeatureComponent 
            icon={
              <GiMoneyStack 
                  
                  color="#707070"
              />
            }
            title="Mais valorizado"
            text={`                
              Eos an high ceilings delicata. 
              Quo ei noted architect discere facilisi. 
              Eos dico historic delicata ex.
            `}
        />
    </>
)

export default Features;