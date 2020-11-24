import React from 'react'
import {WpCard,WpName} from '../molecules/Molecules'
import {Image,Title,SubTitle,Paragraph,Paragraph2} from '../atoms/Atoms'
const Card = (props) => {
    const {name,subtitle,image,description1,description2,dark,bg,grid}=props.user
    return (
    <WpCard Bg={bg} grid={grid}>
            <WpName>
                <Image src={process.env.PUBLIC_URL+image}/>
                <Title dark={dark}>{name}<br/>
    <SubTitle dark={dark}>{subtitle}</SubTitle>
                </Title>
            </WpName>
    <Paragraph dark={dark}>{description1}</Paragraph>
    <Paragraph2 dark={dark}>{description2}</Paragraph2>
    </WpCard>
    )
}

export default Card
