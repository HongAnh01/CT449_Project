import axios from 'axios'
const url = '/api/post'

export default class API {
    // get all the post into database
    static async getAllPost(){
        const res = await axios.get(url);
        return res.data;
    }

    // get follow id the post into database
    static async getPostById(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    // post follow id the post into database
    static async addPost(post){
        const res = await axios.post(url, post);
        return res.data;
    }

    // update follow id the post into database
    static async updatePostById(id, post){
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }

    // get follow id the post into database
    static async Delete(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }

    // register
    static async registerUser(userData) {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                return 'Registration successful';
            } else {
                const errorMessage = await response.text();
                throw new Error(`Registration failed: ${errorMessage}`);
            }
        } catch (error) {
            throw new Error(`Error during registration: ${error.message}`);
        }
    }

    //login
    static async loginUser(userData) {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                return 'Login successful';
            } else {
                const errorMessage = await response.text();
                throw new Error(`Login failed: ${errorMessage}`);
            }
        } catch (error) {
            throw new Error(`Error during login: ${error.message}`);
        }
    }
}
