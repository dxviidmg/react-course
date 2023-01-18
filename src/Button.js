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