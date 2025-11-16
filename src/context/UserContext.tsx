import React, { createContext, useContext, useState } from "react";

interface User {
  nickname: string;
  email: string;
  profileImage: string | null;
  verified: boolean;
  studentId?: string;
  major?: string;
}

interface UserContextType {
  user: User;
  updateUser: (data: Partial<User>) => void;
}

const defaultUser: User = {
  nickname: "닉네임",
  email: "minswim2002@gmail.com",
  profileImage: null,
  verified: true,
  studentId: "20213416",
  major: "컴퓨터공학부",
};

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser);

  const updateUser = (data: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...data }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  return context;
}
