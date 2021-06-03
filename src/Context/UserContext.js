import React from 'react';
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from 'Services/Api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({
        username,
        password,
        loading,
        error
      });

      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Error: Invalid user`);
      const { token } = await response.json();
      localStorage.setItem('token', token);
      await getUser(token);
      navigate('/account');
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = React.useCallback(
    function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      localStorage.removeItem('token');
      navigate('/login');
    },
    [navigate]
  );

  React.useEffect(() => {
    async function checkSession() {
      const token = localStorage.getItem('token');

      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);

          if (!response.ok) throw new Error('Invalid Token');
          await getUser(token);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    checkSession();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, login, error, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
