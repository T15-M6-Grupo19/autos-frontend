import Banner from "../Banner";
import Card from "./Card";

import { ListCardContainer } from "./style";

import { IListCards } from "./types";


const ListCards = ({ listCard }: IListCards) => {
     if (listCard.length === 0) {
         return <Banner />;
     }
 
     return (
         <ListCardContainer>
             {listCard.map((Car) => (
                 <Card car={Car}/>
             ))}
         </ListCardContainer>
     );
 };

export default ListCards;