

class User {
  static register = async (req, res) => {
    try {
      const { username, email, password, phonenumber } = req.body;
      if (!username || !email || !password || !phonenumber) throw new Error();
    } catch (error) {
      return res.send(error.message);
    }
  };
}

export default User; 