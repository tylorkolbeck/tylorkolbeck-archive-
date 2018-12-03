import React, { Component } from 'react'
import DrawerToggleButton from '../TopDrawer/DrawerToggleButton'
import './Toolbar.css'
import Logo from '../Logo/Logo'
import {NavLink} from 'react-router-dom'

class toolbar extends Component {
  
  render() {

    let newPostLink = null
    if (this.props.userCheck) {
      newPostLink =  <li><NavLink to='/new-post' exact>New</NavLink></li>
    } else {
      newPostLink = null
    }
  

    return (
        <header className="toolbar">
          <nav className="toolbar__navigation">
            <div className="toolbar__logo"><a href="/"><Logo /></a></div>
           
            <div className="center__spacer"></div>
            <div className="toolbar__navigation__items">
              <ul>
                <li><NavLink to='/' exact>Home</NavLink></li>
                {/* <li><NavLink to='/syncs'>Syncs</NavLink></li> */}
                <li><NavLink to='/all-posts' exact>Posts</NavLink></li>
                {/* <li><NavLink to='/about' exact>About</NavLink></li> */}
                <li><NavLink to='/contact' exact>Contact</NavLink></li>
                {/* <li><NavLink to='/new-post' exact>New</NavLink></li> */}
                {newPostLink}
                <li><NavLink to='/users/login' exact>{this.props.isLoggedIn}</NavLink></li>
                
                <li><span id="beta_label">beta</span></li>
              </ul>
            </div>
            <div className="toolbar__toggle-button">
              <DrawerToggleButton click={this.props.drawerClickedHander}/>
            </div>
          </nav>
        </header>
    )
  }
}

// const toolbar = props => (
//   <header className="toolbar">
//     <nav className="toolbar__navigation">
//       <div className="toolbar__logo"><a href="/"><Logo /></a></div>
     
//       <div className="center__spacer"></div>
//       <div className="toolbar__navigation__items">
//         <ul>
//           <li><NavLink to='/' exact>Home</NavLink></li>
//           {/* <li><NavLink to='/syncs'>Syncs</NavLink></li> */}
//           <li><NavLink to='/all-posts' exact>Posts</NavLink></li>
//           {/* <li><NavLink to='/about' exact>About</NavLink></li> */}
//           <li><NavLink to='/contact' exact>Contact</NavLink></li>
//           <li><NavLink to='/new-post' exact>New</NavLink></li>
//           <li><NavLink to='/users/login' exact>{props.isLoggedIn}</NavLink></li>
          
//           <li><span id="beta_label">beta</span></li>
//         </ul>
//       </div>
//       <div className="toolbar__toggle-button">
//         <DrawerToggleButton click={props.drawerClickedHander}/>
//       </div>
//     </nav>
//   </header>
// )

export default toolbar