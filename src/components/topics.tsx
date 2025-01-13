import React from "react";

export type Topic = {
  title: string;
  content: string;
};

type Props = {
  topics: Topic[];
};

export default function Topics({ topics }: Props) {
  return (
    <div className="flex flex-col gap-8">
      {topics.map((topic, index) => (
        <div key={index} className="flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-[26px] text-primary">
            {topic.title}
          </h2>
          <p className="text-dark">
            {topic.content.split("\n").map((paragraph, index) => (
              <p key={index} className="pt-4 text-[15px]">
                {paragraph}
              </p>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
