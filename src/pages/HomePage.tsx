import VideoBox from "@/components/videoBox";

export default function HomePage() {
  return (
    <main className="flex flex-col h-full justify-center pl-8">
      <VideoBox videoLink="https://youtu.be/ibbxPim795M?feature=shared" />
    </main>
  );
}
