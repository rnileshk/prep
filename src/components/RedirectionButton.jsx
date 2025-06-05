import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

function RedirectButton({ label, targetPath }) {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  const handleClick = () => {
    if (isSignedIn) {
      navigate(targetPath);
    } else {
      toast.error("Please log in to access this page.");
    }
  };

  return (
    <button className="redirection" onClick={handleClick}>
      {label}
    </button>
  );
}

export default RedirectButton;
