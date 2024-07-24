import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

interface BlockQuoteProps {
  children: React.ReactNode;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => (
  <h2 className="text-2xl font-bold my-4">{children}</h2>
);

const BlockQuote: React.FC<BlockQuoteProps> = ({ children }) => (
  <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
    <p>{children}</p>
  </blockquote>
);

export { BlockQuote, SectionTitle };
