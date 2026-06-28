import { useEffect } from 'react';
import './Modal.css';

function Modal({ video, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!video) return null;

  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={onClose}></div>
      <div className="modal__box">
        <div className="modal__content">
          <div className="modal__info">
            {video.Name && (
              <div className="modal__row">
                <div className="modal__label">Video</div>
                <div className="modal__value">{video.Name}</div>
              </div>
            )}
            {video.Source && (
              <div className="modal__row">
                <div className="modal__label">source</div>
                <div className="modal__value">
                  {video.Source.startsWith('http')
                    ? <a target="_blank" href={video.Source} rel="noopener noreferrer">{video.Source}</a>
                    : video.Source
                  }
                </div>
              </div>
            )}
            {video.Movie && (
              <div className="modal__row">
                <div className="modal__label">Película</div>
                <div className="modal__value">{video.Movie}</div>
              </div>
            )}
            {video.Music && (
              <div className="modal__row">
                <div className="modal__label">Música</div>
                <div className="modal__value">{video.Music}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
