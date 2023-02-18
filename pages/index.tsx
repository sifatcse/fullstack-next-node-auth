import Link from "next/link";

const Home = () => {
  return (
    <div className="container">
      <h1 className="heading">Welcome to my app</h1>
      <p className="button">
        <Link href="/signup">Sign Up
        </Link>
      </p>
      <p className="button">
        <Link href="/signin">Sign In</Link>
      </p>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #fff;
        }
        .heading {
          font-size: 2rem;
          margin-bottom: 2rem;
        }
        .button {
          background-color: green;
          color: white;
          padding: 1rem;
          border-radius: 5.25rem;
          text-align: center;
          margin-bottom: 1rem;
          border-radius: 
          border-width: 550px;
        }
        .button:hover {
          background-color: #0a54a5;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Home;
