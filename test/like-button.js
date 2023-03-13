'use strict';

function MyButton(){
    return(
        <button>J'm a button</button>
    );
}
export default function MyApp(){
    return(
        <div>
            <h1>Welcome to my myapp</h1>
            <MyButton/>
        </div>
    )
}