// Required
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

// Components
import App from './App'

// CSS
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
    </BrowserRouter>
)
