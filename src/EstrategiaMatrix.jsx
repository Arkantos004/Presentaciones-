import React, { useState } from 'react';
import './EstrategiaMatrix.css';

const EstrategiaMatrix = () => {
  const [selectedCell, setSelectedCell] = useState(null);

  const estrategias = {
    FO: {
      title: 'FO (Fortalezas - Oportunidades)',
      color: '#667eea',
      emoji: '🚀',
      items: [
        {
          id: '2-2',
          title: 'Estrategia de Tecnología y Formación',
          content: 'Aprovechar la arquitectura tecnológica moderna de la plataforma para ofrecer formación digital especializada en belleza y emprendimiento, respondiendo al crecimiento del aprendizaje online y del emprendimiento femenino.'
        },
        {
          id: '3-5',
          title: 'Estrategia de Integración de Comercio Electrónico',
          content: 'Integrar la venta de productos de belleza dentro de la plataforma aprovechando la creciente tendencia del comercio electrónico y los marketplaces digitales.'
        }
      ]
    },
    DO: {
      title: 'DO (Debilidades - Oportunidades)',
      color: '#4facfe',
      emoji: '💡',
      items: [
        {
          id: '5-5',
          title: 'Estrategia de Marketing Digital',
          content: 'Reducir la falta de posicionamiento inicial mediante estrategias de marketing digital, redes sociales y colaboraciones con creadoras de contenido del sector belleza.'
        },
        {
          id: '3-2',
          title: 'Estrategia de Contenido Gratuito',
          content: 'Implementar estrategias de contenido gratuito inicial (webinars, clases demostrativas) para atraer usuarias y fomentar la adopción de la plataforma.'
        }
      ]
    },
    FA: {
      title: 'FA (Fortalezas - Amenazas)',
      color: '#f5576c',
      emoji: '🛡️',
      items: [
        {
          id: '1-1',
          title: 'Estrategia de Diferenciación',
          content: 'Utilizar la integración de comunidad, formación y comercio digital como elemento diferenciador frente a plataformas educativas tradicionales.'
        },
        {
          id: '2-3',
          title: 'Estrategia de Seguridad Digital',
          content: 'Implementar altos estándares de seguridad digital y protección de datos para generar confianza frente a posibles riesgos asociados a plataformas digitales.'
        }
      ]
    },
    DA: {
      title: 'DA (Debilidades - Amenazas)',
      color: '#fa709a',
      emoji: '⚠️',
      items: [
        {
          id: '3-5',
          title: 'Estrategia de Modelos de Negocio Flexibles',
          content: 'Implementar modelos de negocio flexibles (freemium, membresías o eventos pagos) para reducir el riesgo financiero en las primeras etapas del proyecto.'
        },
        {
          id: '1-4',
          title: 'Estrategia de Actualización Constante',
          content: 'Mantener actualización constante de la plataforma y del contenido para adaptarse a cambios tecnológicos y tendencias del mercado.'
        }
      ]
    }
  };

  return (
    <div className="estrategia-container">
      <div className="estrategia-header">
        <h1>Matriz de Estrategias FODA-CAME</h1>
        <p>Estrategias para maximizar fortalezas y oportunidades, reducir debilidades y amenazas</p>
      </div>

      <div className="estrategia-grid">
        {Object.entries(estrategias).map(([key, data]) => (
          <div
            key={key}
            className={`estrategia-card ${key.toLowerCase()}`}
            style={{ borderLeftColor: data.color }}
          >
            <div className="card-header" style={{ backgroundColor: data.color }}>
              <span className="emoji">{data.emoji}</span>
              <h2>{data.title}</h2>
            </div>

            <div className="card-content">
              {data.items.map((item, index) => (
                <div
                  key={index}
                  className="strategy-item"
                  onClick={() =>
                    setSelectedCell(
                      selectedCell === `${key}-${index}` ? null : `${key}-${index}`
                    )
                  }
                >
                  <div className="item-header">
                    <span className="item-number">{item.id}</span>
                    <h3>{item.title}</h3>
                    <div className="expand-icon">
                      {selectedCell === `${key}-${index}` ? '−' : '+'}
                    </div>
                  </div>
                  <div
                    className={`item-content ${
                      selectedCell === `${key}-${index}` ? 'expanded' : ''
                    }`}
                  >
                    <p>{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="legend">
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#667eea' }}></span>
          <span>FO: Fortalezas que aprovechan Oportunidades</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#4facfe' }}></span>
          <span>DO: Oportunidades para superar Debilidades</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#f5576c' }}></span>
          <span>FA: Fortalezas para enfrentar Amenazas</span>
        </div>
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#fa709a' }}></span>
          <span>DA: Estrategias defensivas para ambas</span>
        </div>
      </div>
    </div>
  );
};

export default EstrategiaMatrix;
