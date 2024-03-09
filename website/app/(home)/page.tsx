import DownloadApp from "@/components/download-app";
import OpenSource from "@/components/open-source";

const RootPage = () => {
  return (
    <section className="mx-auto flex flex-col items-center gap-3 sm:gap-5 py-8 md:py-16 md:pb-8 lg:py-24 lg:pb-8">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] max-w-sm md:max-w-3xl">
        <span className="font-bold text-[#FE4C55]"> Blink Eye </span> A
        minimalist eye care reminder app.
      </h1>
      <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
        To reduce eye strain, featuring reminder with timers, full-screen
        popups.
      </p>
      <div className="flex flex-col gap-8 sm:gap-16 md:gap-24">
        <DownloadApp />
        <OpenSource />
      </div>
    </section>
  );
};

export default RootPage;
