import Axios from 'axios';

// Create, Read, Update, Delete

interface Register {
  username: string;
  name: string;
  lastname: string;
  email: string;
  file: string | any;
  password: string;
}

const Services = {
  RegisterUser: async ({
    username,
    name,
    lastname,
    email,
    password,
    file,
  }: Register) => {
    try {
      Axios.post('http://localhost:3001/register', {
        username: username,
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        file: file,
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
  PostFeedPhoto: async (photoData: any) => {
    try {
      await Axios.post(`http://localhost:3001/upload`, photoData, {
        headers: { 'Content-Type': 'undefined' },
      }).then((response) => console.log(response));
    } catch (err) {
      console.log(err);
    }
  },
  TakePhoto: async (key: string) => {
    try {
      await Axios.get(`http://localhost:3001/images/${key}`, {
        params: { key: key },
      }).then((response) => console.log(response));
    } catch (err) {
      console.log(err);
    }
  },
  getURL: async (id: number, setURL: any) => {
    try {
      Axios.get('http://localhost:3001/getURL', {
        params: { id: id },
      })
        .then((response) => response)
        .then((res) => setURL(res));
    } catch (err) {
      console.log(err);
    }
  },
};

export default Services;
