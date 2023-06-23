import { useQuery } from "react-query";

const ORGANISATION_TYPES_URL = '/shards/employer/invoice/organisation_types';
const ORGANISATION_TYPES_QUERY_KEY = "ORGANISATION_TYPES_QUERY_KEY";

const fetchOrganisationTypes = async (employerId: number) => {
    const organisationTypesData = await fetcher.get(ORGANISATION_TYPES_URL, {
        params: {
            employerId,
        },
    });
    return organisationTypesData;
}

export const useOrgatisationTypesQuery = (employerId: number) => {
    const dispatch = useDispatch();
    return useQuery([ORGANISATION_TYPES_QUERY_KEY, employerId], () => fetchOrganisationTypes(employerId), {
        onError: (error) => dispatch(showDefaultError(error))
    });
}