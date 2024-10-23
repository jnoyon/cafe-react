import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Header from './components/Header'

function App() {

  return (
    <>
     <Header></Header>
      <div className="flex mt-5">
     
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
