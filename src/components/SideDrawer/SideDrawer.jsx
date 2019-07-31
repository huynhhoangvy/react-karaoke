import React from 'react';

import './SideDrawer.css';

export default function SideDrawer (props) {
    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <div className={drawerClasses}>
            {console.log(props.songList)}
            <ul>
                {props.songList.map(songList => (
                    <li>{songList}</li>
                ))}
            </ul>
        </div>
    );
};