import clsx from "clsx";
import { Users } from "lucide-react";

export default function SeparatorWithText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className="flex items-center w-full">
      <div className="flex-grow border-t border-gray-300" />

      <span className={clsx(className, "mx-4")}>{text}</span>

      <div className="flex-grow border-t border-gray-300" />
    </div>
  );
}
