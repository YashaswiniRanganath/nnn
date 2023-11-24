import "./header.css";

export default function Header({children}){

    return (<div className="new">
        <div className="SideBar">
            <div className="field">
                <img className="LogoApp" src="logo192.png" alt="X"></img>
                <h1 className="NameWebsite">Shey Rooms</h1>
                <h1 className="HOME_BUTTON clicked btn">Hooime</h1>
                <h1 className="SEARCH_BUTTON Nclicked btn">Search</h1>
                <h1 className="PLAYLISTS_BUTTON Nclicked btn">Playlists</h1>
            </div>
            
       </div>
        {children}
    </div>

);
}