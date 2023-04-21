import React, {useState, useEffect, memo} from 'react'
import { Container, Content, FeedImg, Numbers, NumbersButton, NumbersContainer, UserData, UserFeed, UserInfo, UserName, UserNamePhoto, UserPhoto} from './styles'
import Services from '../../../api'
import { Button } from '../../FormComponents/Button/style'


let userCod = localStorage.getItem('usercod')    

const UserPage = () => {
  const [data, setData] = useState<any>(false)
  const [follow, setFollow] = useState<any>(false)

  useEffect(() => { 
    Services.GetUser(setData, userCod)
  }, [])

  function handleFollow(){
    setFollow(!follow)
  }

  let Infos = [{
    Title: 'Publicações',
    Number: data.Publicações,
    id: 1
  },{
    Title: 'Seguidores',
    Number: data.Seguidores,
    id: 2
  },{
    Title: 'Seguindo',
    Number: data.Seguindo,
    id: 3
  }]

  if(!data) return <div style={{height: '100vh'}}>Loading</div>
  return (
    <Container>
      <Content>
          <UserData>
            <UserNamePhoto>
                <UserPhoto height={80} width={80} src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                <UserName>{data.UserName}</UserName>
                {follow? 
                <Button onClick={handleFollow} style={{padding: '4px 14px'}}>Seguindo</Button> : <Button onClick={handleFollow} style={{padding: '4px 14px'}}>Seguir</Button>}
            </UserNamePhoto>
            <UserInfo>
                {Infos.map((item) => {
                  return (
                    <NumbersContainer key={item.id}>
                      <Numbers>
                      {item.Number}
                      </Numbers>
                      <NumbersButton>
                        {item.Title}
                      </NumbersButton>
                    </NumbersContainer>
                  )
                })}
           </UserInfo>
          </ UserData>
          <UserFeed>           
            <FeedImg src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>              
            <FeedImg src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>                        
            <FeedImg src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>          
          </UserFeed>
      </Content>
    </Container>
  )
}

export default UserPage