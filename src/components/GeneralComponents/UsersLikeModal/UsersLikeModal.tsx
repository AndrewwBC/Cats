import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { Container, Content } from './styles';
import { NavLink } from 'react-router-dom';
import { EachUser } from '../AllUsers/styles';
import { UserPhoto } from '../../Routes/UserPage/styles';
import { Paragraph } from '../Paragraph';

export const UsersLikeModal = ({postCod, setModalLikes, userLoggedIn}: any) => {

    const {data: likeList, isLoading, isSuccess} = useQuery({
        queryKey:['modalLikes'],
        queryFn:  () => {
            return axios.get(`http://localhost/ReactPHP/modalLikes.php?postCodModalLikes=${postCod}`).then((res) => res)
        }
    })
    
    window.addEventListener('click', ({ target }: any) => {
        if (target.id === 'outModal') setModalLikes(false)
    })
    

    likeList && console.log(likeList.data)

    if(isLoading) return <></>
    if(isSuccess)
        return (
            <Container id="outModal">
                <Content>
                    <Paragraph>Quem curtiu</Paragraph>
                    {likeList && likeList.data.map((item: any) => {
                      return (
                        <NavLink to={item.UserName !== userLoggedIn? '/user/' + item.Username : '/userpage'}>
                        <EachUser>
                            <UserPhoto
                                height={54}
                                width={54}
                                src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt=""
                                />
                            <Paragraph>{item.UserName}</Paragraph>
                        </EachUser>
                        </NavLink>
                      )
                    })}
                </Content>
            </Container>
        )
    else {
        return <></>
    }    

}

export default UsersLikeModal;