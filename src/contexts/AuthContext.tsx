
import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'user' | 'worker' | 'safety-professional' | 'inspector';

export type UserProfile = {
  name?: string;
  phone?: string;
  email: string;
  organization?: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  login: (email: string, password: string, role?: UserRole, profile?: Partial<UserProfile>) => void;
  logout: () => void;
  user: (UserProfile & { role: UserRole }) | null;
  updateProfile: (profile: Partial<UserProfile>) => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  user: null,
  updateProfile: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<(UserProfile & { role: UserRole }) | null>(null);
  
  // Check if user was previously logged in (using localStorage)
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUser(parsedUser);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (
    email: string, 
    password: string, 
    role: UserRole = 'user',
    profile: Partial<UserProfile> = {}
  ) => {
    // This is a simplified auth. In a real app, you'd validate credentials against a backend
    const userData = { 
      email, 
      role,
      name: profile.name || 'Inspector',
      phone: profile.phone || '(555) 123-4567',
      organization: profile.organization || 'Safety First Inspections'
    };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
  };

  const updateProfile = (profile: Partial<UserProfile>) => {
    if (user) {
      const updatedUser = { ...user, ...profile };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
