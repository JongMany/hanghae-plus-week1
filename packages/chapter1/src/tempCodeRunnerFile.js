function JuniorEngineer(health, intelligence) {
  this._super(health);
  this._intelligence = intelligence ?? 1;
  if (this._intelligence > 10) {
    this._isBornGenius = true;
  }
}