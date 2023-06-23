import { fetchOrganisationTypes } from "../../models/fetchOrganisationTypes";

const useFetchOrganisationTypes = (employerId: number) => {
    const [loading, startLoading, stopLoading] = useOnOffState(false);
    const dispatch = useDispatch();
    const organisationTypes = useSelector(({ employerInvoicePayment }) => employerInvoicePayment.organisationTypes);

    useEffect(() => {
        startLoading();
        void dispatch(fetchOrganisationTypes(employerId)).then(() => {
            stopLoading();
        });
    }, [dispatch, employerId, startLoading, stopLoading]);

    return [organisationTypes, loading];
};

export default useFetchOrganisationTypes;