export default function Greeting({ isLoggedIn, hasUnread, isAdmin }) {
  //   if (isLoggedIn) {
  //     return <h2>Welcome back</h2>;
  //   } else {
  //     return <h2>Please log in</h2>;
  //   }

  //Ternary operator and Short-circuit
  return (
    <div>
      {/* <h2>{isLoggedIn ? "Welcome back" : "Please log in"}</h2> */}
      <h2>{hasUnread && <p>You have unread messages</p>}</h2>
      <p>{hasUnread ? "You have unread messages" : ""}</p>
      <h2>
        {isAdmin && <p style={{ color: "red" }}>you have admin priviliages</p>}
      </h2>
    </div>
  );
}

//I would like to see if you are an admin or not
//if you are admin write a message in red color that you have
//admin priviliages
