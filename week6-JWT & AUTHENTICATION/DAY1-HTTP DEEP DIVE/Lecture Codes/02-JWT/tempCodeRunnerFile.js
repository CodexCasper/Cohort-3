

    let foundUser = null;
    for( let i = 0 ; i < users.length ; i++ ){
        if( users[i].username == username && users[i].password == password ){
            foundUser = users[i];
        }
    }

    if(foundUser){