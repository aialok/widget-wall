import BookQuoteWidget from "./widgets/ Bookquote/BookQuote";
import HealthTrackerWidget from "./widgets/HealthTracker/HealthTracker";
import OpportunityBoardWidget from "./widgets/OpportunityBoard/OpportunityBoard";

const Profile = () => {
  const bookData = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    quote:
      "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.",
    readBy: 18000000,
  };

  const healthData = {
    steps: 8500,
    caloriesBurned: 350,
    activeMinutes: 45,
    stepsGoal: 10000,
    caloriesGoal: 500,
    activeMinutesGoal: 60,
  };

  const opportunities = [
    {
      id: "1",
      title: "Frontend Developer",
      fromTeam: "Development",
      forTeam: "Product",
      tags: ["React", "JavaScript", "CSS"],
    },
    {
      id: "2",
      title: "Backend Developer",
      fromTeam: "Development",
      forTeam: "Infrastructure",
      tags: ["Node.js", "Express", "MongoDB"],
    },
    {
      id: "3",
      title: "UI/UX Designer",
      fromTeam: "Design",
      forTeam: "Product",
      tags: ["Sketch", "Figma", "Prototyping"],
    },
    {
      id: "4",
      title: "Data Analyst",
      fromTeam: "Data Science",
      forTeam: "Marketing",
      tags: ["Python", "SQL", "Data Visualization"],
    },
    {
      id: "5",
      title: "DevOps Engineer",
      fromTeam: "Operations",
      forTeam: "Infrastructure",
      tags: ["AWS", "Docker", "Kubernetes"],
    },
    {
      id: "6",
      title: "Mobile Developer",
      fromTeam: "Development",
      forTeam: "Product",
      tags: ["Swift", "Kotlin", "Flutter"],
    },
  ];

  return (
    <div className=" w-[35%] pl-8 pt-10 max-h-screen overflow-auto">
      <h1 className="text-5xl font-bold my-2">Hi,John Doe</h1>

      <div>
        <HealthTrackerWidget data={healthData} />
      </div>

      <div>
        <BookQuoteWidget book={bookData} />
      </div>

      <div>
        <OpportunityBoardWidget opportunities={opportunities} />
      </div>
    </div>
  );
};

export default Profile;
