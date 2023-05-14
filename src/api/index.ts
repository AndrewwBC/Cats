import Axios, { AxiosError } from 'axios';

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
        response ? setResponse(response.data[0]) : setResponse(false),
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
  DeleteUser: async () => { },
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
  GetComments: async (setComments: any, postCod: number) => {
    try {
      await Axios.get('http://localhost:3001/getcomments', {
        params: {
          postCod: postCod,
        },
      }).then((response) =>
        response.data.length >= 1
          ? setComments(response.data)
          : setComments(false),
      );
    } catch (err) {
      console.log(err);
      setComments(false);
    }
  },
  GetLikes: async (setLikes: any, postCod: number, userCod: number | boolean) => {
    try {
      await Axios.get('http://localhost:3001/getlikes', {
        params: {
          postCod: postCod,
          userCod: userCod
        },
      }).then((response) =>
        response.data.length >= 1 ? setLikes(response) : setLikes(false),
      );
    } catch (err) {
      console.log(err);
      setLikes(false);
    }
  },
  GetUser: async (setData: any, userCod: any) => {
    try {
      await Axios.get('http://localhost:3001/getuser', {
        params: {
          userCod: userCod,
        },
      }).then((response) =>
        response ? setData(response.data[0]) : setData(false),
      );
    } catch (err) {
      console.log(err);
      setData(false);
    }
  }
};

export const UserRequirements = {
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
  CheckEmail: async (email: string | undefined, setResponse: any, setLoad: any) => {
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
  PutComment: async (comment: any, postCod: any, userCod: any, userName: 'string') => {
    try {
      Axios.post('http://localhost:3001/putcomment', {
        comment: comment,
        postCod: postCod,
        userCod: userCod,
        userName: userName
      }).then((response) => console.log(response));
    } catch (err) {
      console.log(err);
    }
  },
  PutLikes: async (postCod: any, userCod: any, typeofChange: boolean) => {
    try {
      Axios.post('http://localhost:3001/putlike', {
        postCod: postCod,
        userCod: userCod,
        typeofchange: typeofChange,
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

  EmailFunctions: async (formData: any) => {
    try {
      const request = await Axios.post('http://localhost/ReactPHP/Mailer/EmailsFunctions.php', formData)
      return request
    } catch (error) {
      if(error instanceof AxiosError) 
      return error
    }
  },
  emailToChangePass: async (email: string) => {
    try {
      const request = await Axios.get('http://localhost/ReactPHP/Mailer/ForgotPassword.php', {
        params: { 
          emailPassword: email,
        },
      })
      return request
    } catch (error) {
      if(error instanceof AxiosError) 
      return error.response?.status
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
  GetPostsPHP: async (setPost: any) => {
    try {
      await Axios.get('http://localhost/ReactPHP/Funções/BancoDados.php', {
      }).then((response) =>
        setPost(response.data),
      );
    } catch (err) {
      console.log(err);
    } finally {
    }
  },
  GetLikes: async (postCod: number, userCod: number | boolean, fk: number) => {
    try {
      await Axios.get('http://localhost/ReactPHP/Funções/PostsData.php', {
        params: {
          postCod: postCod,
          userCod: userCod,
          functionKey: fk
        },
      }).then((response) =>
        console.log(response),
      );
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  GetHeart: async (setHeart:any, postCod: number, userCod: number | boolean, fk: number) => {
    try {
      await Axios.get('http://localhost/ReactPHP/Funções/GetHeart.php', {
        params: {
          postCod: postCod,
          userCod: userCod,
          functionKey: fk
        },
      }).then((response) => setHeart(response.data)
      );
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  PutDeleteLikes: async (formData: any) => {
    try {
      Axios.post('http://localhost/ReactPHP/Funções/UserActions.php', formData).then((response) => console.log(response));
    } catch (err) {
      console.log(err);
    }
  },
  PutDeleteComment: async (formData: any) => {
    try {
      Axios.post('http://localhost/ReactPHP/Funções/UserActions.php', formData
      ).then((response) => console.log(response.data));
    } catch (err) {
      console.log(err);
    }
  },
  UserActions: async (formData: any) => {
    try {
      const request =  await Axios.post('http://localhost/ReactPHP/Funções/UserActions.php', formData
      ).then((response) => response.data);
      const response = await request;
      return response
    } catch (err) {
      console.log(err);
      return err
    }
  },
  GetPostDatas: async (setComments: any, formData: any) => {
    try {
      await Axios.post('http://localhost/ReactPHP/Funções/PostsData.php', formData).then((response) =>
        response.data.length >= 1
          ? setComments(response.data)
          : setComments(false),
      );
    } catch (err) {
      console.log(err);
      setComments(false);
      return err;
    }
  },

};

export default Services;
