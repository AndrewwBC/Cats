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

  UserLogin: async (
    email: string,
    password: string,
    setResponse: any,
    setLoad: any,
  ) => {
    try {
      setLoad(true);
      await Axios.get('http://localhost:3001/login', {
        params: { email: email, password: password },
      }).then((response) =>
        response ? setResponse(response.data) : setResponse(false),
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoad(false);
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
  S3GetAllFiles: async (setFiles: any, setLoad: any, setTeste: any) => {
    try {
      setLoad(true);
      await Axios.get('http://localhost:3001/s3getallfiles').then((response) =>
        setFiles(response.data),
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoad(false);
      setTeste(true);
    }
  },
  GetPosts: async (setPost: any) => {
    try {
      await Axios.get('http://localhost:3001/getposts').then((response) =>
        setPost(response.data),
      );
    } catch (err) {
      console.log(err);
    } finally {
    }
  },
  GetComments: async (setComments: any) => {
    try {
      await Axios.get('http://localhost:3001/getcomments').then((response) =>
        setComments(response.data),
      );
    } catch (err) {
      console.log(err);
    }
  },
  GetLikes: async (setLikes: any) => {
    try {
      await Axios.get('http://localhost:3001/getlikes').then((response) =>
        setLikes(response.data),
      );
    } catch (err) {
      console.log(err);
    }
  },
};

export const UserRequirements = {
  ForgotPassword: async (
    setLoad: any,
    setError: any,
    email: string,
    setResponse: any,
  ) => {
    try {
      setLoad(true);
      await Axios.get('http://localhost:3001/forgotpassword', {
        params: { email: email },
      }).then((response) =>
        response.data.length === 1 ? setResponse(true) : setResponse(false),
      );
    } catch (error) {
      setError(true);
      setLoad(false);
      console.log(error);
    } finally {
      setLoad(false);
    }
  },
  ResetPassword: async (
    setLoad: any,
    setError: any,
    email: string,
    password: string,
    setResponse: any,
  ) => {
    try {
      setLoad(true);
      await Axios.post('http://localhost:3001/resetpassword', {
        password: password,
        email: email,
      }).then((response) => setResponse(response.data.affectedRows));
    } catch (error) {
      setError(true);
      setLoad(false);
      console.log(error);
    } finally {
      setLoad(false);
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
      }).then((response) =>
        response.data.length === 1 ? setCheckUser(true) : setCheckUser(false),
      );
    } catch (err) {
      console.log(err);
    }
  },
  GetUserName: async (cod: any, setGetUser: any) => {
    try {
      Axios.get('http://localhost:3001/checkusername', {
        params: { cod: cod },
      }).then((response) => setGetUser(response.data));
    } catch (err) {
      console.log(err);
    }
  },
  CheckEmail: async (email: string, setResponse: any, setLoad: any) => {
    try {
      await Axios.get('http://localhost:3001/checkemail', {
        params: { email: email },
      }).then((response) =>
        response.data.length === 1 ? setResponse(true) : setResponse(false),
      );
    } catch (err) {
      console.log(err);
    }
  },
  CheckHashEmail: async (emailHash: string, setReload: any) => {
    try {
      Axios.get('http://localhost:3001/checkhashemail', {
        params: { email: emailHash },
      }).then((response) => console.log(response));
      setReload(false);
    } catch (err) {
      setReload(false);
    } finally {
      setReload(true);
    }
  },
  PostPhoto: async (formData: any) => {
    try {
      await Axios.post('http://localhost:3001/postphoto', formData, {
        headers: { 'Content-Type': 'undefined' },
      }).then((response) => console.log(response));
    } catch (err) {
      console.log(err);
    } finally {
    }
  },
  PutComment: async (comment: any, postCod: any, userCod: any) => {
    try {
      Axios.post('http://localhost:3001/putcomment', {
        comment: comment,
        postCod: postCod,
        userCod: userCod,
      }).then((response) => console.log(response));
    } catch (err) {
      console.log(err);
    }
  },
  PutLikes: async (postCod: any, userCod: any) => {
    try {
      Axios.post('http://localhost:3001/putlike', {
        postCod: postCod,
        userCod: userCod,
      }).then((response) => console.log(response));
    } catch (err) {
      console.log(err);
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
      await Axios.post('http://localhost/ReactPHP/login.php').then((response) =>
        console.log(response),
      );
    } catch (err) {
      console.log(err);
    }
  },
  EmailEntrada: async (formData: any) => {
    try {
      await Axios.post(
        'http://localhost/ReactPHP/Funções/BancoDados.php',
        formData,
      ).then((response) => {
        console.log(response);
      });
    } catch (err) {
      console.log(err);
    }
  },
  Login: async (formData: any, setResponse: any, setLoad: any) => {
    try {
      setLoad(true);
      await Axios.post('http://localhost/ReactPHP/login.php', formData).then(
        (response) => setResponse(response.data),
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoad(false);
    }
  },
  Promoção: async (setResponse: any, setLoad: any) => {
    try {
      setLoad(true);
      await Axios.post('http://localhost/ReactPHP/promoção.php').then(
        (response) => setResponse(response.data),
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoad(false);
    }
  },
  Cadastro: async (formData: any, setResponse: any, setLoad: any) => {
    try {
      setLoad(true);
      await Axios.post('http://localhost/ReactPHP/cadastro.php', formData).then(
        (response) => setResponse(response.data),
      );
    } catch (err) {
      console.log(err);
    } finally {
      setLoad(false);
    }
  },
  ValidaEmail: async (setResponse: any, setLoad: any, token: any) => {
    try {
      await Axios.get('http://localhost/ReactPHP/validaEmail.php', {
        params: {
          token: token,
        },
      }).then((response) => setResponse(response));
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  },
};

export default Services;
