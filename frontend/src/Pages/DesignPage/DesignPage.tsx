import React from 'react'
import Table from '../../Components/Table/Table'
import RatioList from '../../Components/RatioList/RatioList'

interface Props { }

const DesignPage = (props: Props) => {
    return (
        <div>
            <h1>StockFinder Design Page</h1>
            <h2>This is where we will house various design aspects of the app</h2>
            <RatioList />
            <Table />
        </div>
    )
}

export default DesignPage