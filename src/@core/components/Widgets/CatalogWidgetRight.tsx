import { AddButton, ExcelButton } from "../Buttons";

interface CatalogWidgetRightProps {
  onNew: () => void;
}

export const CatalogWidgetRight = ({ onNew }: CatalogWidgetRightProps) => {
  return (
    <div className="widget-content p-0">
      <div className="widget-content-wrapper">                                                
          <div className="widget-content-right">    
              <ExcelButton />                                                                                                                                                                                  
              <AddButton onNew={onNew}/>   
          </div>                                    
      </div>
    </div>
  )
}
