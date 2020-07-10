
const user_data = [
    {
       "id":7,
       "email":"michael.lawson@reqres.in",
       "first_name":"Michael",
       "last_name":"Lawson",
       "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    },
    {
       "id":8,
       "email":"lindsay.ferguson@reqres.in",
       "first_name":"Lindsay",
       "last_name":"Ferguson",
       "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
    },
    {
       "id":9,
       "email":"tobias.funke@reqres.in",
       "first_name":"Tobias",
       "last_name":"Funke",
       "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
    },
    {
       "id":10,
       "email":"byron.fields@reqres.in",
       "first_name":"Byron",
       "last_name":"Fields",
       "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
    },
    {
       "id":11,
       "email":"george.edwards@reqres.in",
       "first_name":"George",
       "last_name":"Edwards",
       "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
    },
    {
       "id":12,
       "email":"rachel.howell@reqres.in",
       "first_name":"Rachel",
       "last_name":"Howell",
       "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
    }
];

console.log(typeof(todo_list_items))
const jsx = (
    <div>
        <h2> User List</h2>
        <ol>
            { user_data.map(
                (user) =>
                        (
                            <li key={user.id}>
                                <div>
                                    <img src={user.avatar} /><h5>{user.first_name} {user.last_name}</h5>
                                    <small>{user.email}</small>
                                </div>
                                <hr />
                            </li>
                        )
            )}
        </ol>
    </div>
)

const render = () => {
    ReactDOM.render(jsx, document.getElementById('appRoot'))
}

render()