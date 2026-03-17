import React, { useState } from 'react';
import FodaMatrix from './FodaMatrix';
import EstrategiaMatrix from './EstrategiaMatrix';
import './Navigation.css';

function Navigation() {
  const [currentView, setCurrentView] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleViewChange = (viewName) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(viewName);
      setIsTransitioning(false);
    }, 500);
  };

  const handleBackHome = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView('home');
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="nav-container">
      {currentView === 'home' && (
        <div className={`home-view ${isTransitioning ? 'exit-animation' : 'enter-animation'}`}>
          <div className="home-header">
            <h1>Análisis Estratégico</h1>
            <p>Selecciona la matriz que deseas visualizar</p>
          </div>

          <div className="options-grid">
            <div className="option-card foda-card" onClick={() => handleViewChange('foda')}>
              <div className="option-icon">📊</div>
              <h2>Análisis FODA</h2>
              <p>Matriz de Fortalezas, Debilidades, Oportunidades y Amenazas</p>
              <button className="option-btn">Ver FODA</button>
            </div>

            <div className="option-card estrategia-card" onClick={() => handleViewChange('estrategia')}>
              <div className="option-icon">🎯</div>
              <h2>Matriz de Estrategias</h2>
              <p>Estrategias FODA-CAME combinadas para el éxito</p>
              <button className="option-btn">Ver Estrategias</button>
            </div>
          </div>
        </div>
      )}

      {currentView === 'foda' && (
        <div className={`view-wrapper ${isTransitioning ? 'exit-animation' : 'enter-animation'}`}>
          <button className="back-btn" onClick={handleBackHome}>
            ← Volver al menú
          </button>
          <FodaMatrix />
        </div>
      )}

      {currentView === 'estrategia' && (
        <div className={`view-wrapper ${isTransitioning ? 'exit-animation' : 'enter-animation'}`}>
          <button className="back-btn" onClick={handleBackHome}>
            ← Volver al menú
          </button>
          <EstrategiaMatrix />
        </div>
      )}
    </div>
  );
}

export default Navigation;
