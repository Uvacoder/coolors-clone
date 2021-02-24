import { useState, useEffect } from "react";
import { auth } from "../firebase";

function useAuth() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const authSubscription = auth.onAuthStateChanged((user) => {
      setAuthLoading(false);
      user ? setUser(user) : setUser(null);
    });

    return () => {
      authSubscription();
    };
  }, []);

  return [user, authLoading];
}

export default useAuth;
