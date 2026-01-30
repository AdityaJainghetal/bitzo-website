import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { RewardProvider } from './context/RewardContext'
function App() {
  return (
    // <BrowserRouter>
    //   <AppRoutes />
    // </BrowserRouter>

    <RewardProvider>
     <BrowserRouter>
    <AppRoutes/>
    </BrowserRouter>
  </RewardProvider>
  )
}

export default App