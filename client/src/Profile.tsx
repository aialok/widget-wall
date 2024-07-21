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
      title: "Automate repetitive data entry tasks",
      fromTeam: "Operations",
      forTeam: "AI Team",
      tags: ["Automation", "AI", "Data Entry"],
    },
    {
      id: "2",
      title: "In-house analytics tool development",
      fromTeam: "Marketing",
      forTeam: "Engineering",
      tags: ["Analytics", "Development", "Cost-saving"],
    },
    {
      id: "3",
      title: "Improve internal communication platform",
      fromTeam: "HR",
      forTeam: "Product Team",
      tags: ["Communication", "UX/UI", "Productivity"],
    },
    {
      id: "4",
      title: "Develop AI-powered customer service chatbot",
      fromTeam: "Customer Support",
      forTeam: "AI Team",
      tags: ["AI", "Customer Service", "Automation"],
    },
    {
      id: "5",
      title: "Create a centralized knowledge management system",
      fromTeam: "HR",
      forTeam: "Engineering",
      tags: ["Knowledge Management", "Productivity", "Collaboration"],
    },
    {
      id: "6",
      title: "Implement predictive maintenance for manufacturing equipment",
      fromTeam: "Manufacturing",
      forTeam: "Data Science",
      tags: ["Predictive Analytics", "IoT", "Maintenance"],
    },
    {
      id: "7",
      title: "Develop a mobile app for field sales team",
      fromTeam: "Sales",
      forTeam: "Mobile Development",
      tags: ["Mobile App", "Sales", "Productivity"],
    },
    {
      id: "8",
      title: "Create an automated social media content scheduler",
      fromTeam: "Marketing",
      forTeam: "Engineering",
      tags: ["Social Media", "Automation", "Content Management"],
    },
  ];

  return (
    <div className=" w-[35%] pl-8 pt-10 max-h-screen overflow-auto">
      <h1 className="text-4xl font-bold my-2">Hi,John Wick</h1>

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
