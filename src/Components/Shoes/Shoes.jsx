import React, { useContext } from 'react';
import Shoe from '../Shoe/Shoe';
import { GlobalContext } from '../../context/GlobalState';

const Shoes = ({cat}) => {

    // const { deleteTransaction } =  useContext(GlobalContext);
    const { shoes } = useContext(GlobalContext);
    // const { sandals } = useContext(GlobalContext);
    // const [delID, setDelID] = useState('');

    // function _delete(delID){
    //     deleteTransaction(delID);
    // }

    return (
        <>
            <h3 className="newTransac">Products</h3>
            <div className = "listContainer">
                {
                    (cat !== '')?
                    shoes.filter(shoe => shoe.category === cat).map(item => (
                        <Shoe key={item.id} shoe={ item } />
                    )):
                    shoes.map(item => (
                        <Shoe key={item.id} shoe={ item } />
                    ))
                } 
            </div>
        </>
    )
}

export default Shoes

