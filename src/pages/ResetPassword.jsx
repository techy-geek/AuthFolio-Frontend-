const handleResetPassword = async (e) => {
  e.preventDefault();

  const trimmedPassword = password.trim();
  const trimmedConfirmPassword = confirmPassword.trim();

  if (!token) {
    toast.error("Invalid or expired reset link.");
    return;
  }

  if (trimmedPassword.length < 8) {
    toast.error("Password must be at least 8 characters.");
    return;
  }

  if (trimmedPassword !== trimmedConfirmPassword) {
    toast.error("Passwords do not match.");
    return;
  }

  try {
    const res = await axios.put(
      `https://authfolio.onrender.com/api/v1/user/password/reset/${token}`,
      {
        password: trimmedPassword,
        confirmPassword: trimmedConfirmPassword,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    toast.success(res.data.message);
    setIsAuthenticated(true);
    setUser(res.data.user);
  } catch (error) {
    toast.error(error?.response?.data?.message || "Something went wrong.");
  }
};
