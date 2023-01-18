export function Greetings({title, name="user"}) {
    const married = true;
    return <h1>{title} {name}</h1>;
  }
  
export function Greetings2() {
      const married = true;
      const user = {
          name: 'david',
          apellido: 'mg'
      }
      return <><h1>{user.name}</h1><h2>{user.apellido} {married.toString()}</h2></>
  }

  export function UserCard(props) {
    console.log(props)
    return <div>
      <h1>{props.name}</h1>
      <p>{props.amount}</p>
      <p>{props.married? "casado": "soltero"}</p>
      <p>{props.address.calle} {props.address.n}</p>
    </div>
  }