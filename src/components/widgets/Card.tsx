 const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`bg-white shadow-md rounded-xl p-6 h-full ${className}`}>
      {children}
    </div>
  );
};
export default Card