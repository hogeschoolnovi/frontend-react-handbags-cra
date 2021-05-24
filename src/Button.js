


/*
function Button(props) {
    return (
    <button
        onClick={() => console.log("to the collection")}>{props.subject}
    </button>
    );

}

export default Button;*/

function Button(props) {

    return (
    <button
        onClick={() => console.log(props.subject)}>{props.subject}
    </button>
    );
}

export default Button;
