export default function SignUp(){
    return (
        <form onSubmit={e=>{
            e.preventDefault();
            alert('enviando')}}>
            <input></input>
            <button>Send</button>
        </form>
    )
}