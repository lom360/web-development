export class LikeComponents {
    constructor(public likesCount:number, public isSelected:boolean){
    }

    onClick() {
        // if (this.isSelected) {
        //     this.likesCount--;
        //     this.isSelected = false;
        // }else{
        //     this.likesCount++;
        //     this.isSelected = true;
        // }

        // The statment below is uses a "conditional operator".
        // If you are going to have only an "if and else" and
        // no "else if", then this can be much cleaner.
        this.likesCount += (this.isSelected) ? -1 : 1;

        // The code below represents a way
        // to toggle the value of "isSelected".
        // Instead of using the two statement
        // in the if-else statement to toggle.
        this.isSelected = !this.isSelected;
    }
}