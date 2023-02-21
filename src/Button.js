import PropTypes from 'prop-types'; // ES6


export function Button({text, name='alguien'}){
    return <button onClick={function() {
        console.log('paga')
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}


export function Button2(){
    function handleClick(){
        alert('me diste click')
    }

    return <button onClick={handleClick}>
        I don´t do anything
    </button>
}

export function AlertButton({message, children}){
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    )
}

export function Play