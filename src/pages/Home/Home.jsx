import NavBar from "../../common/NavBar/NavBar"
import Footer from "../../common/Footer/Footer";
import SearchBar from "./components/SearchBar";
import Contents from "./components/Contents"

export default function Home() {

  return (
    <div>
        <NavBar/>
        <SearchBar/>
        <Contents/>
        <Footer/>
    </div>
  )
}
