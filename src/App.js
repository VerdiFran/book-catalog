import BookCatalogContainer from './components/BookCatalog/BookCatalogContainer'
import {Provider} from 'react-redux'
import store from './redux/store'
import Header from './components/Header/Header'
import {Layout} from 'antd'

const App = () => {
    const {Content} = Layout

    return (
        <Provider store={store}>
            <div className="App">
                <Header/>
                <Content>
                    <BookCatalogContainer/>
                </Content>
            </div>
        </Provider>
    )
}

export default App
