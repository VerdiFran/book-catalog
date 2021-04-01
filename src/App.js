import BookCatalogContainer from './components/BookCatalog/BookCatalogContainer'
import {Provider} from 'react-redux'
import store from './redux/store'
import {Layout} from 'antd'
import {BrowserRouter, withRouter, Switch, Route, Redirect} from 'react-router-dom'
import LoginContainer from './components/Login/LoginContainer'
import RegistrationContainer from './components/Registration/RegistrationContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import {TO_CATALOG, TO_EDIT_BOOK, TO_LOGIN, TO_NEW_BOOK, TO_REGISTRATION} from './routes'
import NewBookFormContainer from './components/BookCatalog/NewBookForm/NewBookFormContainer'
import BookEditorFormContainer from './components/BookCatalog/BookEditorForm/BookEditorFormContainer'
import './App.less'

const App = () => {
    const {Content} = Layout

    return (
        <Provider store={store}>
            <div className="App">
                <HeaderContainer/>
                <Content>
                    <Switch>
                        <Route
                            path={TO_CATALOG}
                            render={() => <BookCatalogContainer/>}
                        />
                        <Route
                            path={TO_LOGIN}
                            render={() => <LoginContainer/>}
                        />
                        <Route
                            path={TO_REGISTRATION}
                            render={() => <RegistrationContainer/>}
                        />
                        <Route
                            path={TO_NEW_BOOK}
                            render={() => <NewBookFormContainer/>}
                        />
                        <Route
                            path={TO_EDIT_BOOK}
                            render={() => <BookEditorFormContainer/>}
                        />
                        <Redirect from="/" to={TO_CATALOG}/>
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
