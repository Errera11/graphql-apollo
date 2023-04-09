import './App.css';
import {useState} from "react";
import {useMutation, useQuery} from '@apollo/client';
import {CREATE_USER, GET_ALL_USERS, GET_ONE_USER} from './service/users';

function App() {

    const {loading, error, data, refetch} = useQuery(GET_ALL_USERS);
    const {data: oneUserData} = useQuery(GET_ONE_USER , {variables: {name: "hello"}});

    const [create] = useMutation(CREATE_USER);

    const getUsers = () => {
        refetch();
    }

    const getOneUser = () => {
        console.log(oneUserData)
    }

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');

    const createUser = async () => {
        await create({
            variables: {
                input: {
                    name,
                    posts: {title}
                }
            }
        })
    }

    return (
        <div className={'container'}>
            <div className={'formContainer'}>
                <div className='form'>
                    <form>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type='text'
                            placeholder={'User Name'}
                            className={'input'}/>
                        <input type='text'
                               value={title}
                               onChange={e => setTitle(e.target.value)}
                               placeholder={'Post title'}
                               className={'input'}/>
                        <div className={'buttons'}>
                            <input
                                onClick={() => createUser()}
                                type='button' value='Post' className={'button'}/>
                            <input
                                onClick={() => getUsers()}
                                type='button' value='Get' className={'button'}/>
                        </div>

                    </form>
                </div>
                <div className={'list'}>
                    {loading ? <div>Loading...</div> : data.getAllUsers.map(item => <div className={'item'}>
                        id: {item?._id} <br/> name: {item?.name}<br/> Post title: {item?.posts[0].title}<br/>
                    </div>)}
                </div>
            </div>
        </div>
    );
}

export default App;
