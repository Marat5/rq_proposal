import { useOrgatisationTypesQuery } from "./queries/useOrgatisationTypesQuery";

export const PayerForm = () => {
    const { employer } = useSelector(({ employerInvoicePayment }) => employerInvoicePayment);
    const { data, isLoading } = useOrgatisationTypesQuery(employer.employerId)

    return isLoading ? <LoadIndicator/> : (
        <>
            {data.map(item => {
                <OrganisationType item={item} />
            })}
        </>
    )
}