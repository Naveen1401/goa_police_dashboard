import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import CreateAccount from '../../components/CreateAccount';


const CreateAcc = () => {

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(complaintSliceActions.setAbComplaint({ data: ComplaintData }));
    //     dispatch(complaintSliceActions.setComplaint({ data: ComplaintData }));
    // }, []);

    return (
        <div>
            <CreateAccount/>
        </div>
    )
}

export default CreateAcc;