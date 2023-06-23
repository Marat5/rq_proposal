import useFetchOrganisationTypes from "./hooks/useFetchOrganisationTypes";

export const PayerForm = () => {
    const { employer } = useSelector(({ employerInvoicePayment }) => employerInvoicePayment);
    const [organisationTypes, organisationTypesLoading] = useFetchOrganisationTypes(employer.employerId);


    return organisationTypesLoading ? <LoadIndicator/> : (
        <>
            {organisationTypes.map(item => {
                <OrganisationType item={item} />
            })}
        </>
    )
}