import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  imports: [MatButtonModule, MatTableModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatDialogModule, MatTooltipModule, MatFormFieldModule, MatInputModule, FormsModule, MatIconModule, MatExpansionModule],
  exports: [MatButtonModule, MatTableModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatDialogModule, MatTooltipModule, MatFormFieldModule, MatInputModule, FormsModule,MatIconModule, MatExpansionModule],
})
export class MaterialModule { 
  
}