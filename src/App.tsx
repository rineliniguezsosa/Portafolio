import { Link } from 'react-router'
import './App.css'

function App() {
  return (
    <main className='w-full h-screen bg-green border-2 border-red-500'>
        <section className='w-full border-2 border-red-500'>
          <header 
            className='w-full p-10 border-2 border-blue-500 bg-dark-600'>
              <nav>
                <Link to="#">Home</Link>
              </nav>
          </header>
          <div className='w-full px-5 py-10 border-2 border-yellow-500'>
            <div>
                <img src="../src/assets/images/rinelfoto.jpg" alt="rinel" />
            </div>
            <div>
              <h1>Rinel iñiguez sosa</h1>
              <p>mi description</p>
            </div>
          </div>
        </section>
    </main>
  )
}

export default App
