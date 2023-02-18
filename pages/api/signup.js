export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, email, password } = req.body;

  // Perform your sign-up logic here
  // ...

  res.status(200).json({ message: "Sign up successful" });
}
