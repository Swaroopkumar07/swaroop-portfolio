export default function SectionHeading({ number, children }) {
  return (
    <h2 className="section-heading">
      <span>{number}.</span> {children}
    </h2>
  );
}