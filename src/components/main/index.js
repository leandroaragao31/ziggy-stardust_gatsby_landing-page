import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'


export function Main() {
    //const data = useStaticQuery(graphql`
    //    query {
    //        completedata{
                
    //        }
    //    }
    //`)
    //const {bookingbtn, contactbtn, logo, taxibtn, homebtn} = data.completedata.headers[0]
    
    return (
    <S.Container>
        <p>Main</p>
    </S.Container>
  )
}