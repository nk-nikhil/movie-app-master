import React from 'react';
class Navbar extends React.Component{
    render(){
        return(
            <div className="nav">
                <div className="search-container">
                    <input type="text" style={{color:'#307fe2',opacity :1,background:'yellow',fontSize:20}} />
                    <button id="search-btn">Search</button>
                </div>

            </div>
        )
    }
}
export default Navbar;