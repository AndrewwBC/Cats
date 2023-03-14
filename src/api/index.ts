import Axios from 'axios';

// Create, Read, Update, Delete

interface Register {
  username: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
}

const Services = {
  RegisterUser: async ({
    username,
    name,
    lastname,
    email,
    password,
  }: Register) => {
    try {
      Axios.post('http://localhost:3001/register', {
        username: username,
        name: name,
        lastname: lastname,
        email: email,
        password: password,
      }).then((response) => console.log(response));
    } catch (err) {
      console.log(err);
    } finally {
    }
  },

  UserLogin: async (email: string, password: string) => {
    try {
      Axios.get('http://localhost:3001/login', {
        params: { email: email, password: password },
      }).then((response) => console.log(response));
    } catch (err) {
      console.log(err);
    }
  },
  UpdateUser: async () => {
    try {
      Axios.put('http://localhost:3001/update').then((response) =>
        console.log(response),
      );
    } catch (err) {
      console.log(err);
    }
  },
  DeleteUser: async () => {},
};

export const UserRequirements = {
  ResetPassword: async (resetData: string) => {
    try {
      Axios.get('http://localhost:3001/forgotpassword', {
        params: { resetInput: resetData },
      }).then((response) => console.log(response));
    } catch (error) {
      console.log(error);
    }
  },
};

export default Services;
