import React from "react";

export const Avatar = ({ children }) => <div className="avatar">{children}</div>;

export const AvatarImage = ({ src, alt }) => (
  <img className="avatar-image" src="vite.svg" alt={alt} />
);

export const AvatarFallback = ({ children }) => (
  <div className="avatar-fallback">{children}</div>
);