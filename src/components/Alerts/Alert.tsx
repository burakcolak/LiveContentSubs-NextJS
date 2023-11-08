import React from "react";

type Props = {
  title: string;
  description: string;
  className?: string;
  theme: AlertTheme;
};

export enum AlertTheme {
  Success = "Success",
  Error = "Error",
  Warning = "Warning",
  Info = "Info",
}

const getClassByAlertTheme = (theme: AlertTheme) => {
  switch (theme) {
    case AlertTheme.Success:
      return "border-l-4 bg-green-50 border-green-20";
    case AlertTheme.Error:
      return "border-l-4 bg-red-50 border-red-200";
    case AlertTheme.Warning:
      return "border-l-4 bg-yellow-50 border-yellow-200";
    case AlertTheme.Info:
      return "border-l-4 bg-blue-50 border-blue-200";
  }
};

const Alert = ({ title, description, theme, className }: Props) => {
  return (
    <div
      className={`flex flex-col p-4 ${className} ${getClassByAlertTheme(
        theme
      )}`}
    >
      <span className="pl-2 font-semibold">{title}</span>
      <span className="pl-2 pt-2">{description}</span>
    </div>
  );
};

export default Alert;
