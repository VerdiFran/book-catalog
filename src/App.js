import BookCatalogContainer from './components/BookCatalog/BookCatalogContainer'
import {Provider} from 'react-redux'
import store from './redux/store'
import Header from './components/Header/Header'
import {Layout} from 'antd'
import {BrowserRouter, withRouter, Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login/Login'
import Registration from './components/Registration/Registration'

const App = () => {
    const {Content} = Layout

    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
                <Content>
                    <Switch>
                        <Route
                            path="/catalog"
                            render={() => <BookCatalogContainer/>}
                        />
                        <Route
                            path="/login"
                            render={() => <Login/>}
                        />
                        <Route
                            path="/register"
                            render={() => <Registration/>}
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
