import BookCatalogContainer from './components/BookCatalog/BookCatalogContainer'
import {Provider} from 'react-redux'
import store from './redux/store'
import {Layout} from 'antd'
import {BrowserRouter, withRouter, Switch, Route, Redirect} from 'react-router-dom'
import LoginContainer from './components/Login/LoginContainer'
import RegistrationContainer from './components/Registration/RegistrationContainer'
import HeaderContainer from './components/Header/HeaderContainer'

const App = () => {
    const {Content} = Layout

    return (
        <Provider store={store}>
            <div className="App">
                <HeaderContainer/>
                <Content>
                    <Switch>
                        <Route
                            path="/catalog"
                            render={() => <BookCatalogContainer/>}
                        />
                        <Route
                            path="/login"
                            render={() => <LoginContainer/>}
                        />
                        <Route
                            path="/registration"
                            render={() => <RegistrationContainer/>}
                        />
                        <Redirect from="/" to="/catalog"/>
                    </Switch>
                </Content>
            </div>
        </Provider>
    )
}

const AppContainer = withRouter(App)

const MainApp = () => {
    return <BrowserRouter>
        <AppContainer/>
    </BrowserRouter>
}

export default MainApp
