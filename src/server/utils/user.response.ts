interface IUserResponse {
    user: {
      id: number;
      name: string;
      role: string;
    };
    token: string;
  }
  
  export default IUserResponse;  