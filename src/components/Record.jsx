import { useDispatch } from "react-redux";
import { EDIT_INPUT } from "../redux/actions";

export const Record = (props) => {
    const { userValue, handleDelete } = props;
    const dispatch = useDispatch();
    const handleEdit = () => {
        dispatch({type: EDIT_INPUT, payload: userValue});
    }
    return (
        <div className="record">
          <span className="record-text">{ userValue.service }</span>
          <span className="record-price">{ userValue.price + ' $' }</span>
          <input type="button" className="button" value={ "Delete" } onClick={() => handleDelete(userValue.id)} />
          <input type="button" className="button" value={ "Edit" } onClick = {handleEdit} />
        </div>
    )
}