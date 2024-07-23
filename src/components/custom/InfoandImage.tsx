import TextAnimation from "@/animations/TextAnimation";

interface InfoandImageProps {
  title: string;
  description: string;
  mapImg: string;
  link: string;
}
export default function Component({title, description, mapImg, link}: InfoandImageProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 md:p-8">
      <div className="w-full md:w-1/2">
        <img
          src={mapImg}
          alt="Info Provider"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg aspect-[3/2] object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">
          {title}
        </h2>
        <div className="text-muted-foreground text-base md:text-lg leading-relaxed line-clamp-6">
          <TextAnimation text={description} />
        </div>
      </div>
    </div>
  );
}
