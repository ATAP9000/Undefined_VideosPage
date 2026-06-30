import { useState, useCallback } from 'react';
import videos from '../../videos.json';
import Header from './Header.jsx';
import Modal from './Modal.jsx';
import './VideoPlayer.css';

function getRandomVideo() {
    return videos[Math.floor(Math.random() * videos.length)];
}

const MAX_FAILS = 3;

function VideoPlayer() {
    const [currentVideo, setCurrentVideo] = useState(() => getRandomVideo());
    const [showModal, setShowModal] = useState(false);
    const [failCount, setFailCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const randomVideo = useCallback(() => {
        setCurrentVideo(getRandomVideo());
        setFailCount(0);
    }, []);

    const handleError = useCallback(() => {
        setLoading(false);
        setFailCount((c) => {
            const next = c + 1;
            if (next >= MAX_FAILS) return next;
            setCurrentVideo(getRandomVideo());
            return next;
        });
    }, []);

    if (!videos || videos.length === 0) {
        return (
            <div className="player">
                <p>No videos available.</p>
            </div>
        );
    }

    if (!currentVideo) return null;

    return (
        <div className="player">
            <div className="player__overlay">
                {showModal && <Modal video={currentVideo} onClose={() => setShowModal(false)} />}
            </div>
            <Header />
            <div className="player__video-box">
                {loading && <div className="player__shimmer" />}
                <div className="player__video-wrapper">
                    {failCount >= MAX_FAILS ? (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                            <p>Parece que el servidor de videos no está bien</p>
                        </div>
                    ) : (
                        <video
                            className="player__video"
                            key={currentVideo.Video}
                            src={currentVideo.Video}
                            onEnded={randomVideo}
                            onError={handleError}
                            onLoadStart={() => setLoading(true)}
                            onCanPlay={() => { setLoading(false); setFailCount(0); }}
                            autoPlay
                            controls
                        />
                    )}
                </div>
                <button className="player__refresh" onClick={randomVideo}>↻</button>
            </div>
            <footer className="footer">
                <a target="_blank" href="https://www.youtube.com/watch?v=HdzImxI47W4" rel="noopener noreferrer">
                    <img className="footer__akari" src="/akariDance.gif" alt="" />
                </a>
                <p className="footer__disclaimer">
                    El contenido de ésta página pertenece a sus creadores y productores a
                    menos que se especifique lo contrario.
                </p>
                <input
                    className="footer__sauce-btn"
                    type="image"
                    src="/sauce.png"
                    alt="Video information"
                    onClick={() => setShowModal(true)}
                />
            </footer>
        </div>
    );
}

export default VideoPlayer;
