import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import configureStore from './redux/store.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
)
