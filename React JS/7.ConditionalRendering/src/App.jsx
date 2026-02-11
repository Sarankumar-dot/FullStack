
import './App.css'
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header'




function App() {
  let user = "saran";// sending this name to header 
  let user2 = "kumer";// ssending this to footer
  return (
    <>
    <div className='App'>
      <Header user = {user} />
      <Content /> 
      <Footer user = {user2} />
    </div>
    </>
  )
}

export default App
