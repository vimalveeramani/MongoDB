db.createUser( { user : 'admin', pwd  : 'pass', roles: [ { role : 'readWrite', db   : 'admin' }, { role : 'userAdminAnyDatabase',db : 'admin' }]});
