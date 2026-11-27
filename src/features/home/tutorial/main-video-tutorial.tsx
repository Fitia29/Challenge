export default function MainVideoTutorial() {
  return (
    <div className="aspect-video w-full xl:w-[40%] 2xl:w-full">
      <iframe
        className="h-full w-full rounded-[32px]"
        src="https://www.youtube.com/embed/f0P_6U0xVc8?si=TPLRmxuWLIlDGAi5" 
        title="YouTube video player"
      />
    </div>
  );
}
