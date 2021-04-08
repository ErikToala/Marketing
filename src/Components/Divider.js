import * as React from 'react';

function Divider(props){
    return(
        <div className="divider">
            <h1>
                {props.name}
            </h1>
        </div>
    );
}

export default Divider;