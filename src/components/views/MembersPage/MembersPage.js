import React from 'react';
import TrackImg from '../../../Content/images/Silverstone_Circuit_2011.png';

export default function MembersPage() {
    return(
        <div className = "container">
            <div className = "row">
                <div className = "col-12">
                    <img 
                        id = "content"
                        src = {TrackImg}
                        alt = "silverstone">    
                    </img>
                </div>
            </div>
        </div>
    );
}