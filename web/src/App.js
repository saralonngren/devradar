import React, { useState } from 'react';
import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'


function App() {
  return(
    <div id="app">
    <aside>
      <strong>Cadastrar</strong>
      <form>
        <div class="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input name="github_username" id="github_username" required/>
        </div>

        <div class="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input name="techs" id="techs" required/>
        </div>
       
       <div className="input-group">
        <div class="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input name="latitude" id="latitude" required/>
        </div>

        <div class="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input name="longitude" id="longitude" required/>
        </div>
       </div>

       <button type="submit">Salvar</button>
      </form>
    </aside>
    <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/10124552?s=460&v=4" alt="Sara Lonngren"/>
            <div className="user-info">
              <strong>Sara Lonngren</strong>
              <strong>Ruby on Rails</strong>
            </div>
          </header>
          <p>Backend Developer at Agenda Edu ♥ </p>
          <a href="https://github.com/SaraLonngren">Acessar perfil no Github</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/10124552?s=460&v=4" alt="Sara Lonngren"/>
            <div className="user-info">
              <strong>Sara Lonngren</strong>
              <strong>Ruby on Rails</strong>
            </div>
          </header>
          <p>Backend Developer at Agenda Edu ♥</p>
          <a href="https://github.com/SaraLonngren">Acessar perfil no Github</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/10124552?s=460&v=4" alt="Sara Lonngren"/>
            <div className="user-info">
              <strong>Sara Lonngren</strong>
              <strong>Ruby on Rails</strong>
            </div>
          </header>
          <p>Backend Developer at Agenda Edu ♥</p>
          <a href="https://github.com/SaraLonngren">Acessar perfil no Github</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/10124552?s=460&v=4" alt="Sara Lonngren"/>
            <div className="user-info">
              <strong>Sara Lonngren</strong>
              <strong>Ruby on Rails</strong>
            </div>
          </header>
          <p>Backend Developer at Agenda Edu ♥</p>
          <a href="https://github.com/SaraLonngren">Acessar perfil no Github</a>
        </li>
      </ul>
    </main>
  </div>
  )
}

export default App;
