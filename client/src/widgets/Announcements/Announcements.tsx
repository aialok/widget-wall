import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { useEffect, useState } from "react";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = (props : any) => {
  // const fetchData = async () => {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   const data = await res.json();
  //   console.log(data
  // }

  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor:  "#1E86FF",
          }}
        >
          <span className="text-lg">{"💬"}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{"Annoucement"}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{"5m ago"}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {props.name}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function Announcements({ className }: { className?: string }) {
  const [announcement, setAnnouncement] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/v1/announcement")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setAnnouncement(res.data);
      });
  }, []);

  /*



  */

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className
      )}
    >
      <AnimatedList>
        {announcement.map((item, idx) => (
          <Notification name={item.description} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
