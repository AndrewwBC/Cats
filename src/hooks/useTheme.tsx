import { useContext } from 'react';
import { UserContext } from '../providers/userContext';

function useTheme() {
  const { theme, setTheme } = useContext(UserContext);
  return {
    theme,
    setTheme,
  };
}

export default useTheme;
