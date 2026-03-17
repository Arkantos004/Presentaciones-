import React, { useState } from 'react';
import './FodaMatrix.css';

const FodaMatrix = () => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleItem = (itemKey) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemKey)) {
        newSet.delete(itemKey);
      } else {
        newSet.add(itemKey);
      }
      return newSet;
    });
  };

  const fodaData = {
    fortalezas: [
      'Propuesta de valor innovadora que integra educación digital, comunidad y oportunidades económicas en una sola plataforma.',
      'Arquitectura tecnológica moderna basada en tecnologías escalables (Golang, React y PostgreSQL).',
      'Enfoque en un nicho específico: mujeres interesadas en emprendimiento y desarrollo personal.',
      'Posibilidad de crecimiento escalable mediante infraestructura en la nube.',
      'Impacto social positivo al promover la independencia económica.'
    ],
    debilidades: [
      'Dependencia inicial del desarrollo tecnológico y del correcto funcionamiento de la plataforma.',
      'Recursos financieros limitados durante la fase inicial del proyecto.',
      'Necesidad de construir confianza digital en usuarias que no están acostumbradas a pagar por servicios online.',
      'Dependencia de la generación constante de contenido por parte de mentoras o expertas.',
      'Falta de posicionamiento inicial frente a plataformas educativas consolidadas.'
    ],
    oportunidades: [
      'Crecimiento acelerado de la economía digital y del aprendizaje online.',
      'Aumento del interés por el emprendimiento y el desarrollo profesional independiente.',
      'Posibilidad de alianzas con instituciones educativas, cámaras de comercio y organizaciones de apoyo al emprendimiento.',
      'Acceso a programas de financiamiento y apoyo para proyectos de innovación social.',
      'Crecimiento del uso de herramientas digitales para formación y networking profesional.'
    ],
    amenazas: [
      'Competencia de plataformas internacionales de educación digital.',
      'Preferencia de algunos usuarios por contenido gratuito en redes sociales.',
      'Riesgos asociados a la seguridad digital y protección de datos.',
      'Cambios rápidos en tendencias tecnológicas que pueden exigir actualización constante del sistema.',
      'Baja adopción inicial del mercado si no se logra generar suficiente comunidad.'
    ]
  };

  return (
    <div className="foda-container">
      <h1 className="foda-title">Análisis FODA</h1>
      
      <div className="foda-grid">
        {/* Fortalezas */}
        <div className="foda-card fortalezas">
          <div className="foda-header">
            <h2>Fortalezas</h2>
          </div>
          <ul className="foda-list">
            {fodaData.fortalezas.map((item, index) => {
              const itemKey = `fortaleza-${index}`;
              const isExpanded = expandedItems.has(itemKey);
              return (
                <li 
                  key={itemKey}
                  className={`foda-item ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => toggleItem(itemKey)}
                >
                  <span className="item-text">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Debilidades */}
        <div className="foda-card debilidades">
          <div className="foda-header">
            <h2>Debilidades</h2>
          </div>
          <ul className="foda-list">
            {fodaData.debilidades.map((item, index) => {
              const itemKey = `debilidad-${index}`;
              const isExpanded = expandedItems.has(itemKey);
              return (
                <li 
                  key={itemKey}
                  className={`foda-item ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => toggleItem(itemKey)}
                >
                  <span className="item-text">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Oportunidades */}
        <div className="foda-card oportunidades">
          <div className="foda-header">
            <h2>Oportunidades</h2>
          </div>
          <ul className="foda-list">
            {fodaData.oportunidades.map((item, index) => {
              const itemKey = `oportunidad-${index}`;
              const isExpanded = expandedItems.has(itemKey);
              return (
                <li 
                  key={itemKey}
                  className={`foda-item ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => toggleItem(itemKey)}
                >
                  <span className="item-text">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Amenazas */}
        <div className="foda-card amenazas">
          <div className="foda-header">
            <h2>Amenazas</h2>
          </div>
          <ul className="foda-list">
            {fodaData.amenazas.map((item, index) => {
              const itemKey = `amenaza-${index}`;
              const isExpanded = expandedItems.has(itemKey);
              return (
                <li 
                  key={itemKey}
                  className={`foda-item ${isExpanded ? 'expanded' : ''}`}
                  onClick={() => toggleItem(itemKey)}
                >
                  <span className="item-text">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FodaMatrix;
