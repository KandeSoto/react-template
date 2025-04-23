import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from 'reactstrap';
import IconoIonic from '../Ionicon';
import { pencilOutline, trashOutline, ellipsisVertical } from 'ionicons/icons';

interface ActionDropdownProps<T> {
  item: T;
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  showEdit?: boolean;
  showDelete?: boolean;
}

export const ActionDropdown = <T,>({
  item,
  onEdit,
  onDelete,
  showEdit = true,
  showDelete = true,
}: ActionDropdownProps<T>) => {
  const shouldRender = showEdit || showDelete;

  if (!shouldRender) return null;

  return (
    <UncontrolledDropdown inNavbar>
      <DropdownToggle nav>
        <IconoIonic name={ellipsisVertical} />
      </DropdownToggle>
      <DropdownMenu end className="dropdown-menu-catalog">
        <DropdownItem className="dropdown-item-catalog-no-hover">
          {showEdit && onEdit && (
            <Button
              size="sm"
              color="warning"
              className="me-2"
              onClick={() => onEdit(item)}
            >
              <IconoIonic name={pencilOutline} />
            </Button>
          )}
          {showDelete && onDelete && (
            <Button
              size="sm"
              color="danger"
              onClick={() => onDelete(item)}
            >
              <IconoIonic name={trashOutline} />
            </Button>
          )}
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
