type CardVideoTutorialProps = {
  src: string;
};

export default function CardVideoTutorial({ src }: CardVideoTutorialProps) {
  return (
    <div className="aspect-video w-full 2xl:w-full h-full">
      <iframe
        className="h-full w-full rounded-[32px]"
        src={src}
        title="YouTube video player"
      />
    </div>
  );
}
