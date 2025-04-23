import { Button } from "reactstrap"
import IconoFontAwesome from "../FontAwesomeIcon";
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';

export const ExcelButton = () => {
  return (
    <Button className="mb-2 me-2 btn-icon btn-icon-only btn-success">
      <IconoFontAwesome icon={faFileExcel} className="btn-icon-wrapper fa-fw" />
    </Button>
  )
}
