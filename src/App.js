import BookCatalogContainer from './components/BookCatalog/BookCatalogContainer'
import {Provider} from 'react-redux'
import store from './redux/store'

const App = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <BookCatalogContainer/>
            </div>
        </Provider>
    )
}

export default App
