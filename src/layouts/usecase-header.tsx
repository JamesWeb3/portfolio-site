import Image from "next/image";

interface Stat {
  value: string;
  label: string;
}

interface UseCaseHeaderProps {
  title: string;
  description: string;
  videoSrc?: string;
  iframeSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
  stats?: Stat[];
}

export default function UseCaseHeader({
  title,
  description,
  videoSrc,
  iframeSrc,
  imageSrc,
  imageAlt,
  stats,
}: UseCaseHeaderProps) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground">{description}</p>

      <div className="rounded-xl overflow-hidden border border-border">
        {iframeSrc ? (
          <iframe
            src={iframeSrc}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full aspect-video"
          />
        ) : videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            width={1280}
            height={720}
            className="w-full h-auto"
          />
        ) : null}
      </div>

      {stats && stats.length > 0 && <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="border border-border rounded-lg p-4 text-center bg-muted"
          >
            <p className="text-2xl md:text-3xl font-bold text-foreground">
              {stat.value}
            </p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>}
    </div>
  );
}
