import React, {useState} from 'react';
import {useEffect} from 'react';

import axios from 'axios';

//Functional component

const Fetch = () => {
    const [person, setPerson] = useState("");

    useEffect( () => {
            axios.get(`https://api.github.com/users/llloxim`)
                .then( res => {
                    const fetchedPerson = res.data.login;
                    console.log(res.data.login)
                    setPerson(fetchedPerson);
                })
        }, []);

    return (
        <h1>{person}</h1>
    );
}

export default Fetch