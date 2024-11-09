"use client";
import PodcastCard from "@/components/PodcastCard";
import { podcastData } from "@/constants";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api.js";

const Home = () => {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {tasks?.map(({ _id, text }) => (
            <div
              key={_id}
              className="flex flex-col gap-2 rounded-xl border-[3.2px] border-dashed border-black-6 bg-black-1"
            >
              <h1 className="text-16 font-bold text-white-1">{text}</h1>
            </div>
          ))}
        </main>
        <div className="podcast_grid">
          {podcastData?.map(({ imgURL, title, description, id }) => (
            <PodcastCard
              key={id}
              imgUrl={imgURL as string}
              title={title}
              description={description}
              podcastId={id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
