import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import BodyWrapper from '../../components/Navigator/BodyWrapper'
import Navigate from '../../components/Navigator/Navigate'
import ProductionList from './ProductionList'
import PlanFab from './planFab'
import AddPlan from './addPlan'

export default function ProductionPage() {

    const { path } = useRouteMatch();
    return (
        <>
            <Navigate title='production' />
            <BodyWrapper>
                <Switch>
                    <Route exact path={path}>
                         <ProductionList> 
                            <PlanFab />
                         </ProductionList>
                    </Route>
                    <Route path={`${path}/addPlan`}>
                        <AddPlan/>
                    </Route>

                </Switch>

            </BodyWrapper>
        </>
    )
}
