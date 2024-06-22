import React from 'react';

// Function to flatten Portable Text content into JSX
function flattenText(content) {
  if (!content) return null;

  return content.map((block, index) => {
    if (block._type === 'block' && block.children) {
      return (
        <span key={index}>
          {block.children.map((span, spanIndex) =>
            span.marks.includes('strong') ? (
              <strong key={spanIndex}>{span.text}</strong>
            ) : (
              span.text
            )
          )}
        </span>
      );
    }
    return null;
  });
}

const RichTextToParagraph = ({ richText, variant }) => {
  // Convert the rich text to JSX
  const jsxContent = flattenText(richText);

  return (
    <p
      className={`font-body font-normal text-neutral-100 ${variant === 'large' ? 'text-base' : 'text-sm'}`}
    >
      {jsxContent}
    </p>
  );
};

export default RichTextToParagraph;
