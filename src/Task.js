import './tasks.css'

export function TaskCard({ready}) {
    const styles = {background: 'gray', padding: '20px'}
    return <div style={styles}>
    <h1 className="my-card">Mi primer tarea</h1>
    <span className={ready === true? 'card-green': 'card-red'}>
        {ready === true? 'tarea completada': 'tarea pendiente'}
    </span>
    </div>
}