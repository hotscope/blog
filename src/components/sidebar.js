import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/image"

const Sidebar = ({ }) => (
  <aside
    style={{
      order: `0`,
      display: `flex`,
      flexDirection: `column`,
      flexWrap: `wrap`,
      justifyContent: `flex-start`,
      padding: `2.5rem 3rem`,
      width: `250px`,
      minWidth: `230px`,
      backgroundColor: `white`,
      zIndex: `5`,
    }}
  >

        <div id="logo" style={{
          marginBottom: `40px`,
          order: `2`,
          height: `80px`,
        }}>
        <Link to="/">
        <div style={{
          maxWidth: `80px`,
          height: `auto`
        }}>
          <Logo />
        </div>
        </Link>
        </div>

        <div id="listOfPosts" style={{
          order: `2`,
        }}>
          <h3>Recent Posts</h3>
          <Link to="/page-2/">The full scope</Link>
        </div>

        <footer style={{
          position: `absolute`,
          bottom: `30px`,
          fontSize: `17px`,
        }}>
          © {new Date().getFullYear()} Hotscope
        </footer>


  </aside>
)

export default Sidebar
