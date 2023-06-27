import { Component, inject  } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';


@Component({
  selector: 'app-tutorial-add',
  templateUrl: './tutorial-add.component.html',
  styleUrls: ['./tutorial-add.component.scss']
})

export class TutorialAddComponent {
  

  tutorial: Tutorial = new Tutorial();
  submitted = false;

 constructor( private tutorialService: TutorialService) {
  console.log('demo')
 }

 saveTutorial(): void {
  this.tutorialService.create(this.tutorial).then(() => {
    console.log('Created new item successfully!');
    this.submitted = true;
  });
}


newTutorial(): void {
  this.submitted = false;
  this.tutorial = new Tutorial();
}

}
