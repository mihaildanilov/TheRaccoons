import { Link } from '@/i18n';
import { Button } from './ui/button';

const GreenButton = ({
  buttonHref,
  buttonText,
  buttonStyles,
}: {
  buttonHref: string;
  buttonText: string;
  buttonStyles?: string;
}) => {
  return (
    <Button
      className={`bg-hotgreen rounded-full text-background font-bold min-w-[100px] ${buttonStyles}`}
      asChild>
      <Link href={buttonHref} className="font-bold">
        {buttonText}
      </Link>
    </Button>
  );
};

export default GreenButton;
