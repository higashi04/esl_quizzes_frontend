const API_url = "http://localhost:8080/usuario/iniciar";
//login process
const login = async(userData) => {
    const response = await fetch(API_url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })
    if(response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => { localStorage.removeItem("user"); };
const authService = {
    logout,
    login
};

export default authService;