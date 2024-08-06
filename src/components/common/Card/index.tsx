import { twMerge } from "tailwind-merge";
import { CardProps } from "./type";

export function Card(props: CardProps) {
  const { children, className, ...rest } = props;

  return (
    <div
      className={twMerge("rounded-sm p-4 m-0 bg-transparent", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
