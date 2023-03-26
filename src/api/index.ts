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
      }).then((response) => setURL(response.data[0].Link));
    } catch (err) {
      console.log(err);
    }
  },
  CheckUserName: async (username: string, setCheckUser: any) => {
    try {
      Axios.get('http://localhost:3001/checkusername', {
        params: { username: username },
      }).then((response) => setCheckUser(response.data));
    } catch (err) {
      console.log(err);
    }
  },
  CheckEmail: async (email: string, setError: any) => {
    try {
      Axios.get('http://localhost:3001/checkemail', {
        params: { email: email },
      }).then((response) => setError(response.data));
    } catch (err) {
      setError(false);
    }
  },
  CheckHashEmail: async (emailHash: string, setReload: any) => {
    try {
      Axios.get('http://localhost:3001/checkhashemail', {
        params: { email: emailHash },
      }).then((response) => setReload(response.data));
    } catch (err) {
      setReload(false);
    }
  },
};

export const PHP = {
  // testar com o hook direto no PHP também
  // PHP: async (setURL: any) => {
  //   try {
  //     const request = await fetch('http://localhost/ReactPHP/test.php');
  //     const result = await request.json();
  //     setURL(result);
  //     console.log(result);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //   }
  // },
  TESTE: async (formData: any) => {
    try {
      await Axios.post('http://localhost/ReactPHP/login.php', formData).then(
        (response) => console.log(response.data),
      );
    } catch (err) {
      console.log(err);
    }
  },
};

export default Services;
