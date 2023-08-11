import React from "react";
import logo from '../assets/logo.png';
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellidoM: "",
      apellidoP: "",
      email: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      showConfirmPassword: false,
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  toggleShowPassword = () => {
    this.setState((prevState) => ({ showPassword: !prevState.showPassword }));
  };

  toggleShowConfirmPassword = () => {
    this.setState((prevState) => ({
      showConfirmPassword: !prevState.showConfirmPassword,
    }));
  };

  handleSubmit = () => {
    // Validar el correo electrónico y las contraseñas
    if (!this.validateEmail(this.state.email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (this.state.password !== this.state.confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    // Realizar las acciones necesarias al enviar el formulario de registro
    const userData = {
      nombre: this.state.nombre,
      apellidoM: this.state.apellidoM,
      apellidoP: this.state.apellidoP,
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("login_registrar.php", userData)
      .then((response) => {
        // Manejar la respuesta del servidor si es necesario
        alert("Usuario registrado con éxito.");
        // Limpiar los campos del formulario después de enviar
        this.setState({
          nombre: "",
          apellidoM: "",
          apellidoP: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      })
      .catch((error) => {
        // Manejar errores en la solicitud al servidor
        console.error("Error en el registro:", error);
        alert("Ocurrió un error al intentar registrar el usuario.");
      });
  };

  validateEmail = (email) => {
    // Expresión regular para validar el formato del correo electrónico

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  render() {
    const { showPassword, showConfirmPassword } = this.state;
    const passwordFieldType = showPassword ? "text" : "password";
    const confirmPasswordFieldType = showConfirmPassword ? "text" : "password";

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="content">
          <div className="image">
            <img src={logo} alt="Registrarse" />
          </div>
          <div className="header">Registrarse</div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre(s)</label>
              <input type="text" name="nombre" placeholder="Ingresa tu Nombre(s)" value={this.state.nombre} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="apellidoP">Apellido Paterno</label>
              <input type="text" name="apellidoP" placeholder="Ingresa tu Apellido Paterno" value={this.state.apellidoP} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="apellidoM">Apellido Materno</label>
              <input type="text" name="apellidoM" placeholder="Ingresa tu Apellido Materno" value={this.state.apellidoM} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" name="email" placeholder="Correo" value={this.state.email} onChange={this.handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <div className="password-input">
                <input type={passwordFieldType} name="password" placeholder="Contraseña" value={this.state.password} onChange={this.handleInputChange} />
                <button type="button" className={`show-password-button ${showPassword ? "transparent" : ""}`} onClick={this.toggleShowPassword}>
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <div className="password-input">
                <input
                  type={confirmPasswordFieldType}
                  name="confirmPassword"
                  placeholder="Confirmar Contraseña"
                  value={this.state.confirmPassword}
                  onChange={this.handleInputChange}
                />
                <button
                  type="button"
                  className={`show-password-button ${showConfirmPassword ? "transparent" : ""}`}
                  onClick={this.toggleShowConfirmPassword}
                >
                  {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" name="btnregistrar" onClick={this.handleSubmit}>
            Registrarse
          </button>
        </div>
      </div>
    );
  }
}
