import Axios from 'axios';

// Create, Read, Update, Delete

const Services = {
  RegisterUser: async (param1: number, param2: string) => {
    try {
      Axios.post('http://localhost:3001/register', {
        codigo: param1,
        nome: param2,
      }).then((response) => console.log(response));
    } catch (err) {
      console.log(err);
    } finally {
    }
  },
  ListUsers: async () => {
    try {
      Axios.get('http://localhost:3001/list').then((response) =>
        console.log(response),
      );
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

export default Services;
