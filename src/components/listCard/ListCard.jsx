import React from 'react'
import Card from '../card/Card'
import {WpGrid} from '../organisms/Organisms'
import Users from '../../data/data.json'
const ListCard = () => {
    return (
        <WpGrid>
            {
                Users.map(user=>(
                    <Card user={user} key={user.id}/>
                ))
            }
        </WpGrid>
    )
}

export default ListCard
