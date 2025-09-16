import { Bug, User } from "lucide-react";

const RightBar = () => {
  return (
    <div className="hidden xl:flex flex-col gap-10 w-[280px] p-6 h-[1024px] overflow-y-auto bg-primary-foreground">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">Notifications</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="size-8 p-2 rounded-full bg-[#E3F5FF]">
              <Bug size={16} className="text-black" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-primary line-clamp-1">
                You have a bug thats needs
              </p>
              <p className="text-[12px] text-muted-foreground">Just now</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="size-8 p-2 rounded-full bg-[#E3F5FF]">
              <User size={16} className="text-black" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-primary line-clamp-1">
                New user registered
              </p>
              <p className="text-[12px] text-muted-foreground">
                59 minutes ago
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="size-8 p-2 rounded-full bg-[#E3F5FF]">
              <Bug size={16} className="text-black" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-primary line-clamp-1">
                You have a bug thats needs
              </p>
              <p className="text-[12px] text-muted-foreground">Just now</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="size-8 p-2 rounded-full bg-[#E3F5FF]">
              <Bug size={16} className="text-black" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-primary line-clamp-1">
                You have a bug thats needs
              </p>
              <p className="text-[12px] text-muted-foreground">Just now</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">Activites</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="size-8 p-2 rounded-full bg-[#E3F5FF]">
              <Bug size={16} className="text-black" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-primary line-clamp-1">
                You have a bug thats needs
              </p>
              <p className="text-[12px] text-muted-foreground">Just now</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="size-8 p-2 rounded-full bg-[#E3F5FF]">
              <User size={16} className="text-black" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-primary line-clamp-1">
                New user registered
              </p>
              <p className="text-[12px] text-muted-foreground">
                59 minutes ago
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="size-8 p-2 rounded-full bg-[#E3F5FF]">
              <Bug size={16} className="text-black" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-primary line-clamp-1">
                You have a bug thats needs
              </p>
              <p className="text-[12px] text-muted-foreground">Just now</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="size-8 p-2 rounded-full bg-[#E3F5FF]">
              <Bug size={16} className="text-black" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-primary line-clamp-1">
                You have a bug thats needs
              </p>
              <p className="text-[12px] text-muted-foreground">Just now</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium">Contacts</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="size-8 p-2 rounded-full bg-[#E3F5FF]">
              <Bug size={16} className="text-black" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-primary line-clamp-1">
                You have a bug thats needs
              </p>
              <p className="text-[12px] text-muted-foreground">Just now</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="size-8 p-2 rounded-full bg-[#E3F5FF]">
              <User size={16} className="text-black" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-primary line-clamp-1">
                New user registered
              </p>
              <p className="text-[12px] text-muted-foreground">
                59 minutes ago
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="size-8 p-2 rounded-full bg-[#E3F5FF]">
              <Bug size={16} className="text-black" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-primary line-clamp-1">
                You have a bug thats needs
              </p>
              <p className="text-[12px] text-muted-foreground">Just now</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="size-8 p-2 rounded-full bg-[#E3F5FF]">
              <Bug size={16} className="text-black" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-primary line-clamp-1">
                You have a bug thats needs
              </p>
              <p className="text-[12px] text-muted-foreground">Just now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
