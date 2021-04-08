import * as React from 'react';

function Divider(props){
    return(
        <div className="divider">
            <h3 className="proyect">
                {props.name}
            </h3>
        </div>
    );
}

export default Divider;