import { PaginationStyle } from "./style"
import { AiOutlineRight } from "react-icons/ai"

const Pagination = () => {
     return (
          <PaginationStyle>
               <div>
                    <p className="textBody2500">1</p><p className="textBody2500">de 2</p>
               </div>
               <div>
                    <p className="textBody2500"> Seguinte <AiOutlineRight className="Icon"/> </p>
               </div>
          </PaginationStyle>
     )
}

export default Pagination;