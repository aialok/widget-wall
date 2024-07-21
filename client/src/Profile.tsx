import BookQuoteWidget from "./widgets/ Bookquote/BookQuote";

const Profile = () => {
  const bookData = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    quote:
      "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.",
    readBy: 18000000,
  };

  return (
    <div className=" w-[35%] pl-8 pt-16 max-h-screen overflow-auto">
      {/* <div className="h-48 w-48 rounded-full bg-black">
        <img
          className="h-48 w-48 rounded-full object-cover"
          src="https://creatorspace.imgix.net/users/clcr4pxwi0hdwo80yuqtp050c/l8mvVzVMjCWFcPLY-rogie-avatar.png?w=300&h=300"
          alt=""
        />
      </div> */}

      <h1 className="text-5xl font-bold my-2">Hi,John Doe</h1>
      <div className="my-2 text-lg leading-9">
        <p>born in Hamburg</p>
        <p>design enthusiast</p>
        <p>studying industrial design in kiel wip</p>
        <p>le monde est à vous</p>
      </div>

      <div>
        <BookQuoteWidget book={bookData} />
      </div>
    </div>
  );
};

export default Profile;
