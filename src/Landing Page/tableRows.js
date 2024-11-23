import { BsArrowUpRightSquare } from "react-icons/bs";

const TableRow = ({name, description, url}) => {
    return ( 
    <tr>
        <th>
          {name}
        </th>
        <th>
          {description}
        </th>
        <th>
          <a href={url}> 
            <p>
              <BsArrowUpRightSquare />
            </p>
          </a>
        </th>
    </tr> 
    );
}
 
export default TableRow;