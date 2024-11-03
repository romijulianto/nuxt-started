import { defineEventHandler, getQuery } from "h3";

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const userId = query.id;

  if (!userId) {
    return {
      status: 400,
      message: "User ID is required",
    };
  }

  const users = [
    { id: "1", name: "John Doe", email: "john@example.com" },
    { id: "2", name: "Jane Doe", email: "jane@example.com" },
  ];

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return {
      status: 404,
      message: "User not found",
    };
  }

  return {
    status: 200,
    data: user,
  };
});
