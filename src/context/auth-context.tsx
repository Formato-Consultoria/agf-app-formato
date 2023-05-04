import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { AuthContext, useContextAuth } from '@/hooks/useAuthUser';
import { auth } from '@/firebase/authFirebase';

export const AuthProvider: React.FC<{ children: ReactNode}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

type PrivateRouteProps = {
    children: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { isAuthenticated } = useContextAuth();
    const router = useRouter();
  
    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/login');
      }
    }, [isAuthenticated, router]);
  
    return (isAuthenticated) ? <>{children}</> : null;
};

export { AuthContext, PrivateRoute };