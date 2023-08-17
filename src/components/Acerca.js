import React from "react";
import aboutImage from "../assets/about-image.jpg"; // Reemplaza con la ruta correcta de tu imagen

const Acerca = () => {
  return (
    <div class="contenedor">
    <div className="about-page">
      <h1 className="about-title">Acerca de Nosotros</h1>
      <p className="about-description">
      El “Servicio de Administración y Enajenación de Bienes de Entidades del Gobierno del Estado de Sonora”, 
      es un organismo Público Descentralizado sectorizado a la Secretaría de Hacienda, con personalidad jurídica 
      y patrimonio propios, que tiene por objeto promover ante la dependencia coordinadora de sector respectiva 
      la disolución, liquidación o extinción de las entidades de la Administración Pública Paraestatal y, en su caso,
      instrumentar estos procesos previa determinación del Gobernador del Estado, cuando hayan cumplido o dejen de cumplir 
      con el objeto para el que fueron creados, en los términos previstos en la Ley Orgánica del Poder Ejecutivo del Estado 
      de Sonora.
      </p>
      <img className="about-image" src={aboutImage} alt="Acerca de Nosotros" />
      <h1 className="about-title">Principal Objetivo</h1>
      <p className="about-description">
      Somos una entidad encargada de recuperación de activos y venta de bienes de los fondos y fideicomisos en extinción, por disposición del gobernador del estado, cuando las mismas han dejado de cumplir con su objetivo, orientando así a una mejora en la Administración Pública Estatal.
      <br/>Esta recuperación se destinará para inversiones en apoyo a proyectos productivos conforme a los programas institucionales aprobados por el Gobierno Estatal.
      </p>
    </div>
    </div>
  );
};

export default Acerca;
