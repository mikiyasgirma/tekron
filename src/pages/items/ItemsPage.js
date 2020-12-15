import React from 'react'
import BodyWrapper from '../../components/Navigator/BodyWrapper'
import Navigate from '../../components/Navigator/Navigate'
import ItemsFab from './ItemsFab'
import ItemsTabs from './ItemsTab'

export default function ItemsPage() {
    return (
        <>
            <Navigate title='Items' />
            <BodyWrapper>
                <ItemsTabs/>      
                <ItemsFab/>
            </BodyWrapper>
        </>
    )
}
