import React from "react";
import logo from '../assets/logo.png';

export class Login extends React.Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
          <div className="content">
          <div className="image">
            <img src={logo} alt="Iniciar Sesión"/>
            <div className="header">Iniciar Sesión</div>
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Usuario</label>
              <input type="text" name="username" placeholder="Usuario" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="password" name="password" placeholder="Contraseña" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Iniciar Sesión
          </button>
        </div>
      </div>
    );
  }
}