import {
    AngularmService, EntityLineComponent, 
    CreateEntityComponent, EditEntityFormComponent,
    FormLineComponent, EditFormLineComponent,
    EntityDetailsComponent, ShowLineComponent,
    ListingTableComponent
} from 'angularm';

import { TableHeaderComponent } from "./widgets/table.header";
import { TableCellComponent } from "./widgets/table.cell";
import { CellEntityLineComponent } from "./widgets/cell.entity.line";
import { CssListTableComponent } from "./widgets/css.list.table";
import { CustomTableHeaderComponent } from "app/widgets/custom.table.header";
import { CustomTableCellComponent } from "app/widgets/custom.table.cell";

export let defineRules = (angularm: AngularmService) => {
    angularm
        .ptr('form_line', '*', 'code', null, FormLineComponent, { inputType: 'number' })
        .dptr('form_line', FormLineComponent, { inputType: 'text' })
        .dpr('show_line', ShowLineComponent)
        .detr('list_entities', CssListTableComponent)
        .ptr('table_header', '*', '*', 'integer', CustomTableHeaderComponent)
        .ptr('table_header', '*', '*', 'date', CustomTableHeaderComponent)
        .dptr('table_header', TableHeaderComponent)
        .der('table_line', CellEntityLineComponent)
        .pr('table_cell', '*', '*', 'integer', CustomTableCellComponent)
        .pr('table_cell', '*', '*', 'date', CustomTableCellComponent)
        .dpr('table_cell', TableCellComponent)
        .der('show_entity', EntityDetailsComponent)
        .detr('create_form', CreateEntityComponent)
        .der('edit_form', EditEntityFormComponent)
        .pr('edit_form_line', '*', 'code', null, EditFormLineComponent, { inputType: 'number' })
        .dpr('edit_form_line', EditFormLineComponent, { inputType: 'text' });
};
