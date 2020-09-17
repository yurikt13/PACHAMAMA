import React from 'react';

const Header = () => {

    return (
        <div className="Container">
            <nav class="navbar navbar-expand-lg navbar-light bg-success">
                <a class="navbar-brand text-white" href="#">PACHAMAMA</a>
            </nav>

            <div className="btn-group">
                <button type="button" className="btn btn-success">Foro</button>
                <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Novedades</a>
                    <a className="dropdown-item" href="#">Mis chats</a>
                </div>
            </div>
        

            <div className="btn-group">
                <button type="button" className="btn btn-success">Plantas</button>
                <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Categorias</a>
                </div>
            </div>


            <div className="btn-group">
                <button type="button" className="btn btn-success">Recordatorios</button>
                <button type="button" className="btn btn-success dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="sr-only">Toggle Dropdown</span>
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Mis plantas</a>
                </div>
            </div >
        </div>
    )
};

export default Header;