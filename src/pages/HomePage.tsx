import VideoBox from "@/components/VideoBox";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center">
      <VideoBox videoLink="/mement.mp4" />
    </main>
  );
}
