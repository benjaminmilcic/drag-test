import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CdkDrag } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'drag-test';
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

 
}

 @Component({
   selector: 'dialog-content-example-dialog',
   templateUrl: './dialog-content-example-dialog.html',
   standalone: true,
   imports: [MatDialogModule, MatButtonModule,CdkDrag],
 })
 export class DialogContentExampleDialog {}