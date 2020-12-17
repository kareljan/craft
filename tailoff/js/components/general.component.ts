export class GeneralComponent {
  constructor() {
    this.addOutlineForTabbers();
  }

  // This adds a class if the user is tabbing and thus using the keyboard, so the focus style will be visible. Otherwise if it's a clicker the focus is removed.
  private addOutlineForTabbers() {
    function handleFirstTab(e) {
      if (e.keyCode === 9) {
        // the "I am a keyboard user" key
        document.body.classList.add("user-is-tabbing");
        window.removeEventListener("keydown", handleFirstTab);
      }
    }
    window.addEventListener("keydown", handleFirstTab);
  }
}
