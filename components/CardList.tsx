import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";

const list = [
  "Google",
  "Youtube",
  "Instagram",
  "Pinterest",
  "Facebook",
  "Twitter",
  "Tumbir",
];

const CardList = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className="text-lg font-medium mb-6">{title}</h1>
      <ScrollArea className="h-[400px] pr-4">
        <div className="flex flex-col gap-8">
          {list.map((item) => (
            <div className="flex items-center gap-8" key={item}>
              <p className="text-primary">{item}</p>
              <div className="flex-1 p-2 bg-gray-200 animate-pulse rounded-lg"></div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </>
  );
};

export default CardList;
