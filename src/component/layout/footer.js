import React from 'react'
import "./footer.css"
import playStore from "../../react-icons/playstore.png"
import appStore from "../../react-icons/app-store.png"

const footer = () => {
  return (
      <footer id='footer'>
          <div class="leftFooter">
            <h4>Download our app</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playStore} alt ="playStore" />
            <img src={appStore} alt ="appStore" />
          </div>

          <div class="midFooter">
            <h1>CARX</h1>
            <p>High Quality is our first priority</p>
            
            <p>Copyrights 2025 &copy; Himudon </p>
            
          </div>

          <div class="rightFooter">
            <h4>
                 Follow Us.
            </h4>
            <a href='#' > Intsagram</a>
            <a href='#' > LinkeIn</a>
            <a href='#' > Github</a>
          </div>

      </footer>
  );
}

export default footer
