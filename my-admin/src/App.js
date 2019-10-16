import React from 'react';
import { Route, Switch } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import NotFound from './pages/notfound'
import 'normalize.css'
import { pages } from './router/config'
import { getUser } from './js/utils'
const DEFAULE_PAGE = 'one'

const isLogin = () => {
    // console.log(getUser())
    if(getUser()) {
        const admin = JSON.parse(getUser())
        return true
    } 
    return false
}
const loginStatu = isLogin()
function PageContainer({ match, ...props }) {
    const { pageId } = match.params
    if(pageId === undefined) {
       const { page: Page } = pages[DEFAULE_PAGE]
      //  return <Page />
      return (
        <Home {...props}>
           <Page />
        </Home>
      )
    } else if(pages[pageId] === undefined){
      window.location = '404'
      return null
    } else {
      const { page: Page} = pages[pageId]
      return (
        <Home {...props}>
           <Page />
        </Home>
      )
    }
}
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          path='/' 
          exact={true} 
          // render={props => <Home {...props}><PageContainer {...props}/></Home>}
          render={props =>
             loginStatu ? <PageContainer {...props}/> : <Login />
          }
        >
        </Route>
        <Route path='/login' exact={true} component={Login}></Route>
        <Route path='/404' exact={true} component={NotFound}></Route>
        <Route 
          path='/:pageId' 
          exact={true} 
          // render={props => <Home {...props}><PageContainer {...props}/></Home>}
          render={props =>
           loginStatu ? <PageContainer {...props}/> : <Login />
         }
        >
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
