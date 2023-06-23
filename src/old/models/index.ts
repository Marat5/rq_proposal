const SET_ORGANISATION_TYPES_DATA = 'SET_ORGANISATION_TYPES_DATA';

interface PayloadOrganisationTypes {
    [SET_ORGANISATION_TYPES_DATA]: OrganisationTypesResponse;
}

const actionCreator = ActionCreatorHelper<PayloadOrganisationTypes>();
export const setOrganisationTypesData = actionCreator(SET_ORGANISATION_TYPES_DATA);

export default createReducer<EmployerInvoicePayment, PayloadOrganisationTypes>(initialState, {
    [SET_ORGANISATION_TYPES_DATA]: (state, { payload }) => {
        return { ...state, organisationTypes: payload.organisationTypes };
    },
});