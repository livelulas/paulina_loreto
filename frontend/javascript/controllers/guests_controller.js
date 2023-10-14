import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  static targets = ["guests"]

  connect() {
    if (this.showGuestsSection()) {
      this.setGuest()
    } else {
      this.element.classList.add("d-none")
    }
  }

  showGuestsSection() {
    return this.numberOfGuest() > 0
  }

  setGuest() {
    this.guestsTarget.innerHTML = this.numberOfGuest() + " PERSONAS"
  }

  numberOfGuest() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return parseInt(urlParams.get("invitados"))
  }
}