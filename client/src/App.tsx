import './App.css'
import Login from './Login';
import { AuthProvider } from './context/AuthProvider.tsx'

function App() {
  return (
    <>
      <main className='App'>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </main>
    </>
  );
};

export default App
