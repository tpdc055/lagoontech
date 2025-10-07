import * as React from "react";

export const Card = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => <div className={className} {...props} />;

export const CardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => <div className={className} {...props} />;

export const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => <div className={className} {...props} />;

export const CardFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => <div className={className} {...props} />;

export const CardTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => <h3 className={className} {...props} />;

export const CardDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => <p className={className} {...props} />;
