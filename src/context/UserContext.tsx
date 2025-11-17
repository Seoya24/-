import React, { createContext, useContext, useState } from "react";

interface Notification {
  id: number;
  message: string;
  createdAt: string;
  read: boolean;
}

interface User {
  id: string;
  nickname: string;
  email: string;
  profileImage: string | null;
  verified: boolean;
  studentId?: string;
  major?: string;

  notifications: Notification[];
}

interface UserContextType {
  user: User;
  updateUser: (data: Partial<User>) => void;

  addNotification: (message: string) => void;
  markAsRead: (id: number) => void;
  clearNotifications: () => void;

  // ⭐ 읽지 않은 알림 수
  unreadCount: number;
}

const defaultUser: User = {
  id: "user123",
  nickname: "닉네임",
  email: "minswim2002@gmail.com",
  profileImage: null,
  verified: true,
  studentId: "20213416",
  major: "컴퓨터공학부",

  notifications: [],
};

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser);

  const updateUser = (data: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...data }));
  };

  const addNotification = (message: string) => {
    const newNotification: Notification = {
      id: Date.now(),
      message,
      createdAt: new Date().toISOString(),
      read: false,
    };

    setUser((prev) => ({
      ...prev,
      notifications: [newNotification, ...prev.notifications],
    }));
  };

  const markAsRead = (id: number) => {
    setUser((prev) => ({
      ...prev,
      notifications: prev.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    }));
  };

  const clearNotifications = () => {
    setUser((prev) => ({
      ...prev,
      notifications: [],
    }));
  };

  // ⭐ 읽지 않은 알림 수 자동 계산
  const unreadCount = user.notifications.filter((n) => !n.read).length;

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        addNotification,
        markAsRead,
        clearNotifications,
        unreadCount,
      }}
    >
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
