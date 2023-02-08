import Link from 'next/link';

interface StyledLinkProps {
  href: string;
  label: string;
}

export const StyledLink = ({ href, label }: StyledLinkProps) => {
  return (
    <div className="mt-3">
      <Link href={href} className="font-bold text-blue-600 hover:underline">
        {label}
      </Link>
    </div>
  );
};
