import {
  OknoClose,
  OknoContent,
  OknoFooter,
  OknoMaximize,
  OknoMinimize,
  OknoResize,
  OknoTitlebar,
  OknoWindow,
} from "components/OknoWindow";
import Okno from "lib/Okno";

interface DefaultOknoWindowProps {
  okno: Okno;
  children?: React.ReactNode;
}
export default function DefaultOknoWindow({
  okno,
  children,
}: DefaultOknoWindowProps) {
  return (
    <OknoWindow okno={okno}>
      <OknoTitlebar>
        <OknoMinimize>Minimize</OknoMinimize>
        <OknoMaximize>Maximize</OknoMaximize>
        <OknoClose>Close</OknoClose>
      </OknoTitlebar>
      <OknoContent>{children}</OknoContent>
      <OknoFooter>
        <OknoResize />
      </OknoFooter>
    </OknoWindow>
  );
}
