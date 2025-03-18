
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from './types';
import { users } from './data';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for saved auth on load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Failed to parse saved user data", error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would call an API
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock authentication - in a real app this would verify credentials with a backend
        const foundUser = users.find(u => u.email === email);
        if (foundUser) {
          setUser(foundUser);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(foundUser));
          resolve(true);
        } else {
          resolve(false);
        }
      }, 800); // Simulate network delay
    });
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Check if user already exists
        const existingUser = users.find(u => u.email === email);
        if (existingUser) {
          resolve(false);
          return;
        }

        // Create new user
        const newUser: User = {
          id: `user-${Date.now()}`,
          email,
          name,
          preferences: {
            theme: 'system',
            fontSize: 'medium',
            reduceMotion: false,
            highContrast: false
          }
        };

        // In a real app, would save to backend
        users.push(newUser);
        
        setUser(newUser);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(newUser));
        resolve(true);
      }, 800); // Simulate network delay
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
