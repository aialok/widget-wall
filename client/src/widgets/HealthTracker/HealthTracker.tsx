import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FootprintsIcon, FlameIcon, ActivityIcon } from "lucide-react";

interface HealthTrackerWidgetProps {
  data: {
    steps: number;
    caloriesBurned: number;
    activeMinutes: number;
    stepsGoal: number;
    caloriesGoal: number;
    activeMinutesGoal: number;
  };
}

const HealthTrackerWidget: React.FC<HealthTrackerWidgetProps> = ({ data }) => {
  const { steps, caloriesBurned, activeMinutes, stepsGoal, caloriesGoal, activeMinutesGoal } = data;

  return (
    <Card className="h-full shadow-md w-10/12 -ml-3 mt-4">
      <CardContent className="p-4 space-y-3">
        <h3 className="text-lg font-semibold mb-2">Health Tracker</h3>
        <div className="grid grid-cols-3 gap-2">
          <StatItem
            icon={<FootprintsIcon className="w-4 h-4 text-blue-500" />}
            value={steps}
            goal={stepsGoal}
            label="Steps"
          />
          <StatItem
            icon={<FlameIcon className="w-4 h-4 text-orange-500" />}
            value={caloriesBurned}
            goal={caloriesGoal}
            label="Calories"
          />
          <StatItem
            icon={<ActivityIcon className="w-4 h-4 text-green-500" />}
            value={activeMinutes}
            goal={activeMinutesGoal}
            label="Active"
          />
        </div>
      </CardContent>
    </Card>
  );
};

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  goal: number;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, goal, label }) => (
  <div className="flex flex-col items-center">
    {icon}
    <span className="text-xs font-medium mt-1">{label}</span>
    <span className="text-sm font-bold">{value}</span>
    <Progress value={(value / goal) * 100} className="h-1 w-12 mt-1" />
  </div>
);

export default HealthTrackerWidget;
