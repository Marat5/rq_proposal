import setOrganisationTypesData from "./index";

const ORGANISATION_TYPES_URL = '/shards/employer/invoice/organisation_types';

export const fetchOrganisationTypes = (employerId: number) =>
    async (dispatch: Dispatch<unknown>) => {
        let organisationTypesData = null;
        try {
            organisationTypesData = await fetcher.get(ORGANISATION_TYPES_URL, {
                params: {
                    employerId,
                },
            });
        } catch (error) {
            dispatch(showDefaultError(error));
            return;
        }
        dispatch(setOrganisationTypesData(organisationTypesData));
    };
