import React from 'react'
import DashboardLayout from '../../dashboardDefaultLayout/DashboardLayout'
import InvestmentHeader from './InvestmentHeader'
import AmountsInvested from './AmountsInvested'
import AllInvestment from './AllInvestment'


const Investment = () => {
    return (
        <>
        <DashboardLayout>
            <main>
            <InvestmentHeader/>
            <AmountsInvested/>
            <AllInvestment/>
            </main>
        </DashboardLayout>
        </>
    )
}

export default Investment
