export default {
    //called when the user attempts to login
    login: ({username}) => {
    localStorage.setItem('username', username);
    //Accepts all username/password combination
    return Promise.resolve();
    },


    //Called when user clocked on logout button
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },


    //Called when an API returns an error
    checkError: ({status}) => {
        if (status ===401 || status === 403){
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },


    //called when the user naviagtes to the new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username')
        ? Promise.resolve()
        : Promise.reject();
    },


    //called when the user navigates to the new location to check for permissions/ roles
    getPermissions: () => Promise.resolve(),
};