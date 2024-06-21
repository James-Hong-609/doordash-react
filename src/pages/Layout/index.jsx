import Navbar from '../../components/Navbar.jsx'
import Sidebar from '../../components/Sidebar.jsx'

function Layout({ children }) {

  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
    </>
  )
}

export default Layout;
