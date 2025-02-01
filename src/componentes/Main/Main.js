import './Main.css';

import Playlist1 from '../../assets/playlist/1.jpeg';
import Playlist2 from '../../assets/playlist/2.png';
import Playlist3 from '../../assets/playlist/3.jpeg';
import Playlist4 from '../../assets/playlist/4.jpeg';
import Playlist5 from '../../assets/playlist/5.jpeg';
import Playlist6 from '../../assets/playlist/6.jpeg';
import Playlist7 from '../../assets/playlist/7.jpeg';
import Playlist8 from '../../assets/playlist/8.jpeg';
import Playlist9 from '../../assets/playlist/9.jpeg';
import Playlist10 from '../../assets/playlist/10.jpeg';
import Playlist11 from '../../assets/playlist/11.jpeg';
import Playlist12 from '../../assets/playlist/12.jpeg';
import Playlist13 from '../../assets/playlist/13.jpeg';
import Playlist14 from '../../assets/playlist/14.jpeg';
import Playlist15 from '../../assets/playlist/15.jpeg';

const Main = () => {
    return (
        <div className="playlist-container">
            <div id="result-playlists">
                <div className="playlist">
                    <h1 id="greeting">Boas vindas</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>
                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            {[ // Lista de playlists
                                { img: Playlist1, title: "Boas festas" },
                                { img: Playlist2, title: "Feitos para você" },
                                { img: Playlist3, title: "Lançamentos" },
                                { img: Playlist4, title: "Creators" },
                                { img: Playlist5, title: "Para treinar" },
                                { img: Playlist6, title: "Podcasts" },
                                { img: Playlist7, title: "Sertanejo" },
                                { img: Playlist8, title: "Samba e pagode" },
                                { img: Playlist9, title: "Funk" },
                                { img: Playlist10, title: "MPB" },
                                { img: Playlist11, title: "Rock" },
                                { img: Playlist12, title: "Hip Hop" },
                                { img: Playlist13, title: "Indie" },
                                { img: Playlist14, title: "Relax" },
                                { img: Playlist15, title: "Música Latina" },
                            ].map((playlist, index) => (
                                <button key={index} className="cards">
                                    <div className={`cards card${index + 1}`}>
                                        <img src={playlist.img} alt={playlist.title} />
                                        <span>{playlist.title}</span>
                                    </div>
                                </button>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
            <div id="result-artist" className="hidden">
                <div className="grid-container">
                    <div className="artist-card">
                        <div className="card-img">
                            <img id="artist-img" className="artist-img" alt="Artista" />
                            <div className="play">
                                <span className="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div className="card-text">
                            <button className="vst">
                                <span className="artist-name" id="artist-name"></span>
                                <span className="artist-categorie">Artista</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;
