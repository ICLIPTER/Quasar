import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const woorkspaces = [
  {
    id: "1",
    name: "Quasar 1",
    avatar: "Q",
  },
  {
    id: "2",
    name: "Quasar 2",
    avatar: "Q 2",
  },
  {
    id: "3",
    name: "Quasar 3",
    avatar: "Q 3",
  },
];

const colorCombinations = [
  "bg-blue-500 hover:bg-blue-600 text-white",
  "bg-green-500 hover:bg-green-600 text-white",
  "bg-yellow-500 hover:bg-yellow-600 text-white",
  "bg-red-500 hover:bg-red-600 text-white",
  "bg-purple-500 hover:bg-purple-600 text-white",
  "bg-pink-500 hover:bg-pink-600 text-white",
  "bg-indigo-500 hover:bg-indigo-600 text-white",
];

const getWorkspaceColor = (id: string) => {
  const charSum = id
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);

  const colorIndex = charSum % colorCombinations.length;

  return colorCombinations[colorIndex];
};

export function WorkspaceList() {
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-2 ">
        {woorkspaces.map((ws) => (
          <Tooltip key={ws.id}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className={cn(
                  "size-12 transition-all duration-200",
                  getWorkspaceColor(ws.id)
                )}
              >
                <span className="text-sm font-semibold">{ws.avatar}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{ws.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
