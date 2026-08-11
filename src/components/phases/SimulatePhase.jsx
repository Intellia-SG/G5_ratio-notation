// src/components/phases/SimulatePhase.jsx
import React, { useEffect, useRef } from 'react';
import './SimulatePhase.css';
import PaintAlchemistStation from '../simulations/PaintAlchemistStation.jsx';
import PixelMosaicStation from '../simulations/PixelMosaicStation.jsx';
import RatioScaleBeamStation from '../simulations/RatioScaleBeamStation.jsx';
import NotationCipherStation from '../simulations/NotationCipherStation.jsx';
import { useAudio } from '../../hooks/useAudio.js';
import { simStationIntro } from '../../utils/narration.js';

const STATIONS = [
  { id: 0, label: 'A', name: 'Color Alchemist',   icon: '🎨', desc: 'Mix liquid droplets into ratio notation' },
  { id: 1, label: 'B', name: 'Pixel Mosaic',     icon: '🖼️', desc: 'Build part-to-part & part-to-whole patterns' },
  { id: 2, label: 'C', name: 'Balance Beam',     icon: '⚖️', desc: 'Scale ratio weights in equilibrium' },
  { id: 3, label: 'D', name: 'Notation Vault',   icon: '🔐', desc: 'Crack cipher locks with ratio notation' },
];

export default function SimulatePhase({ state, dispatch }) {
  const { narrate, stopAll } = useAudio(state.audioEnabled);
  const prevStation = useRef(-1);

  const s = state.currentSimStation || 0;

  useEffect(() => {
    if (prevStation.current !== s) {
      prevStation.current = s;
      stopAll();
      setTimeout(() => narrate(simStationIntro(s)), 400);
    }
  }, [s, narrate, stopAll]);

  useEffect(() => {
    return () => stopAll();
  }, [stopAll]);

  function handleStationComplete(stationIdx) {
    stopAll();
    dispatch({ type: 'COMPLETE_SIM_STATION', payload: stationIdx });
    if (stationIdx < 3) {
      setTimeout(() => dispatch({ type: 'SET_SIM_STATION', payload: stationIdx + 1 }), 400);
    } else {
      setTimeout(() => dispatch({ type: 'SET_PHASE', payload: 'play' }), 800);
    }
  }

  function goToPrev() {
    stopAll();
    dispatch({ type: 'PREV_SIM_STATION' });
  }

  function goToNext() {
    stopAll();
    dispatch({ type: 'ADVANCE_SIM_STATION' });
  }

  return (
    <div className="sim-wrap">
      <div className="sim-card glass-card">
        {/* Stations Tab Bar */}
        <div className="sim-tabs" role="tablist">
          {STATIONS.map((st) => (
            <button
              key={st.id}
              role="tab"
              type="button"
              aria-selected={s === st.id}
              className={`sim-tab ${s === st.id ? 'active' : ''} ${state.simStationsComplete?.[st.id] ? 'done' : ''}`}
              onClick={() => {
                stopAll();
                dispatch({ type: 'SET_SIM_STATION', payload: st.id });
              }}
              aria-label={`Station ${st.label}: ${st.name}`}
            >
              <span className="tab-icon">{state.simStationsComplete?.[st.id] ? '✅' : st.icon}</span>
              <span className="tab-name">{st.name}</span>
            </button>
          ))}
        </div>

        {/* Station Content Area */}
        <div className="sim-station-area" role="tabpanel" key={s}>
          {s === 0 && <PaintAlchemistStation onComplete={() => handleStationComplete(0)} audioEnabled={state.audioEnabled} />}
          {s === 1 && <PixelMosaicStation onComplete={() => handleStationComplete(1)} audioEnabled={state.audioEnabled} />}
          {s === 2 && <RatioScaleBeamStation onComplete={() => handleStationComplete(2)} audioEnabled={state.audioEnabled} />}
          {s === 3 && <NotationCipherStation onComplete={() => handleStationComplete(3)} audioEnabled={state.audioEnabled} />}
        </div>

        {/* Footer Navigation */}
        <div className="sim-footer">
          <button type="button" className="btn-outline" onClick={goToPrev} disabled={s === 0}>
            ← Previous Lab
          </button>
          <div className="sim-progress-dots">
            {STATIONS.map((st) => (
              <span
                key={st.id}
                className={`sim-dot ${s === st.id ? 'active' : ''} ${state.simStationsComplete?.[st.id] ? 'done' : ''}`}
              />
            ))}
          </div>
          {s < 3 ? (
            <button
              type="button"
              className={state.simStationsComplete?.[s] ? "btn-primary" : "btn-outline"}
              onClick={goToNext}
            >
              Next Lab →
            </button>
          ) : (
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                stopAll();
                dispatch({ type: 'SET_PHASE', payload: 'play' });
              }}
            >
              Start Practicing! 🎮
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
