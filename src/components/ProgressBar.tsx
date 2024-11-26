interface props { progress:number }

export const ProgressBar = ({ progress }: props) => {
    return (
        <div className="flex gap-2 text-xs font-semibold mt-1">
            <div className="rounded w-full bg-[#e0e0df]">
                <div
                className="bg-[#4333A0] h-full rounded"
                style={{
                    width: `${progress}%`,
                    transition: "width 0.5s ease-in-out",
                }}
                />
            </div>
            <p>{progress}%</p>
        </div>
    );
  };