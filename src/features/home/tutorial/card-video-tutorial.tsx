export default function CardVideoTutorial() {
  return (
    <div className="aspect-video w-full 2xl:w-[320px] h-full">
      <iframe
        className="h-full w-full rounded-[32px]"
        src="https://www.youtube.com/embed/Q5W5FYFzcEk?si=78KuE28IAcD0kOTZ"
        title="YouTube video player"
      />
    </div>
  );
}
