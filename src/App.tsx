import { AppRoutes } from './routers';
import { ThemeProvider } from './context/ThemeContext'; 
import './index.css'; 

const App = () => {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;