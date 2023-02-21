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

function Button3({onClick, children}){
    return (
        <button onClick={e=>{
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    )
}
function PlayButton({movieName}) {
    function handlePlayClick({movieName}) {
        alert('Playing', {movieName})
    }
    return (
        <Button3 onClick={()=> alert('werere')}>
            Play "{movieName}"
        </Button3>
    )
}

function UploadButton(){
    return (
        <Button3 onClick={()=> alert('uploading')}>
            Upload morro
        </Button3>
    )
}

export function Toolbar(){
    return (
        <div onClick={() => {alert('clickeaste el toolbar')}}>
            <PlayButton movieName="valv"></PlayButton>
            <UploadButton></UploadButton>
        </div>
    )
}