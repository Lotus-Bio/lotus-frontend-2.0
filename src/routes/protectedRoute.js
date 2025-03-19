"use client";

import { useAuth } from "@/context/AuthContext";
import Loading from "@/ui/components/Loading";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return user ? children : null;
};

export default ProtectedRoute;
